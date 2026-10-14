import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalHeader } from '@/components/LegalHeader';
import { LegalContactBox } from '@/components/LegalContactBox';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Refund & Return Policy | Raised Garden Beds Layout',
  description:
    '14-Day Money-Back Guarantee for the Raised Garden Bed Blueprint and Layout Bundle. Hassle-free refunds processed back to your original payment method via Paddle.',
  alternates: {
    canonical: 'https://raisedgardenbedslayout.com/refund',
  },
};

export default function RefundPolicyPage() {
  const lastUpdated = 'October 14, 2026';

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <LegalHeader currentDocument="Refund Policy" />

      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Banner */}
          <div className="mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1B4D3E]/10 border border-[#1B4D3E]/20 text-[#1B4D3E] text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Consumer Reassurance &bull; 14-Day Guarantee</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B4D3E] tracking-tight mb-3">
              Refund &amp; Return Policy
            </h1>
            <p className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed max-w-2xl">
              We stand behind our woodworking blueprints and companion planting guides with an unconditional 14-day money-back guarantee. If you are not satisfied, we will issue a complete refund.
            </p>
          </div>

          {/* Top Contact & Update Highlight Box */}
          <LegalContactBox variant="top" lastUpdated={lastUpdated} />

          {/* 14-Day Guarantee Hero Badge */}
          <div className="bg-[#FAF7F2] border-2 border-[#1B4D3E]/30 rounded-xl p-6 sm:p-8 mb-10 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] font-mono text-xs font-bold uppercase tracking-wider mb-1">
                    100% Unconditional Guarantee
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] leading-tight">
                    14-Day Money-Back Guarantee
                  </h2>
                  <p className="text-xs sm:text-sm text-[#4A4E4A] leading-relaxed mt-1 max-w-lg">
                    If our blueprints do not save you hours of trial-and-error in your garden or you encounter any technical file issues, simply email us within 14 days of purchase for a prompt, 100% refund.
                  </p>
                </div>
              </div>

              <div className="shrink-0 w-full sm:w-auto">
                <a
                  href="mailto:support@raisedgardenbedslayout.com?subject=Refund%20Request%20-%20Raised%20Garden%20Bed%20Blueprint"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded bg-[#1B4D3E] hover:bg-[#143A2F] text-white font-semibold text-xs tracking-wide transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>Request a Refund</span>
                </a>
              </div>
            </div>
          </div>

          {/* Document Content Card */}
          <div className="bg-white border border-black/[0.08] rounded-xl p-6 sm:p-10 shadow-xs space-y-10 text-[#1A1A1A]">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">1</span>
                Our Commitment to Customer Satisfaction
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  At <strong>raisedgardenbedslayout.com</strong>, we design our woodworking schematics, square-foot planting grids, and lumber cut lists to be the most practical and accessible garden blueprints available. Our flagship product, the <strong>Raised Garden Bed Blueprint and Layout Bundle ($9.00 USD)</strong>, is created to deliver immediate clarity and eliminate costly lumber mistakes.
                </p>
                <p>
                  Because this is an instant digital product delivered in downloadable PDF format, traditional physical return shipping does not apply. However, we believe in complete fairness: if the blueprints do not meet your expectations, you are fully protected by our straightforward <strong>14-day refund policy</strong>.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">2</span>
                Eligibility Conditions (Fourteen-Day Window)
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  You are eligible for a complete, 100% refund of your nine dollar ($9.00) purchase if you request it within <strong>fourteen (14) calendar days</strong> from your original purchase date.
                </p>
                <p>
                  Valid reasons for requesting a refund include, but are not limited to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-[#4A4E4A]">
                  <li>
                    <strong>Unsatisfied with Content:</strong> You reviewed the materials and determined that the layouts, companion planting grids, or lumber cuts did not match your gardening plans or experience level.
                  </li>
                  <li>
                    <strong>Technical Incompatibility:</strong> You experienced issues downloading, opening, or viewing the PDF files on your desktop, tablet, or phone, and our support team was unable to resolve the file display to your satisfaction.
                  </li>
                  <li>
                    <strong>Dimensional Mismatch:</strong> The four included bed configurations (4&prime;&times;8&prime;, 4&prime;&times;4&prime;, 2&prime;&times;8&prime;, 8&prime;&times;8&prime; L-shape) do not accommodate the physical dimensions of your yard or patio.
                  </li>
                  <li>
                    <strong>Accidental Duplicate Order:</strong> You inadvertently placed two orders during checkout.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">3</span>
                How to Request Your Refund (Step-by-Step)
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  Requesting a refund is simple and requires no lengthy phone calls or complicated questionnaires:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-lg bg-[#FBFBFA] border border-black/[0.08] space-y-2">
                    <div className="w-6 h-6 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center text-xs font-bold">1</div>
                    <h3 className="font-semibold text-sm text-[#1A1A1A]">Send an Email</h3>
                    <p className="text-xs text-[#4A4E4A]">
                      Send an email to <a href="mailto:support@raisedgardenbedslayout.com" className="text-[#1B4D3E] underline font-semibold">support@raisedgardenbedslayout.com</a> with the subject line <em>&ldquo;Refund Request&rdquo;</em>.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#FBFBFA] border border-black/[0.08] space-y-2">
                    <div className="w-6 h-6 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center text-xs font-bold">2</div>
                    <h3 className="font-semibold text-sm text-[#1A1A1A]">Provide Order Info</h3>
                    <p className="text-xs text-[#4A4E4A]">
                      Provide either the <strong>email address used during purchase</strong> or your <strong>Paddle transaction ID / order number</strong> from your email receipt.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#FBFBFA] border border-black/[0.08] space-y-2">
                    <div className="w-6 h-6 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center text-xs font-bold">3</div>
                    <h3 className="font-semibold text-sm text-[#1A1A1A]">Prompt Confirmation</h3>
                    <p className="text-xs text-[#4A4E4A]">
                      Our team will acknowledge and process your refund within 24 business hours. No difficult hurdles or resistance.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">4</span>
                Processing Timeframes &amp; Paddle Merchant of Record Execution
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  Because all orders are transacted through <strong>Paddle.com</strong> as our Merchant of Record, all approved refunds are issued directly through Paddle&rsquo;s global banking rails:
                </p>
                <div className="p-5 bg-[#FAF7F2] border border-[#C88A58]/35 rounded-xl space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-semibold text-[#1B4D3E]">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Timeline: 3 to 5 Business Days</span>
                  </div>
                  <p className="text-[#4A4E4A] leading-relaxed">
                    Once approved, the refund is executed by Paddle and sent back to your <strong>original payment method</strong> (credit card, debit card, PayPal, Apple Pay, or Google Pay). Funds typically reflect on your bank or card statement within <strong>three to five (3–5) business days</strong>, depending on your financial institution&rsquo;s clearing cycle.
                  </p>
                  <p className="text-[#717571]">
                    You will receive an automated refund receipt email directly from Paddle confirming that the transaction has been reversed.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">5</span>
                Post-Refund Licensing Guidelines
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  When a full refund is issued:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#4A4E4A]">
                  <li>The personal license granted to view and build from the Raised Garden Bed Blueprint and Layout Bundle is formally terminated.</li>
                  <li>We ask that in accordance with honest personal conduct, you delete downloaded PDF files, cut lists, and companion guides from your devices and discard printed copies.</li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">6</span>
                Dispute Prevention &amp; Paddle Buyer Support
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  We are committed to providing a transparent, fair purchasing experience. If you have an inquiry or desire a refund, please contact us first at <a href="mailto:support@raisedgardenbedslayout.com" className="text-[#1B4D3E] underline font-semibold">support@raisedgardenbedslayout.com</a> or utilize Paddle Buyer Support at <a href="https://paddle.net" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline font-semibold">paddle.net</a> before submitting a bank chargeback. We resolve all refund requests promptly and without conflict.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">7</span>
                Official Contact Information
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-2">
                <p>For refunds, order lookups, and questions, our support team is available:</p>
                <div className="bg-[#FBFBFA] p-4 rounded-lg border border-black/[0.08] text-sm space-y-1">
                  <p><strong>Support Email:</strong> <a href="mailto:support@raisedgardenbedslayout.com" className="text-[#1B4D3E] underline font-semibold">support@raisedgardenbedslayout.com</a></p>
                  <p><strong>Website:</strong> raisedgardenbedslayout.com</p>
                  <p><strong>Paddle Buyer Portal:</strong> <a href="https://paddle.net" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline font-semibold">https://paddle.net</a></p>
                  <p><strong>Response Guarantee:</strong> Inquiries addressed within 24 business hours</p>
                </div>
              </div>
            </section>

          </div>

          {/* Bottom Contact & Merchant of Record Card */}
          <LegalContactBox variant="bottom" lastUpdated={lastUpdated} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
