import React from 'react';
import Link from 'next/link';

interface LegalHeaderProps {
  currentDocument?: string;
}

export function LegalHeader({ currentDocument }: LegalHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/[0.08] bg-[#FBFBFA]/95 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Home Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 group transition-opacity hover:opacity-85"
          aria-label="Raised Garden Beds Layout Home"
        >
          <div className="w-8 h-8 rounded-md bg-[#1B4D3E]/10 border border-[#1B4D3E]/20 flex items-center justify-center text-[#1B4D3E] group-hover:bg-[#1B4D3E] group-hover:text-white transition-colors">
            <svg
              className="w-4.5 h-4.5"
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
          <div className="flex flex-col">
            <span className="font-display text-sm sm:text-base font-bold text-[#1B4D3E] tracking-tight leading-tight">
              Raised Garden Beds Layout
            </span>
            {currentDocument && (
              <span className="text-[11px] font-medium text-[#717571] leading-tight">
                {currentDocument}
              </span>
            )}
          </div>
        </Link>

        {/* Navigation & Return Actions */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:support@raisedgardenbedslayout.com"
            className="hidden md:inline-flex items-center gap-1.5 text-xs text-[#717571] hover:text-[#1B4D3E] transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>support@raisedgardenbedslayout.com</span>
          </a>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4D3E] bg-[#1B4D3E]/8 hover:bg-[#1B4D3E]/15 border border-[#1B4D3E]/20 px-3 py-1.5 rounded transition-all active:scale-[0.98]"
            title="Return to Blueprint Bundle Landing Page"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Blueprint ($19)</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
