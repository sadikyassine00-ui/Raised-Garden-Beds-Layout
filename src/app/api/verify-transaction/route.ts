import { NextRequest, NextResponse } from 'next/server';
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
        verified: false,
        error: 'Missing transaction_id query parameter',
      },
      { status: 400 }
    );
  }

  const result = await verifyPaddleTransaction(transactionId);
  return NextResponse.json(result, { status: result.verified ? 200 : 403 });
}
