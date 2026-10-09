import React from 'react';

export function DeliverablesGrid() {
  return (
    <section className="py-12 sm:py-16 border-t border-black/[0.08]" aria-label="What Is Inside The Bundle">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <p className="font-mono text-[11.5px] font-semibold text-[#A86D3F] uppercase tracking-wider mb-2">
            The Complete Bundle
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight mb-2.5">
            Everything You Need to Plan and Build
          </h2>
          <p className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed">
            Four practical blueprint guides packaged in printable PDF formats. No filler, no complicated software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {/* Card 1 */}
          <article className="bg-white border border-black/10 hover:border-[#1B4D3E]/30 transition-colors rounded-lg p-5 sm:p-6 shadow-xs flex flex-col">
            <div className="w-10 h-10 rounded bg-[#1B4D3E]/10 border border-[#1B4D3E]/20 flex items-center justify-center text-[#1B4D3E] mb-4">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="3" y1="15" x2="21" y2="15"></line>
                <line x1="9" y1="3" x2="9" y2="21"></line>
                <line x1="15" y1="3" x2="15" y2="21"></line>
              </svg>
            </div>
            <span className="font-mono text-[11px] font-semibold text-[#717571] uppercase mb-1">Pack 01</span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#1A1A1A] mb-2 leading-snug">
              Modular Bed Blueprints
            </h3>
            <p className="text-sm text-[#4A4E4A] leading-relaxed mb-4">
              Pre-measured raised bed layouts with exact square-foot planting grids to double your produce per square foot.
            </p>
            <ul className="flex flex-col gap-2 mt-auto pt-3.5 border-t border-black/[0.08] text-[13.5px] text-[#1A1A1A]">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#1B4D3E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>4'x8' Classic High-Yield layout (32 sq. ft. intensive grid)</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#1B4D3E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>4'x4' Compact Square and 2'x8' Narrow Walkway beds</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#1B4D3E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>8'x8' L-Shape Corner configuration with trellis placement</span>
              </li>
            </ul>
          </article>

          {/* Card 2 */}
          <article className="bg-white border border-black/10 hover:border-[#1B4D3E]/30 transition-colors rounded-lg p-5 sm:p-6 shadow-xs flex flex-col">
            <div className="w-10 h-10 rounded bg-[#1B4D3E]/10 border border-[#1B4D3E]/20 flex items-center justify-center text-[#1B4D3E] mb-4">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <span className="font-mono text-[11px] font-semibold text-[#717571] uppercase mb-1">Pack 02</span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#1A1A1A] mb-2 leading-snug">
              Companion Planting Cheat Sheet
            </h3>
            <p className="text-sm text-[#4A4E4A] leading-relaxed mb-4">
              Visual guide showing which vegetables protect each other from pests and which pairs stunt soil health.
            </p>
            <ul className="flex flex-col gap-2 mt-auto pt-3.5 border-t border-black/[0.08] text-[13.5px] text-[#1A1A1A]">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#1B4D3E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Natural pest-repelling pairings (Tomatoes + Basil + Marigolds)</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#1B4D3E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Antagonistic pairs to isolate (Onions away from Beans &amp; Peas)</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#1B4D3E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Root depth zoning so plants share water and minerals easily</span>
              </li>
            </ul>
          </article>

          {/* Card 3 */}
          <article className="bg-white border border-black/10 hover:border-[#1B4D3E]/30 transition-colors rounded-lg p-5 sm:p-6 shadow-xs flex flex-col">
            <div className="w-10 h-10 rounded bg-[#C88A58]/10 border border-[#C88A58]/25 flex items-center justify-center text-[#A86D3F] mb-4">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
              </svg>
            </div>
            <span className="font-mono text-[11px] font-semibold text-[#717571] uppercase mb-1">Pack 03</span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#1A1A1A] mb-2 leading-snug">
              DIY Lumber Cut Lists
            </h3>
            <p className="text-sm text-[#4A4E4A] leading-relaxed mb-4">
              Zero-waste shopping lists for your local lumber center. Build sturdy rot-resistant beds without guesswork.
            </p>
            <ul className="flex flex-col gap-2 mt-auto pt-3.5 border-t border-black/[0.08] text-[13.5px] text-[#1A1A1A]">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#1B4D3E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Standard 2x6 and 2x8 dimensional cedar/fir board sizing</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#1B4D3E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Screw sizing, pilot hole positions, and corner post bracing</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#1B4D3E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Soil volume formulas (cubic yards, compost, vermiculite, peat)</span>
              </li>
            </ul>
          </article>

          {/* Card 4 */}
          <article className="bg-white border border-black/10 hover:border-[#1B4D3E]/30 transition-colors rounded-lg p-5 sm:p-6 shadow-xs flex flex-col">
            <div className="w-10 h-10 rounded bg-[#1B4D3E]/10 border border-[#1B4D3E]/20 flex items-center justify-center text-[#1B4D3E] mb-4">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <span className="font-mono text-[11px] font-semibold text-[#717571] uppercase mb-1">Pack 04</span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#1A1A1A] mb-2 leading-snug">
              Seasonal Planting Schedule
            </h3>
            <p className="text-sm text-[#4A4E4A] leading-relaxed mb-4">
              Step-by-step seed starting and succession timeline to keep your raised beds producing from spring through late fall.
            </p>
            <ul className="flex flex-col gap-2 mt-auto pt-3.5 border-t border-black/[0.08] text-[13.5px] text-[#1A1A1A]">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#1B4D3E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Early Spring cold-tolerant quick starters (Radish, Spinach, Peas)</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#1B4D3E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Summer peak harvest staples and mid-season succession replants</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#1B4D3E] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>4-year crop family rotation rules to stop soil depletion</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
