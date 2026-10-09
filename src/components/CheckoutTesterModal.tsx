'use client';

import React, { useEffect, useState } from 'react';
import { getCheckoutUrl } from '@/lib/checkout';

export function CheckoutTesterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState('');

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ url: string }>;
      setCheckoutUrl(customEvent.detail?.url || getCheckoutUrl());
      setIsOpen(true);
    };

    window.addEventListener('open-checkout-tester', handleOpen);
    return () => window.removeEventListener('open-checkout-tester', handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleSaveAndGo = () => {
    if (checkoutUrl.trim()) {
      try {
        localStorage.setItem('custom_shopify_checkout_url', checkoutUrl.trim());
      } catch {
        // Ignore local storage error
      }
      setIsOpen(false);
      window.location.href = checkoutUrl.trim();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
    >
      <div className="bg-white border border-black/15 rounded-lg shadow-2xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-lg font-bold text-[#1A1A1A]">Shopify Checkout Link Config</h3>
          <button
            className="p-1 text-[#717571] hover:text-[#1A1A1A] rounded"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <p className="text-sm text-[#4A4E4A] mb-4">
          Set your real Shopify checkout or Buy Button URL below. Visitors will be redirected
          directly to this URL.
        </p>
        <div className="mb-4">
          <label className="block text-xs font-mono font-semibold text-[#717571] mb-1.5 uppercase">
            Current Checkout URL
          </label>
          <input
            type="text"
            value={checkoutUrl}
            onChange={(e) => setCheckoutUrl(e.target.value)}
            className="w-full p-2.5 text-xs font-mono border border-black/15 rounded bg-[#F5F4F0] text-[#1A1A1A]"
          />
        </div>
        <div className="flex justify-end gap-2.5">
          <button
            onClick={handleSaveAndGo}
            className="px-4 py-2 bg-[#1B4D3E] hover:bg-[#143A2F] text-white text-sm font-semibold rounded"
          >
            Save &amp; Redirect
          </button>
        </div>
      </div>
    </div>
  );
}
