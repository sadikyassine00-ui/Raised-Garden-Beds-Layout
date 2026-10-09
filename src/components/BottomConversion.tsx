'use client';

import React from 'react';
import { handleCheckout } from '@/lib/checkout';

export function BottomConversion() {
  return (
    <section
      className="section-padding"
      id="checkout"
      aria-label="Purchase Raised Garden Bed Blueprint Bundle"
    >
      <div className="container">
        <div className="bottom-cta-card">
          <div className="bottom-cta-inner">
            <p className="section-eyebrow" style={{ color: '#F8D8BE' }}>
              Start Planting Today
            </p>
            <h2 className="bottom-headline">Get The Complete Raised Bed Blueprint Pack</h2>
            <p className="bottom-subheadline">
              Save time, prevent overcrowded beds, and harvest twice as much fresh organic produce this season.
            </p>

            <div className="bottom-price-row">
              <span className="bottom-price-current">$19</span>
              <span className="bottom-price-original">$47</span>
            </div>

            <button
              className="btn-bottom-cta"
              onClick={handleCheckout}
              aria-label="Get The Blueprint Pack for $19"
            >
              <span>Get The Blueprint Pack ($19)</span>
              <svg
                width="20"
                height="20"
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

            <p className="bottom-microcopy">
              Instant PDF Download / 30-Day Money-Back Guarantee / Lifetime Updates
            </p>

            {/* Payment Provider Badges */}
            <div className="payment-trust-strip">
              <span className="payment-label">Guaranteed Safe &amp; Secure Checkout</span>
              <div className="payment-badges-row">
                <span className="payment-badge">Apple Pay</span>
                <span className="payment-badge">Google Pay</span>
                <span className="payment-badge">Visa</span>
                <span className="payment-badge">Mastercard</span>
                <span className="payment-badge">Amex</span>
                <span className="payment-badge">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
