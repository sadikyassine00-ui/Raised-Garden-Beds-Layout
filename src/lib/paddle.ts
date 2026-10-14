import { initializePaddle, type Paddle, type Environments } from '@paddle/paddle-js';

export const PADDLE_CLIENT_TOKEN =
  process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN || 'test_98aa57dcfa6f02bcb4fbd2ad3a3';

export const PADDLE_ENV: Environments =
  (process.env.NEXT_PUBLIC_PADDLE_ENV as Environments) || 'sandbox';

export const PADDLE_PRICE_ID =
  process.env.NEXT_PUBLIC_PADDLE_PRICE_ID || 'pri_01m4xs8x8ap3wabtdq3mafnazt';

let paddleInstance: Paddle | null = null;
let initPromise: Promise<Paddle | null> | null = null;

export async function getPaddleInstance(): Promise<Paddle | null> {
  if (typeof window === 'undefined') return null;
  if (paddleInstance) return paddleInstance;

  if (!initPromise) {
    initPromise = initializePaddle({
      token: PADDLE_CLIENT_TOKEN,
      environment: PADDLE_ENV,
      eventCallback: (event) => {
        if (event.name === 'checkout.completed') {
          const checkoutData = event.data;
          const checkoutId = checkoutData?.id || '';
          const customerEmail = checkoutData?.customer?.email || '';
          window.location.href = `/success?checkout_id=${encodeURIComponent(checkoutId)}&email=${encodeURIComponent(customerEmail)}`;
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
          successUrl: '/success',
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
  const successUrl = options?.successUrl || (typeof window !== 'undefined' ? `${window.location.origin}/success` : '/success');

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
        successUrl,
      },
    });
  } else {
    console.warn('Paddle instance not available yet.');
  }
}
