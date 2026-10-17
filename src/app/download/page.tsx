import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalHeader } from '@/components/LegalHeader';
import { Footer } from '@/components/Footer';
import { verifyPaddleTransaction } from '@/lib/paddleServer';

export const metadata: Metadata = {
  title: 'Download Your Garden Bed Blueprints | Raised Garden Beds Layout',
  description:
    'Instant download access for your Raised Garden Bed Blueprint & Layout Bundle. Verified purchase via Paddle.',
  robots: {
    index: false,
    follow: false,
  },
};

import { DownloadStorageSync } from '@/components/DownloadStorageSync';

interface DownloadPageProps {
  searchParams: Promise<{
    transaction_id?: string;
    checkout_id?: string;
    email?: string;
  }>;
}

export default async function DownloadPage(props: DownloadPageProps) {
  // 1. Automatically read transaction_id from searchParams on load
  const searchParams = await props.searchParams;
  const transactionId = searchParams.transaction_id || searchParams.checkout_id;
  const customerEmail = searchParams.email;

  // 2. If transaction_id is present, immediately execute backend verification
  let verification = null;
  if (transactionId) {
    verification = await verifyPaddleTransaction(transactionId);
  }

  const downloadApiUrl = transactionId
    ? `/api/download?transaction_id=${encodeURIComponent(transactionId)}`
    : '/api/download';

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <LegalHeader currentDocument="Digital Download" />

      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <DownloadStorageSync
            currentTransactionId={transactionId}
            currentEmail={customerEmail || verification?.customerEmail}
          />

          {transactionId ? (
            verification && verification.verified ? (
              /* State 2A: Transaction present & verified as paid -> Instant Success, NO input box */
              <div className="bg-white border border-[#1B4D3E]/20 rounded-2xl p-6 sm:p-10 shadow-sm text-center">
                {/* Verified Green Shield / Checkmark */}
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
                  <span>Payment Verified &bull; Official Paddle Receipt</span>
                </div>

                <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3">
                  Your Blueprint Bundle is Ready
                </h1>
                <p className="text-sm sm:text-base text-[#4A4E4A] max-w-lg mx-auto leading-relaxed mb-8">
                  Payment of <strong>{verification.amountFormatted || '$9.00 USD'}</strong> has been verified.
                  {customerEmail || verification.customerEmail
                    ? ` A confirmation copy was also dispatched to ${customerEmail || verification.customerEmail}.`
                    : ''}
                </p>

                {/* Order Summary Card */}
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
                        Spring 2026 Edition &bull; Printable Vector High-Res PDF
                      </p>
                    </div>
                    <div className="text-left sm:text-right shrink-0">
                      <span className="font-mono text-xl sm:text-2xl font-bold text-[#1B4D3E] block">
                        {verification.amountFormatted || '$9.00'}
                      </span>
                      <span className="text-[11px] text-[#717571]">One-time fee paid</span>
                    </div>
                  </div>

                  {/* Transaction ID Details */}
                  <div className="py-4 border-b border-[#C88A58]/15 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-[#717571]">Transaction Reference:</span>
                    <code className="font-mono bg-white border border-[#C88A58]/25 px-2.5 py-1 rounded text-[#1B4D3E] font-semibold">
                      {transactionId}
                    </code>
                  </div>

                  {/* Prominent Download Button */}
                  <div className="pt-6 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={downloadApiUrl}
                      download="The_Raised_Garden_Bed_Blueprint_and_Layout_Bundle_Complete.pdf"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-lg bg-[#1B4D3E] hover:bg-[#143A2F] active:scale-[0.985] text-white font-semibold text-base transition-all shadow-md hover:shadow-lg"
                    >
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
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      <span>Download Blueprints PDF</span>
                    </a>

                    <Link
                      href="/"
                      className="w-full sm:w-auto inline-flex items-center justify-center py-4 px-5 rounded-lg border border-black/15 hover:bg-black/5 text-[#4A4E4A] font-medium text-xs sm:text-sm transition-colors"
                    >
                      Return to Home
                    </Link>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="text-left space-y-3 pt-2">
                  <h3 className="font-display text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">
                    Included in Your Download:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#4A4E4A]">
                    <li className="flex items-start gap-2 bg-[#FBFBFA] p-3 rounded-lg border border-black/[0.06]">
                      <span className="text-[#1B4D3E] font-bold text-sm">✓</span>
                      <span><strong>4 Modular Bed Blueprints:</strong> Architectural schematics for 4&times;8, 4&times;4, 2&times;8, and L-shaped configurations.</span>
                    </li>
                    <li className="flex items-start gap-2 bg-[#FBFBFA] p-3 rounded-lg border border-black/[0.06]">
                      <span className="text-[#1B4D3E] font-bold text-sm">✓</span>
                      <span><strong>Zero-Waste Lumber Cut Lists:</strong> Pre-calculated cuts from 8-foot standard boards with zero board waste.</span>
                    </li>
                    <li className="flex items-start gap-2 bg-[#FBFBFA] p-3 rounded-lg border border-black/[0.06]">
                      <span className="text-[#1B4D3E] font-bold text-sm">✓</span>
                      <span><strong>Companion Planting Matrix:</strong> 30+ pairing rules and bad-neighbor isolations to deter pests naturally.</span>
                    </li>
                    <li className="flex items-start gap-2 bg-[#FBFBFA] p-3 rounded-lg border border-black/[0.06]">
                      <span className="text-[#1B4D3E] font-bold text-sm">✓</span>
                      <span><strong>Soil Volume &amp; Mel&rsquo;s Mix Formula:</strong> Coarse vermiculite, fluffed peat/coir, and blended compost ratios.</span>
                    </li>
                  </ul>
                </div>

                {/* Lifetime Access & Support Reassurance */}
                <div className="mt-8 pt-6 border-t border-black/[0.08] text-xs text-[#717571] space-y-1">
                  <p>
                    Your download link never expires. You can bookmark this URL anytime for permanent access.
                  </p>
                  <p>
                    Need assistance or have building questions? Contact support at{' '}
                    <a href="mailto:support@raisedgardenbedslayout.com" className="text-[#1B4D3E] underline font-semibold">
                      support@raisedgardenbedslayout.com
                    </a>.
                  </p>
                </div>
              </div>
            ) : (
              /* State 2B: Transaction present but verification failed -> Show error state, NO input box */
              <div className="bg-white border border-[#D9534F]/30 rounded-2xl p-6 sm:p-10 shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-[#D9534F]/10 border border-[#D9534F]/25 text-[#D9534F] flex items-center justify-center mx-auto mb-6">
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D9534F]/10 text-[#D9534F] text-xs font-semibold uppercase tracking-wider mb-3">
                  <span>Verification Unsuccessful</span>
                </div>

                <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-3">
                  Unable to Verify Transaction
                </h1>
                <p className="text-sm text-[#4A4E4A] max-w-lg mx-auto leading-relaxed mb-6">
                  {verification?.error ||
                    'Payment has not been completed or verified for this order. If your card was recently charged, please wait 30 seconds and refresh this page.'}
                </p>

                <div className="bg-[#FAF7F2] border border-black/10 rounded-lg p-4 max-w-md mx-auto mb-6 text-xs text-left">
                  <span className="text-[#717571] block mb-1">Attempted Reference:</span>
                  <code className="font-mono font-semibold text-[#1A1A1A]">{transactionId}</code>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href={`/download?transaction_id=${encodeURIComponent(transactionId)}`}
                    className="w-full sm:w-auto py-3 px-6 rounded-lg bg-[#1B4D3E] hover:bg-[#143A2F] text-white font-semibold text-sm transition-colors shadow-sm"
                  >
                    Retry Verification
                  </Link>

                  <Link
                    href="/download"
                    className="w-full sm:w-auto py-3 px-6 rounded-lg border border-black/15 hover:bg-black/5 text-[#4A4E4A] font-medium text-xs sm:text-sm transition-colors"
                  >
                    Enter Different ID
                  </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-black/[0.08] text-xs text-[#717571]">
                  <p>
                    Need help? Email{' '}
                    <a href="mailto:support@raisedgardenbedslayout.com" className="text-[#1B4D3E] underline font-semibold">
                      support@raisedgardenbedslayout.com
                    </a>{' '}
                    with your order receipt, and our team will resolve it immediately.
                  </p>
                </div>
              </div>
            )
          ) : (
            /* State 3: NO transaction_id in URL -> Display the manual input form ONLY here */
            <div className="bg-white border border-[#1B4D3E]/20 rounded-2xl p-6 sm:p-10 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#C88A58]/35 text-[#A86D3F] flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#C88A58]/10 text-[#A86D3F] text-xs font-semibold uppercase tracking-wider mb-3">
                <span>Digital Download Access</span>
              </div>

              <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-3">
                Access Your Garden Bed Blueprints
              </h1>
              <p className="text-sm text-[#4A4E4A] max-w-md mx-auto leading-relaxed mb-8">
                To download your blueprint pack, please enter the Transaction ID found on your Paddle order receipt or confirmation email.
              </p>

              <form action="/download" method="GET" className="max-w-md mx-auto space-y-4 text-left">
                <div>
                  <label htmlFor="transaction_id" className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 uppercase tracking-wider">
                    Transaction ID or Order Reference
                  </label>
                  <input
                    type="text"
                    id="transaction_id"
                    name="transaction_id"
                    required
                    placeholder="e.g. txn_01j..."
                    className="w-full px-4 py-3 rounded-lg border border-black/20 focus:border-[#1B4D3E] focus:ring-2 focus:ring-[#1B4D3E]/20 text-sm font-mono text-[#1A1A1A] placeholder-[#717571]/60 outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-[#1B4D3E] hover:bg-[#143A2F] text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  Verify &amp; Access Download
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-black/[0.08] text-xs text-[#717571]">
                <p>
                  Can&rsquo;t find your receipt? Email{' '}
                  <a href="mailto:support@raisedgardenbedslayout.com" className="text-[#1B4D3E] underline font-semibold">
                    support@raisedgardenbedslayout.com
                  </a>{' '}
                  with the email you used at checkout, and we will resend your download link.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
