import React from 'react';
import { openPaddleCheckout, PADDLE_PRICE_ID, getPaddleInstance } from './paddle';

/**
 * Paddle Direct Checkout Trigger
 */
export function handleCheckout(e?: React.MouseEvent): void {
  if (e) {
    e.preventDefault();
  }

  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    if (params.get('demo') === '1' || params.get('test') === '1') {
      window.dispatchEvent(
        new CustomEvent('open-checkout-tester', {
          detail: { priceId: PADDLE_PRICE_ID },
        })
      );
      return;
    }

    const discountParam = params.get('discount') || params.get('coupon') || params.get('code');
    const discountId =
      discountParam?.toUpperCase() === 'LIVETEST100' ? 'dsc_01m586jpd7a4bnp3ec3sb38231' : undefined;

    // Trigger official Paddle Checkout overlay
    openPaddleCheckout({
      priceId: PADDLE_PRICE_ID,
      ...(discountId ? { discountId } : {}),
    });
  }
}

/**
 * Preload Paddle as soon as browser is idle or page loads
 */
export function preloadPaddle(): void {
  if (typeof window !== 'undefined') {
    getPaddleInstance().catch(() => {});
  }
}
