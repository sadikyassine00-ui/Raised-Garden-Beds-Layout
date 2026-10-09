import React from 'react';

export function AnnouncementStrip() {
  return (
    <header className="bg-[#123329] text-[#F4F6F4] py-2 px-3 text-xs md:text-[13px] font-medium border-b border-white/10" role="banner">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-center flex-wrap">
        <span className="inline-flex items-center bg-[#C88A58]/30 text-[#F8D8BE] font-mono text-[11px] font-semibold px-2 py-0.5 rounded tracking-wide uppercase">
          Instant Download
        </span>
        <span className="text-white/90">
          Digital PDF delivery within seconds <span className="opacity-40 mx-1">/</span> Standard US Letter &amp; A4 formats included
        </span>
      </div>
    </header>
  );
}
