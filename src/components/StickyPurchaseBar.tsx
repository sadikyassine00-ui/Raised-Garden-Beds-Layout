'use client';

import React, { useEffect, useState } from 'react';
import { handleCheckout } from '@/lib/checkout';

export function StickyPurchaseBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById('hero-cta-btn');
    if (!heroCta || typeof window === 'undefined') return;

    if ('IntersectionObserver' in window && window.IntersectionObserver) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(false);
            } else {
              if (entry.boundingClientRect.top < 0) {
                setIsVisible(true);
              } else {
                setIsVisible(false);
              }
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(heroCta);
      return () => observer.disconnect();
    }

    const onScroll = () => {
      const rect = heroCta.getBoundingClientRect();
      setIsVisible(rect.bottom < 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <aside
      id="sticky-bar"
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-black/10 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] py-2.5 px-4 transition-transform duration-200 ease-out pb-[max(10px,env(safe-area-inset-bottom))] ${
        isVisible ? 'translate-y-0' : 'translate-y-[115%]'
      }`}
      aria-label="Quick Purchase Bar"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-xs sm:text-sm font-semibold text-[#1A1A1A] leading-tight">
            Blueprint &amp; Layout Bundle
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="font-mono text-base sm:text-lg font-bold text-[#1B4D3E]">$19</span>
            <span className="text-[11px] text-[#717571]">(Instant PDF)</span>
          </div>
        </div>
        <button
          onClick={handleCheckout}
          className="inline-flex items-center justify-center gap-1.5 bg-[#1B4D3E] hover:bg-[#143A2F] active:scale-[0.985] text-white text-sm sm:text-base font-semibold px-4 py-2.5 rounded-md shadow-sm transition-colors min-h-[48px] whitespace-nowrap"
          aria-label="Buy Now for $19"
        >
          <span>Buy Now ($19)</span>
          <svg
            className="w-4 h-4 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </aside>
  );
}
