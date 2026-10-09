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
      className="checkout-modal-backdrop"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
    >
      <div className="checkout-modal">
        <div className="modal-header">
          <h3 className="modal-title">Shopify Checkout Link Config</h3>
          <button
            className="btn-close-modal"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <p style={{ fontSize: '13.5px', color: 'var(--ink-secondary)', marginBottom: '14px' }}>
          Set your real Shopify checkout or Buy Button URL below. Visitors will be redirected
          directly to this URL.
        </p>
        <div style={{ marginBottom: '16px' }}>
          <label
            style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: 600,
              fontFamily: 'var(--font-mono), monospace',
              color: 'var(--ink-muted)',
              marginBottom: '6px',
            }}
          >
            CURRENT CHECKOUT URL
          </label>
          <input
            type="text"
            value={checkoutUrl}
            onChange={(e) => setCheckoutUrl(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              fontSize: '13px',
              fontFamily: 'var(--font-mono), monospace',
              border: '1px solid var(--hairline-strong)',
              borderRadius: 'var(--radius-xs)',
              background: 'var(--bg-surface-muted)',
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <button
            onClick={handleSaveAndGo}
            style={{
              padding: '10px 18px',
              background: 'var(--signal)',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 600,
              borderRadius: 'var(--radius-xs)',
            }}
          >
            Save &amp; Redirect
          </button>
        </div>
      </div>
    </div>
  );
}
