import React from 'react';
import Link from 'next/link';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 border-t border-black/[0.08] bg-[#FBFBFA] text-[#4A4E4A]" role="contentinfo">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Brand & Legal Links Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pb-6 border-b border-black/[0.06]">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#1B4D3E] hover:opacity-85 transition-opacity"
            aria-label="Raised Garden Beds Layout Home"
          >
            <div className="w-7 h-7 rounded bg-[#1B4D3E]/10 border border-[#1B4D3E]/20 flex items-center justify-center text-[#1B4D3E]">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z"></path>
                <path d="M12 6v12"></path>
                <path d="M8 10l4-4 4 4"></path>
                <path d="M7 15c2-1 4-1 5 0"></path>
                <path d="M12 15c1-1 3-1 5 0"></path>
              </svg>
            </div>
            <span className="font-display tracking-tight">Raised Garden Beds Layout</span>
          </Link>

          {/* Primary Legal Compliance Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium" aria-label="Legal & Support Pages">
            <Link
              href="/terms"
              className="text-[#4A4E4A] hover:text-[#1B4D3E] py-1.5 transition-colors underline-offset-4 hover:underline"
              id="footer-link-terms"
            >
              Terms of Service
            </Link>
            <span className="text-black/25 hidden sm:inline" aria-hidden="true">&bull;</span>
            <Link
              href="/privacy"
              className="text-[#4A4E4A] hover:text-[#1B4D3E] py-1.5 transition-colors underline-offset-4 hover:underline"
              id="footer-link-privacy"
            >
              Privacy Policy
            </Link>
            <span className="text-black/25 hidden sm:inline" aria-hidden="true">&bull;</span>
            <Link
              href="/refund"
              className="text-[#4A4E4A] hover:text-[#1B4D3E] py-1.5 transition-colors underline-offset-4 hover:underline"
              id="footer-link-refund"
            >
              Refund Policy
            </Link>
            <span className="text-black/25 hidden sm:inline" aria-hidden="true">&bull;</span>
            <a
              href="mailto:support@raisedgardenbedslayout.com"
              className="text-[#4A4E4A] hover:text-[#1B4D3E] py-1.5 transition-colors underline-offset-4 hover:underline"
              id="footer-link-support"
            >
              support@raisedgardenbedslayout.com
            </a>
          </nav>
        </div>

        {/* Paddle Merchant of Record & Copyright compliance statement */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 text-xs text-[#717571] text-center md:text-left leading-relaxed">
          <div className="max-w-2xl space-y-1.5">
            <p>
              &copy; {currentYear} Raised Garden Beds Layout (<strong className="font-semibold text-[#4A4E4A]">raisedgardenbedslayout.com</strong>). All rights reserved. Standard digital edition for personal, non-commercial home garden use.
            </p>
            <p className="text-[11px] text-[#808580]">
              Our order process is conducted by our online reseller and Merchant of Record, <strong className="font-semibold text-[#4A4E4A]">Paddle.com</strong>, who also handles order inquiries, tax compliance, and returns.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 pt-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#1B4D3E]/5 border border-[#1B4D3E]/20 text-[11px] font-semibold text-[#1B4D3E]">
              <svg className="w-3.5 h-3.5 text-[#1B4D3E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>Paddle Merchant of Record</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
