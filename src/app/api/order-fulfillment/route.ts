import { NextRequest, NextResponse } from 'next/server';
import { verifyPaddleTransaction } from '@/lib/paddleServer';
import { sendDeliveryEmail } from '@/lib/email';

export const dynamic = 'force-dynamic';

// In-memory deduplication set to prevent duplicate emails for the same transaction
const fulfilledTransactions = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const transactionId = body.transaction_id || body.checkout_id;
    const customerEmail = body.customer_email || body.email;
    const customerName = body.customer_name || body.name || '';

    if (!transactionId) {
      return NextResponse.json(
        { error: 'Missing transaction_id in fulfillment request' },
        { status: 400 }
      );
    }

    const cleanId = String(transactionId).trim();

    // 1. Verify transaction status
    const verification = await verifyPaddleTransaction(cleanId);
    if (!verification.verified) {
      console.warn(`[Order Fulfillment] Transaction ${cleanId} verification failed:`, verification.error);
      return NextResponse.json(
        { error: 'Transaction verification failed', details: verification.error },
        { status: 403 }
      );
    }

    const recipient = customerEmail || verification.customerEmail;
    if (!recipient) {
      console.warn(`[Order Fulfillment] No recipient email found for transaction ${cleanId}`);
      return NextResponse.json(
        { error: 'No recipient email available for transaction' },
        { status: 400 }
      );
    }

    // 2. Prevent duplicate email sending
    const dedupKey = `${cleanId}_${recipient}`;
    if (fulfilledTransactions.has(dedupKey)) {
      console.log(`[Order Fulfillment] Transaction ${cleanId} already fulfilled. Skipping duplicate email.`);
      return NextResponse.json({
        success: true,
        alreadyFulfilled: true,
        transactionId: cleanId,
      });
    }

    // 3. Dispatch delivery email via Resend
    console.log(`[Order Fulfillment] Sending delivery email for transaction ${cleanId} to ${recipient}...`);
    const emailResult = await sendDeliveryEmail({
      to: recipient,
      transactionId: cleanId,
      customerName,
      amountFormatted: verification.amountFormatted || '$9.00 USD',
    });

    if (emailResult.success) {
      fulfilledTransactions.add(dedupKey);
      // Keep set bounded
      if (fulfilledTransactions.size > 2000) {
        const first = fulfilledTransactions.values().next().value;
        if (first) fulfilledTransactions.delete(first);
      }
      return NextResponse.json({
        success: true,
        emailId: emailResult.id,
        transactionId: cleanId,
      });
    } else {
      console.error(`[Order Fulfillment] Email dispatch failed for ${cleanId}:`, emailResult.error);
      return NextResponse.json(
        { error: 'Failed to send delivery email', details: emailResult.error },
        { status: 500 }
      );
    }
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : String(err);
    console.error('[Order Fulfillment] Exception handling fulfillment:', errMsg);
    return NextResponse.json(
      { error: 'Internal server error processing fulfillment', message: errMsg },
      { status: 500 }
    );
  }
}
