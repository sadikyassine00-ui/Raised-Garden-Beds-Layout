import React from 'react';

export function GuaranteeSection() {
  return (
    <section className="py-12 sm:py-16 border-t border-black/[0.08]" aria-label="Purchase Reassurance">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-[#1B4D3E]/20 rounded-lg p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col gap-2.5">
              <div className="w-10 h-10 rounded bg-[#1B4D3E]/10 border border-[#1B4D3E]/20 flex items-center justify-center text-[#1B4D3E]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-[#1A1A1A]">
                Instant Email Delivery
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4E4A] leading-relaxed">
                Your PDF download link arrives in your inbox within 3 seconds of checkout. Open immediately on your smartphone, iPad, or desktop.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="w-10 h-10 rounded bg-[#1B4D3E]/10 border border-[#1B4D3E]/20 flex items-center justify-center text-[#1B4D3E]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-[#1A1A1A]">
                Home Printer Ready
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4E4A] leading-relaxed">
                Formatted for standard US Letter (8.5×11") and international A4 home printers. Compatible with GoodNotes, Notability, and tablet apps.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="w-10 h-10 rounded bg-[#1B4D3E]/10 border border-[#1B4D3E]/20 flex items-center justify-center text-[#1B4D3E]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-[#1A1A1A]">
                30-Day Harvest Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4E4A] leading-relaxed">
                If these blueprints don't save you hours of planning and help you grow a more productive garden, send a quick email for a 100% refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
