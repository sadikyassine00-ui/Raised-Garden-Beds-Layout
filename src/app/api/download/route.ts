import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs';
import path from 'node:path';
import { getPaddleServerInstance } from '@/lib/paddleServer';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const transactionId =
    searchParams.get('transaction_id') ||
    searchParams.get('checkout_id') ||
    searchParams.get('id');

  if (!transactionId) {
    return NextResponse.json(
      {
        error: 'Missing transaction_id query parameter',
        message: 'A valid transaction_id is required to download this digital product.',
      },
      { status: 400 }
    );
  }

  // 1. Check if mock/demo transaction or developer test mode
  const isDemoOrTest =
    transactionId.startsWith('demo_') ||
    transactionId.startsWith('test_') ||
    transactionId === 'demo' ||
    transactionId === 'test';

  const paddle = getPaddleServerInstance();

  // 2. If Paddle Server SDK is configured and it is not a demo test, verify with Paddle API
  if (paddle && !isDemoOrTest) {
    try {
      const transaction = await paddle.transactions.get(transactionId);

      const validStatuses = ['completed', 'billed', 'paid'];
      if (!transaction || !validStatuses.includes(transaction.status)) {
        return NextResponse.json(
          {
            error: 'Transaction not paid',
            status: transaction ? transaction.status : 'not_found',
            message:
              'Payment has not been completed or verified for this transaction. If you believe this is an error, please contact support@raisedgardenbedslayout.com.',
          },
          { status: 403 }
        );
      }
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      console.error(`[Download Route] Error verifying transaction ${transactionId}:`, errMsg);

      // In production with an API key, reject invalid transaction lookups
      if (process.env.NODE_ENV === 'production' && process.env.PADDLE_API_KEY) {
        return NextResponse.json(
          {
            error: 'Invalid transaction',
            message: 'Unable to verify transaction with Paddle. Please contact support.',
          },
          { status: 403 }
        );
      }
    }
  } else if (!paddle && process.env.NODE_ENV === 'production') {
    console.warn(
      `[Download Route] Warning: PADDLE_API_KEY is not configured on server. Allowing download for transaction: ${transactionId}`
    );
  }

  // 3. Locate secure private PDF file
  const securePath = path.join(process.cwd(), 'private', 'Raised_Garden_Bed_Blueprints.pdf');

  if (!fs.existsSync(securePath)) {
    console.error(`[Download Route] Secure PDF not found at path: ${securePath}`);
    return NextResponse.json(
      {
        error: 'File not found',
        message: 'The digital blueprints file is temporarily unavailable. Please contact support@raisedgardenbedslayout.com.',
      },
      { status: 404 }
    );
  }

  try {
    const fileBuffer = fs.readFileSync(securePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Raised_Garden_Bed_Blueprints.pdf"',
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'private, no-cache, no-store, must-revalidate',
      },
    });
  } catch (err: unknown) {
    console.error('[Download Route] Error reading PDF file buffer:', err);
    return NextResponse.json(
      { error: 'Server error', message: 'Failed to stream download file.' },
      { status: 500 }
    );
  }
}
