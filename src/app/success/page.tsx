'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { LegalHeader } from '@/components/LegalHeader';
import { Footer } from '@/components/Footer';

function SuccessContent() {
  const searchParams = useSearchParams();
  const transactionId =
    searchParams.get('transaction_id') ||
    searchParams.get('checkout_id') ||
    'demo';
  const customerEmail = searchParams.get('email');

  const downloadApiUrl = `/api/download?transaction_id=${encodeURIComponent(transactionId)}`;
  const permanentPageUrl = `/download?transaction_id=${encodeURIComponent(transactionId)}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <LegalHeader currentDocument="Order Confirmation" />

      <main className="flex-1 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Main Success Card */}
          <div className="bg-white border border-[#1B4D3E]/20 rounded-2xl p-6 sm:p-10 shadow-sm text-center">
            {/* Animated / styled checkmark */}
            <div className="w-16 h-16 rounded-full bg-[#1B4D3E]/10 border border-[#1B4D3E]/25 text-[#1B4D3E] flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Order Complete &bull; Payment Verified via Paddle</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3">
              Thank You! Your Blueprint Pack is Ready
            </h1>
            <p className="text-sm sm:text-base text-[#4A4E4A] max-w-lg mx-auto leading-relaxed mb-8">
              Your transaction of <strong>$9.00 USD</strong> was processed securely by our Merchant of Record, Paddle.com. A full purchase receipt and permanent download link have also been sent to your email{customerEmail ? ` (${customerEmail})` : ''}.
            </p>

            {/* Instant Download Action Box */}
            <div className="bg-[#FAF7F2] border border-[#C88A58]/35 rounded-xl p-6 sm:p-8 mb-8 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#C88A58]/20">
                <div>
                  <span className="font-mono text-xs font-semibold text-[#A86D3F] uppercase tracking-wider block mb-1">
                    Digital Product Package
                  </span>
                  <h2 className="font-display text-lg sm:text-xl font-bold text-[#1A1A1A]">
                    Raised Garden Bed Blueprint &amp; Layout Bundle
                  </h2>
                  <p className="text-xs text-[#717571] mt-0.5">
                    Spring 2026 Edition &bull; Printable High-Resolution PDF
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#1B4D3E] block">$9.00</span>
                  <span className="text-[11px] text-[#717571]">One-time fee paid</span>
                </div>
              </div>

              {/* Transaction ID if present */}
              {transactionId && transactionId !== 'demo' && (
                <div className="py-3 border-b border-[#C88A58]/15 flex items-center justify-between text-xs">
                  <span className="text-[#717571]">Transaction ID:</span>
                  <code className="font-mono bg-white border border-[#C88A58]/25 px-2 py-0.5 rounded text-[#1B4D3E]">
                    {transactionId}
                  </code>
                </div>
              )}

              {/* Download Buttons */}
              <div className="pt-6 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={downloadApiUrl}
                  download="The_Raised_Garden_Bed_Blueprint_and_Layout_Bundle_Complete.pdf"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-lg bg-[#1B4D3E] hover:bg-[#143A2F] active:scale-[0.985] text-white font-semibold text-sm sm:text-base transition-colors shadow-sm"
                >
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Download Blueprint Bundle (PDF)</span>
                </a>

                <Link
                  href={permanentPageUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center py-4 px-5 rounded-lg border border-black/15 hover:bg-black/5 text-[#4A4E4A] font-medium text-xs sm:text-sm transition-colors"
                >
                  View Permanent Page
                </Link>
              </div>
            </div>

            {/* Included Deliverables Checklist */}
            <div className="text-left space-y-3 pt-2">
              <h3 className="font-display text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">
                What is Included in Your Download:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4A4E4A]">
                <li className="flex items-start gap-2 bg-[#FBFBFA] p-2.5 rounded border border-black/[0.06]">
                  <span className="text-[#1B4D3E] font-bold">✓</span>
                  <span>4 Modular Bed Build Plans (4&times;8, 4&times;4, 2&times;8, L-shape)</span>
                </li>
                <li className="flex items-start gap-2 bg-[#FBFBFA] p-2.5 rounded border border-black/[0.06]">
                  <span className="text-[#1B4D3E] font-bold">✓</span>
                  <span>Companion Planting Cheat Sheet &amp; Bad Neighbor Isolation</span>
                </li>
                <li className="flex items-start gap-2 bg-[#FBFBFA] p-2.5 rounded border border-black/[0.06]">
                  <span className="text-[#1B4D3E] font-bold">✓</span>
                  <span>Hardware Cut Lists, Screw Lengths &amp; Dimensional Lumber Specs</span>
                </li>
                <li className="flex items-start gap-2 bg-[#FBFBFA] p-2.5 rounded border border-black/[0.06]">
                  <span className="text-[#1B4D3E] font-bold">✓</span>
                  <span>Soil Volume Calculation &amp; Mel&rsquo;s Mix Fertilizer Ratios</span>
                </li>
              </ul>
            </div>

            {/* Support and Reassurance */}
            <div className="mt-8 pt-6 border-t border-black/[0.08] text-xs text-[#717571] space-y-1">
              <p>
                Need assistance with your files or have questions? Email our dedicated support desk at{' '}
                <a href="mailto:support@raisedgardenbedslayout.com" className="text-[#1B4D3E] underline font-semibold">
                  support@raisedgardenbedslayout.com
                </a>
              </p>
              <p className="text-[11px] text-[#8A8F8A]">
                Order processed and verified by Paddle.com. You can also view your transaction details at{' '}
                <a href="https://paddle.net" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline">
                  paddle.net
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FBFBFA] flex items-center justify-center p-6 text-sm text-[#717571]">Loading order confirmation...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
