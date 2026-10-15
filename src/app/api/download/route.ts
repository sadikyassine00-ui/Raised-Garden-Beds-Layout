import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs';
import path from 'node:path';
import { verifyPaddleTransaction } from '@/lib/paddleServer';

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

  // Verify transaction with Paddle backend
  const verification = await verifyPaddleTransaction(transactionId);
  if (!verification.verified) {
    return NextResponse.json(
      {
        error: 'Verification failed',
        status: verification.status || 'unverified',
        message:
          verification.error ||
          'Payment has not been completed or verified for this transaction. If you believe this is an error, please contact support@raisedgardenbedslayout.com.',
      },
      { status: 403 }
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
