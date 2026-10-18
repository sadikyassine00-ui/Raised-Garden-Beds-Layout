import { NextRequest, NextResponse } from 'next/server';
import { getPaddleServerInstance } from '@/lib/paddleServer';
import { sendDeliveryEmail } from '@/lib/email';
import { EventName } from '@paddle/paddle-node-sdk';

export const dynamic = 'force-dynamic';

let cachedIps: string[] = [];
let lastIpFetchTime = 0;
const IP_CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24-hour cache

async function getPaddleAllowedIps(): Promise<string[]> {
  const now = Date.now();
  if (cachedIps.length > 0 && now - lastIpFetchTime < IP_CACHE_TTL_MS) {
    return cachedIps;
  }
  try {
    const res = await fetch('https://api.paddle.com/ips');
    if (res.ok) {
      const json = await res.json();
      const cidrs = json.data?.ipv4_cidrs || [];
      cachedIps = cidrs.map((cidr: string) => cidr.replace('/32', '').trim());
      lastIpFetchTime = now;
      return cachedIps;
    }
  } catch (err) {
    console.warn('[Paddle Webhook] Failed to fetch live Paddle IPs:', err);
  }
  return cachedIps;
}

export async function POST(request: NextRequest) {
  // 1. IP Allowlist Security Check in Production
  const isProduction = process.env.NEXT_PUBLIC_PADDLE_ENV === 'production';
  if (isProduction) {
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip');

    if (clientIp) {
      const allowedIps = await getPaddleAllowedIps();
      if (allowedIps.length > 0 && !allowedIps.includes(clientIp)) {
        console.warn(`[Paddle Webhook] Rejected request from unauthorized IP: ${clientIp}`);
        return NextResponse.json({ error: 'Unauthorized IP address' }, { status: 403 });
      }
    }
  }

  const signature = request.headers.get('paddle-signature') || '';
  const rawBody = await request.text();
  const webhookSecret = process.env.PADDLE_NOTIFICATION_WEBHOOK_SECRET || '';

  if (!rawBody) {
    return NextResponse.json({ error: 'Empty payload' }, { status: 400 });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let eventData: any = null;
  const paddle = getPaddleServerInstance();

  // 2. Verify HMAC signature if secret and SDK are available
  if (paddle && webhookSecret && signature) {
    try {
      eventData = await paddle.webhooks.unmarshal(rawBody, webhookSecret, signature);
    } catch (err: unknown) {
      console.error('[Paddle Webhook] Signature verification failed:', err);
      // Return 500 so Paddle retries on genuine secret rotation/propagation
      return NextResponse.json({ error: 'Signature verification failed' }, { status: 500 });
    }
  } else {
    // Development / unverified testing mode fallback
    try {
      eventData = JSON.parse(rawBody);
      if (!webhookSecret) {
        console.warn(
          '[Paddle Webhook] Warning: PADDLE_NOTIFICATION_WEBHOOK_SECRET is not configured. Processing unverified payload in test mode.'
        );
      }
    } catch (parseErr) {
      console.error('[Paddle Webhook] JSON parse error:', parseErr);
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }
  }

  const eventType = eventData?.eventType || eventData?.event_type;
  console.log(`[Paddle Webhook] Received event: ${eventType} (ID: ${eventData?.eventId || eventData?.event_id})`);

  // 3. Handle transaction.completed & transaction.paid
  if (
    eventType === EventName.TransactionCompleted ||
    eventType === 'transaction.completed' ||
    eventType === 'transaction.paid'
  ) {
    const data = eventData?.data;
    const transactionId = data?.id;
    const customerEmail =
      data?.customer?.email ||
      data?.customer_email ||
      data?.details?.customer?.email;
    const customerName =
      data?.customer?.name ||
      data?.details?.customer?.name ||
      '';

    const rawTotal = data?.details?.totals?.total || data?.details?.totals?.subtotal;
    const amountFormatted = rawTotal ? `$${(Number(rawTotal) / 100).toFixed(2)} USD` : '$9.00 USD';

    console.log(`[Paddle Webhook] Processing delivery for transaction ${transactionId} to ${customerEmail}`);

    if (customerEmail && transactionId) {
      try {
        const emailResult = await sendDeliveryEmail({
          to: customerEmail,
          transactionId,
          customerName,
          amountFormatted,
        });

        if (!emailResult.success) {
          console.warn(`[Paddle Webhook] Delivery email warning: ${emailResult.error}`);
        }
      } catch (emailErr) {
        console.error('[Paddle Webhook] Error triggering delivery email:', emailErr);
      }
    } else {
      console.warn(
        `[Paddle Webhook] Missing customerEmail (${customerEmail}) or transactionId (${transactionId}). Email delivery skipped.`
      );
    }
  }

  // 4. Fast 200 OK acknowledgment to prevent Paddle timeout retries
  return NextResponse.json({ received: true });
}
