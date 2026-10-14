import { NextRequest, NextResponse } from 'next/server';
import { getPaddleServerInstance } from '@/lib/paddleServer';
import { sendDeliveryEmail } from '@/lib/email';
import { EventName } from '@paddle/paddle-node-sdk';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const signature = request.headers.get('paddle-signature') || '';
  const rawBody = await request.text();
  const webhookSecret = process.env.PADDLE_NOTIFICATION_WEBHOOK_SECRET || '';

  if (!rawBody) {
    return NextResponse.json({ error: 'Empty payload' }, { status: 400 });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let eventData: any = null;
  const paddle = getPaddleServerInstance();

  // 1. Verify HMAC signature if secret and SDK are available
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

  // 2. Handle transaction.completed
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

  // 3. Fast 200 OK acknowledgment to prevent Paddle timeout retries
  return NextResponse.json({ received: true });
}
