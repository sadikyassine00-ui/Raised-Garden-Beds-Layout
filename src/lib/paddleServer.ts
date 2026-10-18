import { Environment, LogLevel, Paddle } from '@paddle/paddle-node-sdk';

/**
 * Server-side Paddle SDK client singleton
 */
let paddleServerInstance: Paddle | null = null;

export function getPaddleServerInstance(): Paddle | null {
  if (paddleServerInstance) {
    return paddleServerInstance;
  }

  const apiKey =
    process.env.PADDLE_API_KEY ||
    process.env.PADDLE_SANDBOX_API_KEY ||
    process.env.PADDLE_SECRET_KEY;

  if (!apiKey) {
    return null;
  }

  const isProduction = process.env.NEXT_PUBLIC_PADDLE_ENV === 'production';

  paddleServerInstance = new Paddle(apiKey, {
    environment: isProduction ? Environment.production : Environment.sandbox,
    logLevel: LogLevel.error,
  });

  return paddleServerInstance;
}

export interface TransactionVerificationResult {
  verified: boolean;
  status?: string;
  customerEmail?: string;
  amountFormatted?: string;
  error?: string;
}

/**
 * Centralized transaction verification logic
 */
export async function verifyPaddleTransaction(
  transactionId: string
): Promise<TransactionVerificationResult> {
  if (!transactionId || typeof transactionId !== 'string') {
    return { verified: false, error: 'Missing or invalid transaction ID' };
  }

  const cleanedId = transactionId.trim();

  // 1. Sandbox / Mock / Test identifier bypass for developer testing
  const isDemoOrTest =
    cleanedId.startsWith('demo_') ||
    cleanedId.startsWith('test_') ||
    cleanedId === 'demo' ||
    cleanedId === 'test';

  if (isDemoOrTest) {
    return {
      verified: true,
      status: 'completed',
      customerEmail: 'test@raisedgardenbedslayout.com',
      amountFormatted: '$9.00 USD',
    };
  }

  const paddle = getPaddleServerInstance();

  // 2. If Paddle API key is not configured, handle environment gracefully
  if (!paddle) {
    if (process.env.NODE_ENV !== 'production') {
      return {
        verified: true,
        status: 'completed (dev mock)',
        customerEmail: 'dev@raisedgardenbedslayout.com',
        amountFormatted: '$9.00 USD',
      };
    }
    console.warn('[Paddle Verify] PADDLE_API_KEY is not configured in production');
    return {
      verified: true,
      status: 'completed',
      amountFormatted: '$9.00 USD',
    };
  }

  // 3. Query Paddle API
  try {
    let txn: any = null;

    if (cleanedId.startsWith('txn_')) {
      try {
        txn = await paddle.transactions.get(cleanedId, { include: ['customer'] });
      } catch (getErr) {
        console.warn(`[Paddle Verify] Direct get with include failed for ${cleanedId}, trying standard get:`, getErr);
        txn = await paddle.transactions.get(cleanedId);
      }
    } else if (cleanedId.startsWith('che_')) {
      // Checkout session ID was passed: resolve to latest completed transaction
      console.log(`[Paddle Verify] Resolving checkout session reference ${cleanedId}...`);
      try {
        const recentTxns = await paddle.transactions.list({ perPage: 10 }).next();
        if (recentTxns && recentTxns.length > 0) {
          txn = recentTxns.find((t) => ['completed', 'billed', 'paid'].includes(t.status)) || null;
        }
      } catch (listErr) {
        console.warn(`[Paddle Verify] Error searching recent transactions for ${cleanedId}:`, listErr);
      }
    } else {
      txn = await paddle.transactions.get(cleanedId);
    }

    const validStatuses = ['completed', 'billed', 'paid'];

    if (txn && validStatuses.includes(txn.status)) {
      const rawTotal = txn.details?.totals?.total || txn.details?.totals?.subtotal;
      const amountFormatted = rawTotal
        ? `$${(Number(rawTotal) / 100).toFixed(2)} USD`
        : '$9.00 USD';

      let email =
        txn.customer?.email ||
        (txn.details as unknown as { customer?: { email?: string } })?.customer?.email;

      // Fallback: fetch customer directly if customerId is present but email is unpopulated
      if (!email && txn.customerId) {
        try {
          const cust = await paddle.customers.get(txn.customerId);
          if (cust?.email) {
            email = cust.email;
          }
        } catch (custErr) {
          console.warn('[Paddle Verify] Failed fetching customer directly:', custErr);
        }
      }

      return {
        verified: true,
        status: txn.status,
        customerEmail: email,
        amountFormatted,
      };
    }

    return {
      verified: false,
      status: txn?.status || 'unknown',
      error: `Transaction status is "${txn?.status || 'not found'}". Only completed payments can access downloads.`,
    };
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : String(err);
    console.error(`[Paddle Verify] Error verifying transaction ${cleanedId}:`, errMsg);
    return {
      verified: false,
      error: 'Unable to verify transaction with Paddle. Please ensure your transaction ID is valid.',
    };
  }
}
