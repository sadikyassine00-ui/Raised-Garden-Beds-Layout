import { initializePaddle, type Paddle, type Environments } from '@paddle/paddle-js';

export const PADDLE_CLIENT_TOKEN =
  process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN || 'live_50f07b6dbecaece813b1442da3b';

export const PADDLE_ENV: Environments =
  (process.env.NEXT_PUBLIC_PADDLE_ENV as Environments) || 'production';

export const PADDLE_PRICE_ID =
  process.env.NEXT_PUBLIC_PADDLE_PRICE_ID || 'pri_01m584r1p64ycre8ryg6h24rg1';

let paddleInstance: Paddle | null = null;
let initPromise: Promise<Paddle | null> | null = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleCheckoutSuccess(checkoutData: any) {
  if (typeof window === 'undefined') return;

  const checkoutId = checkoutData?.id || checkoutData?.transaction_id || '';
  const customerId =
    checkoutData?.customer?.id ||
    checkoutData?.details?.customer?.id ||
    '';
  const customerEmail =
    checkoutData?.customer?.email ||
    checkoutData?.details?.customer?.email ||
    checkoutData?.customer_email ||
    sessionStorage.getItem('rgb_checkout_email') ||
    '';
  const customerName =
    checkoutData?.customer?.name ||
    checkoutData?.details?.customer?.name ||
    '';

  if (checkoutId) {
    try {
      sessionStorage.setItem('rgb_transaction_id', checkoutId);
      localStorage.setItem('rgb_transaction_id', checkoutId);
      sessionStorage.setItem('rgb_txn_timestamp', Date.now().toString());
      localStorage.setItem('rgb_txn_timestamp', Date.now().toString());
      if (customerId) {
        sessionStorage.setItem('rgb_customer_id', customerId);
        localStorage.setItem('rgb_customer_id', customerId);
      }
      if (customerEmail) {
        sessionStorage.setItem('rgb_customer_email', customerEmail);
        localStorage.setItem('rgb_customer_email', customerEmail);
      }
    } catch (err) {
      console.warn('Failed saving transaction to storage:', err);
    }
  }

  if (checkoutId) {
    try {
      fetch('/api/order-fulfillment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transaction_id: checkoutId,
          customer_email: customerEmail,
          customer_name: customerName,
        }),
        keepalive: true,
      }).catch((err) => {
        console.warn('Fulfillment dispatch warning:', err);
      });
    } catch (err) {
      console.warn('Fulfillment fetch error:', err);
    }
  }

  const params = new URLSearchParams();
  if (checkoutId) {
    params.set('transaction_id', checkoutId);
  }
  if (customerEmail) {
    params.set('email', customerEmail);
  }

  const targetUrl = `/download?${params.toString()}`;
  window.location.href = targetUrl;
}

export async function getPaddleInstance(): Promise<Paddle | null> {
  if (typeof window === 'undefined') return null;
  if (paddleInstance) return paddleInstance;

  if (!initPromise) {
    const storedCustomerId =
      typeof window !== 'undefined'
        ? sessionStorage.getItem('rgb_customer_id') || localStorage.getItem('rgb_customer_id')
        : null;

    initPromise = initializePaddle({
      token: PADDLE_CLIENT_TOKEN,
      environment: PADDLE_ENV,
      ...(storedCustomerId ? { pwCustomer: { id: storedCustomerId } } : {}),
      eventCallback: (event) => {
        if (event.name === 'checkout.completed') {
          handleCheckoutSuccess(event.data);
        } else if (event.name === 'checkout.closed') {
          if (typeof window !== 'undefined') {
            const savedTxn = sessionStorage.getItem('rgb_transaction_id');
            const savedEmail = sessionStorage.getItem('rgb_customer_email');
            if (savedTxn && !window.location.pathname.startsWith('/download')) {
              const params = new URLSearchParams();
              params.set('transaction_id', savedTxn);
              if (savedEmail) params.set('email', savedEmail);
              window.location.href = `/download?${params.toString()}`;
            }
          }
        }
      },
      checkout: {
        settings: {
          variant: 'one-page',
          displayMode: 'overlay',
          theme: 'light',
          showAddDiscounts: false,
          showAddTaxId: false,
          allowLogout: false,
        },
      },
    }).then((instance) => {
      if (instance) {
        paddleInstance = instance;
      }
      return paddleInstance;
    }).catch((err) => {
      console.error('Failed to initialize Paddle Checkout:', err);
      return null;
    });
  }

  return initPromise;
}

export interface OpenCheckoutOptions {
  priceId?: string;
  email?: string;
  successUrl?: string;
}

export async function openPaddleCheckout(options?: OpenCheckoutOptions): Promise<void> {
  const paddle = await getPaddleInstance();
  const priceId = options?.priceId || PADDLE_PRICE_ID;

  if (typeof window !== 'undefined' && options?.email) {
    try {
      sessionStorage.setItem('rgb_checkout_email', options.email);
    } catch {}
  }

  if (paddle) {
    paddle.Checkout.open({
      items: [{ priceId, quantity: 1 }],
      ...(options?.email ? { customer: { email: options.email } } : {}),
      settings: {
        variant: 'one-page',
        displayMode: 'overlay',
        theme: 'light',
        showAddDiscounts: false,
        showAddTaxId: false,
        allowLogout: false,
      },
    });
  } else {
    console.warn('Paddle instance not available yet.');
  }
}
