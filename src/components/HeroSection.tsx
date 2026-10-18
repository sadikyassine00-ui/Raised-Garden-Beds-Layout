'use client';

import React from 'react';
import Image from 'next/image';
import { handleCheckout } from '@/lib/checkout';

export function HeroSection() {
  return (
    <section className="pt-2 pb-6 sm:pt-4 sm:pb-10" aria-label="Product Overview">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-3 sm:gap-y-3.5 lg:gap-x-8 items-start lg:items-center">

          {/* 1. Main Headline & Subheadline (Mobile: Order 1 | Desktop: Col 1-7, Row 1) */}
          <div className="order-1 lg:col-span-7 lg:col-start-1 lg:row-start-1 flex flex-col gap-1.5 sm:gap-2">
            {/* Kicker Eyebrow */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white border border-[#1B4D3E]/20 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium text-[#1B4D3E] shadow-xs w-fit">
              <svg className="w-3.5 h-3.5 text-[#1B4D3E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span className="font-semibold tracking-wide">
                The Modular Raised Bed Blueprint &amp; Layout Bundle &middot; Spring 2026 Edition
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#1A1A1A] leading-[1.14] tracking-tight">
              Build Once. Plant with Zero Guesswork. Harvest 2x More in Half the Space.
            </h1>

            {/* Concise Subhead */}
            <p className="text-sm sm:text-base lg:text-[17px] text-[#4A4E4A] leading-snug sm:leading-relaxed">
              Modular blueprints, companion planting grids, and instant lumber cut lists ready to print in seconds.
            </p>
          </div>

          {/* 2. Hero Product Mockup Image (Mobile: Order 2 | Desktop: Col 8-12, Rows 1-5) */}
          <div className="order-2 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-5 w-full flex flex-col my-1 lg:my-0">
            <div className="relative bg-white border border-[#1B4D3E]/20 rounded-lg p-2 shadow-md overflow-hidden max-w-md mx-auto lg:max-w-none">
              <div className="relative overflow-hidden rounded">
                <Image
                  src="/assets/hero-image.webp"
                  alt="High-contrast architectural raised garden bed blueprint pack with square foot companion grid, cut list, and modular configurations"
                  className="w-full h-auto max-h-[460px] sm:max-h-[520px] lg:max-h-[540px] rounded object-cover"
                  width={1200}
                  height={1607}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 440px"
                />
                {/* Tangibility Micro-Label Overlay */}
                <div className="absolute bottom-2 left-2 right-2 bg-[#123329]/90 backdrop-blur-xs text-[#FBFBFA] text-[11px] sm:text-[11.5px] font-medium py-1.5 px-2.5 rounded text-center shadow-md border border-white/10">
                  Print at home on standard 8.5x11 paper or load into iPad
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2 px-0.5">
                <span className="text-[10.5px] sm:text-[11px] font-medium bg-[#F5F4F0] text-[#4A4E4A] border border-black/10 px-2 py-0.5 rounded">
                  4×8 Layout Blueprint
                </span>
                <span className="text-[10.5px] sm:text-[11px] font-medium bg-[#F5F4F0] text-[#4A4E4A] border border-black/10 px-2 py-0.5 rounded">
                  Companion Guide
                </span>
                <span className="text-[10.5px] sm:text-[11px] font-medium bg-[#F5F4F0] text-[#4A4E4A] border border-black/10 px-2 py-0.5 rounded">
                  Lumber Cut List
                </span>
              </div>
            </div>
          </div>

          {/* 3. Pricing & Green CTA Button (Mobile: Order 3 | Desktop: Col 1-7, Row 4) */}
          <div className="order-3 lg:col-span-7 lg:col-start-1 lg:row-start-4 flex flex-col gap-1.5 pt-0.5">
            {/* Mobile pricing teaser directly above CTA button */}
            <div className="flex items-center justify-between px-0.5 md:hidden">
              <span className="text-xs font-semibold text-[#1B4D3E] uppercase tracking-wider">
                Instant Access Bundle
              </span>
              <span className="text-sm font-bold text-[#1B4D3E]">
                <s className="text-[#717571] font-normal text-xs mr-1">$29</s>$9{' '}
                <span className="text-[10.5px] font-normal text-[#1B4D3E]/90">
                  (Launch Price)
                </span>
              </span>
            </div>

            <button
              id="hero-cta-btn"
              onClick={handleCheckout}
              className="w-full flex items-center justify-center gap-2 bg-[#1B4D3E] hover:bg-[#143A2F] active:scale-[0.985] text-white font-semibold text-base sm:text-lg py-3 px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-150 min-h-[48px] sm:min-h-[52px]"
              aria-label="Get The Blueprint Pack for $9"
            >
              <span>Get The Blueprint Pack ($9)</span>
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
          </div>

          {/* 4. Micro-Trust Line (Mobile: Order 4 | Desktop: Col 1-7, Row 5) */}
          <div className="order-4 lg:col-span-7 lg:col-start-1 lg:row-start-5 flex flex-col gap-1">
            {/* Express Payment Badges */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 text-[#4A4E4A]">
              <span className="text-[10.5px] sm:text-[11px] font-medium text-[#717571] uppercase tracking-wider mr-0.5">
                Express Pay:
              </span>
              <span className="bg-white border border-black/10 rounded px-1.5 py-0.5 text-[10.5px] sm:text-[11px] font-semibold text-[#1A1A1A] shadow-xs">
                Apple Pay
              </span>
              <span className="bg-white border border-black/10 rounded px-1.5 py-0.5 text-[10.5px] sm:text-[11px] font-semibold text-[#1A1A1A] shadow-xs">
                Google Pay
              </span>
              <span className="bg-white border border-black/10 rounded px-1.5 py-0.5 text-[10.5px] sm:text-[11px] font-semibold text-[#1A1A1A] shadow-xs">
                Visa
              </span>
              <span className="bg-white border border-black/10 rounded px-1.5 py-0.5 text-[10.5px] sm:text-[11px] font-semibold text-[#1A1A1A] shadow-xs">
                Mastercard
              </span>
            </div>

            {/* Instant Delivery Reassurance */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#717571] text-center">
              <svg className="w-3.5 h-3.5 text-[#1B4D3E] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Instant PDF download &middot; The 100% Bountiful Harvest Guarantee &middot; Lifetime updates</span>
            </div>
          </div>

          {/* 5. Value Bullets & Lumber Waste Insurance Callout Box (Mobile: Order 5 | Desktop: Col 1-7, Row 2) */}
          <div className="order-5 lg:col-span-7 lg:col-start-1 lg:row-start-2 flex flex-col gap-2">
            {/* Tight Value Points */}
            <ul className="flex flex-col gap-1.5 text-xs sm:text-[13.5px] text-[#1A1A1A]">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#1B4D3E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>4 modular bed sizes: 4×4, 4×8, 2×8 walkway, and L-shape corner</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#1B4D3E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Companion cheat sheet: Pair natural pest repellents, avoid bad neighbors</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#1B4D3E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Zero-waste lumber cut lists, screw hardware sizes &amp; soil cubic yard math</span>
              </li>
            </ul>

            {/* Loss-Aversion Price Callout */}
            <div className="bg-[#FAF7F2] border border-[#C88A58]/30 rounded-md p-2.5 text-xs sm:text-[13px] text-[#5C3A1E] leading-snug">
              <strong className="text-[#A86D3F] font-bold">Lumber Waste Insurance:</strong> A single miscut cedar board at Home Depot costs $24. This $9 complete bundle saves you from $150+ in wasted lumber and failed crops.
            </div>
          </div>

          {/* 6. Full DIY vs Blueprint Comparison Card (Mobile: Order 6 | Desktop: Col 1-7, Row 3) */}
          <div className="order-6 lg:col-span-7 lg:col-start-1 lg:row-start-3">
            <div className="grid grid-cols-2 gap-2 text-xs border border-black/10 rounded-md overflow-hidden bg-white">
              <div className="p-2 sm:p-2.5 bg-[#FAF9F7] border-r border-black/10 flex flex-col gap-0.5 sm:gap-1">
                <span className="font-bold text-[#717571] uppercase tracking-wider text-[10px] sm:text-[10.5px]">DIY Guesswork</span>
                <span className="text-[#9E3333] font-semibold text-xs sm:text-sm">$160 to $220 in lumber</span>
                <span className="text-[#717571] text-[11px]">$40 in stunted seeds</span>
                <span className="text-[#717571] text-[11px] leading-tight">Risk of warped corners &amp; root rot</span>
              </div>
              <div className="p-2 sm:p-2.5 bg-[#E8F3EE]/60 flex flex-col gap-0.5 sm:gap-1">
                <span className="font-bold text-[#1B4D3E] uppercase tracking-wider text-[10px] sm:text-[10.5px]">The Blueprint Pack</span>
                <div className="flex flex-wrap items-baseline gap-1">
                  <span className="line-through text-[#717571] text-xs font-normal">$29</span>
                  <span className="text-[#1B4D3E] font-bold text-sm">$9</span>
                  <span className="text-[10px] sm:text-[10.5px] font-normal text-[#1B4D3E]/90">(Limited Launch Pricing)</span>
                </div>
                <span className="text-[#1B4D3E] text-[11px] font-medium">$110 exact lumber cuts</span>
                <span className="text-[#1B4D3E] text-[11px] leading-tight">Zero wasted boards &amp; 2x harvest</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
