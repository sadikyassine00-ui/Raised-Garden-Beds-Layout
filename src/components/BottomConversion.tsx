'use client';

import React from 'react';
import { handleCheckout } from '@/lib/checkout';

export function BottomConversion() {
  return (
    <section
      className="py-12 sm:py-16 border-t border-black/[0.08]"
      id="checkout"
      aria-label="Purchase Raised Garden Bed Blueprint Bundle"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#112B23] text-white rounded-xl py-10 px-5 sm:py-14 sm:px-8 text-center shadow-xl">
          <div className="max-w-xl mx-auto flex flex-col items-center gap-4">
            <p className="font-mono text-[11.5px] font-semibold text-[#F8D8BE] uppercase tracking-wider">
              Start Planting Today
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Get The Complete Raised Bed Blueprint Pack
            </h2>
            <p className="text-sm sm:text-base text-[#C7D4CF] leading-relaxed">
              Save time, prevent overcrowded beds, and harvest twice as much fresh organic produce this season.
            </p>

            <div className="flex items-baseline justify-center gap-3 my-1">
              <span className="font-mono text-3xl sm:text-4xl font-bold text-[#F8D8BE]">$19</span>
              <span className="font-mono text-lg text-[#7E968E] line-through">$47</span>
            </div>

            {/* Bottom Primary Action Button */}
            <button
              onClick={handleCheckout}
              className="w-full max-w-md flex items-center justify-center gap-2 bg-[#C88A58] hover:bg-[#D69766] active:scale-[0.985] text-[#1A1208] font-bold text-base sm:text-lg py-3.5 px-6 rounded-md shadow-md transition-all duration-150 min-h-[52px]"
              aria-label="Get The Blueprint Pack for $19"
            >
              <span>Get The Blueprint Pack ($19)</span>
              <svg
                className="w-5 h-5 shrink-0"
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

            <p className="text-xs sm:text-sm text-[#A3B5AE]">
              Instant PDF Download <span className="opacity-40">/</span> 30-Day Money-Back Guarantee <span className="opacity-40">/</span> Lifetime Updates
            </p>

            {/* Trust and Payment Badges */}
            <div className="flex flex-col items-center gap-2.5 pt-4 mt-2 border-t border-white/10 w-full">
              <span className="font-mono text-[11px] text-[#8DA199] uppercase tracking-wider">
                Guaranteed Safe &amp; Express Checkout
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="bg-white/10 border border-white/15 rounded px-2.5 py-1 text-xs font-mono font-medium text-[#E2ECE7]">
                  Apple Pay
                </span>
                <span className="bg-white/10 border border-white/15 rounded px-2.5 py-1 text-xs font-mono font-medium text-[#E2ECE7]">
                  Google Pay
                </span>
                <span className="bg-white/10 border border-white/15 rounded px-2.5 py-1 text-xs font-mono font-medium text-[#E2ECE7]">
                  Visa
                </span>
                <span className="bg-white/10 border border-white/15 rounded px-2.5 py-1 text-xs font-mono font-medium text-[#E2ECE7]">
                  Mastercard
                </span>
                <span className="bg-white/10 border border-white/15 rounded px-2.5 py-1 text-xs font-mono font-medium text-[#E2ECE7]">
                  Amex
                </span>
                <span className="bg-white/10 border border-white/15 rounded px-2.5 py-1 text-xs font-mono font-medium text-[#E2ECE7]">
                  PayPal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
