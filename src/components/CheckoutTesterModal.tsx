'use client';

import React, { useEffect, useState } from 'react';
import { openPaddleCheckout, PADDLE_PRICE_ID, PADDLE_ENV } from '@/lib/paddle';

export function CheckoutTesterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [priceId, setPriceId] = useState(PADDLE_PRICE_ID);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ priceId?: string }>;
      if (customEvent.detail?.priceId) {
        setPriceId(customEvent.detail.priceId);
      }
      setIsOpen(true);
    };

    window.addEventListener('open-checkout-tester', handleOpen);
    return () => window.removeEventListener('open-checkout-tester', handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleLaunchPaddle = () => {
    setIsOpen(false);
    openPaddleCheckout({ priceId });
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
      <div className="bg-white border border-black/15 rounded-xl shadow-2xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1B4D3E] animate-pulse"></span>
            <h3 className="font-display text-lg font-bold text-[#1A1A1A]">Paddle Checkout Tester</h3>
          </div>
          <button
            className="p-1 text-[#717571] hover:text-[#1A1A1A] rounded"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <p className="text-xs sm:text-sm text-[#4A4E4A] mb-4 leading-relaxed">
          Paddle Merchant of Record integration is active. You can launch the official one-page checkout overlay below in <strong>{PADDLE_ENV}</strong> mode.
        </p>

        <div className="mb-4 space-y-2">
          <div className="bg-[#FAF7F2] p-3 rounded border border-[#C88A58]/25 text-xs text-[#5C3A1E] space-y-1">
            <p><strong>Environment:</strong> <span className="font-mono text-[#1B4D3E] uppercase">{PADDLE_ENV}</span></p>
            <p><strong>Active Price ID:</strong> <span className="font-mono">{priceId}</span></p>
            <p><strong>Amount:</strong> $9.00 USD (One-time)</p>
          </div>

          <div>
            <label className="block text-xs font-mono font-semibold text-[#717571] mb-1.5 uppercase">
              Custom Price ID (Optional)
            </label>
            <input
              type="text"
              value={priceId}
              onChange={(e) => setPriceId(e.target.value)}
              className="w-full p-2.5 text-xs font-mono border border-black/15 rounded bg-[#F5F4F0] text-[#1A1A1A]"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2.5">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 border border-black/15 hover:bg-black/5 text-[#4A4E4A] text-xs font-semibold rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleLaunchPaddle}
            className="px-4 py-2 bg-[#1B4D3E] hover:bg-[#143A2F] text-white text-xs font-semibold rounded shadow-xs"
          >
            Open Paddle Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
