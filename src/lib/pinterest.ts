/**
 * Pinterest Tag Event Tracking Helper
 */

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pintrk?: (...args: any[]) => void;
  }
}

export interface PinterestEventParams {
  event_id?: string;
  value?: number;
  order_quantity?: number;
  currency?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

function safeTrack(eventName: string, params?: PinterestEventParams): void {
  if (typeof window === 'undefined') return;

  const eventPayload = { ...params };

  try {
    if (typeof window.pintrk === 'function') {
      window.pintrk('track', eventName, eventPayload);
    } else {
      // If pintrk is still initializing or queued
      window.pintrk =
        window.pintrk ||
        function () {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ((window.pintrk as any).queue = (window.pintrk as any).queue || []).push(
            // eslint-disable-next-line prefer-rest-params
            Array.prototype.slice.call(arguments)
          );
        };
      window.pintrk('track', eventName, eventPayload);
    }
  } catch (err) {
    console.warn(`[Pinterest] Error tracking ${eventName}:`, err);
  }
}

/**
 * Track pagevisit event
 */
export function trackPinterestPageVisit(eventId?: string): void {
  safeTrack('pagevisit', {
    event_id: eventId || `pagevisit_${Date.now()}`,
  });
}

/**
 * Track addtocart event
 */
export function trackPinterestAddToCart(options?: PinterestEventParams): void {
  safeTrack('addtocart', {
    event_id: options?.event_id || `addtocart_${Date.now()}`,
    value: options?.value ?? 9,
    order_quantity: options?.order_quantity ?? 1,
    currency: options?.currency || 'USD',
    ...options,
  });
}

/**
 * Track checkout event
 */
export function trackPinterestCheckout(options?: PinterestEventParams): void {
  safeTrack('checkout', {
    event_id: options?.event_id || `checkout_${Date.now()}`,
    value: options?.value ?? 9,
    order_quantity: options?.order_quantity ?? 1,
    currency: options?.currency || 'USD',
    ...options,
  });
}
