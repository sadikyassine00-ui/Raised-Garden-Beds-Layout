import React from 'react';

interface LegalContactBoxProps {
  variant?: 'top' | 'bottom';
  lastUpdated?: string;
}

export function LegalContactBox({
  variant = 'top',
  lastUpdated = 'October 14, 2026',
}: LegalContactBoxProps) {
  if (variant === 'top') {
    return (
      <div className="bg-[#1B4D3E]/[0.04] border border-[#1B4D3E]/20 rounded-lg p-4 sm:p-5 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#1B4D3E]/10 border border-[#1B4D3E]/25 flex items-center justify-center text-[#1B4D3E] shrink-0">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[#1A1A1A] leading-tight">
                Official Support Contact &amp; Compliance Inquiries
              </p>
              <a
                href="mailto:support@raisedgardenbedslayout.com"
                className="text-[#1B4D3E] hover:underline font-bold transition-colors"
              >
                support@raisedgardenbedslayout.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto text-[11px] sm:text-xs text-[#717571] bg-white px-3 py-1.5 rounded border border-black/[0.08]">
            <span className="w-2 h-2 rounded-full bg-[#1B4D3E] animate-pulse" aria-hidden="true"></span>
            <span>Last Updated: <strong className="text-[#1A1A1A] font-semibold">{lastUpdated}</strong></span>
          </div>
        </div>
      </div>
    );
  }

  // Bottom variant with comprehensive contact and Merchant of Record details
  return (
    <div className="mt-12 pt-8 border-t border-black/[0.10]">
      <div className="bg-[#FAF7F2] border border-[#C88A58]/35 rounded-xl p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-semibold">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Merchant of Record &amp; Direct Support Guarantee</span>
            </div>

            <h3 className="font-display text-lg sm:text-xl font-bold text-[#1A1A1A]">
              Need Assistance With Your Order, Blueprints, or Account?
            </h3>

            <p className="text-xs sm:text-sm text-[#4A4E4A] leading-relaxed">
              Our support team is standing by to assist with PDF downloads, technical queries, licensing verification, and refund requests. Our online order process is conducted by our Merchant of Record, <strong className="text-[#1A1A1A]">Paddle.com</strong>, who manages transaction security, sales tax/VAT compliance, and automated refund fulfillment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#4A4E4A]">
              <div className="flex items-start gap-2">
                <span className="text-[#1B4D3E] font-bold">✓</span>
                <span>Response time: <strong className="text-[#1A1A1A]">Within 24 business hours</strong></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#1B4D3E] font-bold">✓</span>
                <span>14-day no-hassle money-back guarantee</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#1B4D3E] font-bold">✓</span>
                <span>Paddle Buyer Support: <a href="https://paddle.net" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline font-semibold">paddle.net</a></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#1B4D3E] font-bold">✓</span>
                <span>Data privacy requests honored promptly</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 border border-black/[0.08] shadow-2xs flex flex-col justify-between shrink-0 md:w-72">
            <div>
              <p className="text-[11px] font-semibold text-[#717571] uppercase tracking-wider mb-1">
                Direct Contact Email
              </p>
              <a
                href="mailto:support@raisedgardenbedslayout.com"
                className="text-sm font-bold text-[#1B4D3E] hover:underline block break-all mb-4"
              >
                support@raisedgardenbedslayout.com
              </a>
              <p className="text-xs text-[#717571] mb-4">
                Include your order email address or Paddle transaction ID for expedited handling.
              </p>
            </div>

            <a
              href="mailto:support@raisedgardenbedslayout.com?subject=Support%20Request%20-%20Raised%20Garden%20Bed%20Blueprint"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded bg-[#1B4D3E] hover:bg-[#143A2F] text-white text-xs font-semibold tracking-wide transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Email Support Team</span>
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#C88A58]/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#717571]">
          <span>Raised Garden Beds Layout &bull; raisedgardenbedslayout.com</span>
          <span>Latest Document Revision: <strong>{lastUpdated}</strong></span>
        </div>
      </div>
    </div>
  );
}
