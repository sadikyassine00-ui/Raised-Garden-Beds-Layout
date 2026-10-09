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
      className={`sticky-purchase-bar ${isVisible ? 'is-visible' : ''}`}
      aria-label="Quick Purchase Bar"
    >
      <div className="sticky-bar-inner">
        <div className="sticky-info">
          <span className="sticky-title">Blueprint &amp; Layout Bundle</span>
          <div className="sticky-price-group">
            <span className="sticky-price">$19</span>
            <span className="sticky-sub">(One-time PDF)</span>
          </div>
        </div>
        <button
          className="btn-sticky-buy"
          onClick={handleCheckout}
          aria-label="Buy Now for $19"
        >
          <span>Buy Now ($19)</span>
          <svg
            width="16"
            height="16"
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
