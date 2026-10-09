/**
 * Shopify Direct Checkout Redirection & Configuration
 */

export const DEFAULT_CHECKOUT_URL =
  'https://checkout.shopify.com/store/raised-garden-bed-pack?variant=bundle_19';

export function getCheckoutUrl(): string {
  if (typeof window === 'undefined') {
    return DEFAULT_CHECKOUT_URL;
  }

  const params = new URLSearchParams(window.location.search);
  const paramUrl = params.get('checkout_url');
  if (paramUrl) return paramUrl;

  const globalUrl = (window as unknown as { SHOPIFY_CHECKOUT_URL?: string }).SHOPIFY_CHECKOUT_URL;
  if (globalUrl) return globalUrl;

  try {
    const saved = localStorage.getItem('custom_shopify_checkout_url');
    if (saved) return saved;
  } catch {
    // localStorage might be unavailable in private browsing
  }

  return DEFAULT_CHECKOUT_URL;
}

export function handleCheckout(e?: React.MouseEvent): void {
  if (e) {
    e.preventDefault();
  }
  const url = getCheckoutUrl();

  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    if (params.get('demo') === '1' || params.get('test') === '1') {
      window.dispatchEvent(new CustomEvent('open-checkout-tester', { detail: { url } }));
      return;
    }

    // Direct redirection to checkout
    window.location.href = url;
  }
}
