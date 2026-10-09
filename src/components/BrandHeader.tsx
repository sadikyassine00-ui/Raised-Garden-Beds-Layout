import React from 'react';

export function BrandHeader() {
  return (
    <div className="py-3 px-4 sm:px-6 border-b border-black/[0.08] bg-[#FBFBFA]">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="inline-flex items-center gap-2.5">
          <svg
            className="w-5 h-5 text-[#1B4D3E]"
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
          <span className="font-display text-base sm:text-lg font-bold text-[#1B4D3E] tracking-tight">
            Raised Garden Beds Layout
          </span>
        </div>
        <span className="font-mono text-[11px] font-semibold text-[#A86D3F] bg-[#C88A58]/10 px-2.5 py-1 rounded border border-[#C88A58]/25 tracking-wide">
          SPRING 2026 EDITION
        </span>
      </div>
    </div>
  );
}
