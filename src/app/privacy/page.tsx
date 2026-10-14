import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalHeader } from '@/components/LegalHeader';
import { LegalContactBox } from '@/components/LegalContactBox';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Raised Garden Beds Layout',
  description:
    'Privacy Policy for raisedgardenbedslayout.com. Fully GDPR & CCPA compliant. Secure transaction processing by Paddle as Merchant of Record.',
  alternates: {
    canonical: 'https://raisedgardenbedslayout.com/privacy',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'October 14, 2026';

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <LegalHeader currentDocument="Privacy Policy" />

      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Banner */}
          <div className="mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1B4D3E]/10 border border-[#1B4D3E]/20 text-[#1B4D3E] text-xs font-semibold uppercase tracking-wider mb-3">
              <span>GDPR &amp; CCPA Compliance &bull; Data Protection</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B4D3E] tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed max-w-2xl">
              We respect your privacy and believe in minimal data collection. This document explains what information is collected, how it is processed securely via Paddle, and how you can manage or delete your data.
            </p>
          </div>

          {/* Top Contact & Update Highlight Box */}
          <LegalContactBox variant="top" lastUpdated={lastUpdated} />

          {/* Paddle Merchant of Record Data Highlight */}
          <div className="bg-[#FAF7F2] border-2 border-[#1B4D3E]/30 rounded-xl p-6 sm:p-7 mb-10 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="font-display text-base sm:text-lg font-bold text-[#1B4D3E]">
                  Paddle Merchant of Record Payment Protection
                </h2>
                <p className="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed font-medium">
                  Financial details—such as complete credit card numbers, CVVs, and direct billing instruments—are collected and processed exclusively by Paddle.com as our Merchant of Record and are NEVER stored or seen by our servers.
                </p>
                <p className="text-xs text-[#4A4E4A] leading-relaxed">
                  Paddle operates under PCI-DSS Level 1 compliance standards, the highest certification in the global payments industry.
                </p>
              </div>
            </div>
          </div>

          {/* Document Content Card */}
          <div className="bg-white border border-black/[0.08] rounded-xl p-6 sm:p-10 shadow-xs space-y-10 text-[#1A1A1A]">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">1</span>
                Privacy Commitment &amp; Regulatory Framework
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  At <strong>raisedgardenbedslayout.com</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we take consumer data privacy seriously. We operate under a strict principle of data minimization: we collect only the essential information strictly necessary to fulfill your order of the <strong>Raised Garden Bed Blueprint and Layout Bundle ($19.00 USD)</strong>, verify digital delivery, and provide customer support.
                </p>
                <p>
                  This Privacy Policy is designed to comply with international consumer privacy frameworks, including the European Union General Data Protection Regulation (<strong>GDPR</strong>), the UK GDPR, and the California Consumer Privacy Act of 2018 as amended by the California Privacy Rights Act (<strong>CCPA/CPRA</strong>).
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">2</span>
                Personal Information We Collect
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  When you make a purchase on raisedgardenbedslayout.com, we collect only the minimal data points required to execute the transaction:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                  <div className="p-4 rounded-lg bg-[#FBFBFA] border border-black/[0.08] space-y-1.5">
                    <div className="font-semibold text-xs text-[#1B4D3E] uppercase tracking-wider">01. Customer Name</div>
                    <p className="text-xs text-[#4A4E4A]">Used to personalize your purchase invoice and confirm personal non-commercial license ownership.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[#FBFBFA] border border-black/[0.08] space-y-1.5">
                    <div className="font-semibold text-xs text-[#1B4D3E] uppercase tracking-wider">02. Email Address</div>
                    <p className="text-xs text-[#4A4E4A]">Used solely to deliver your PDF download links, order receipts, and direct customer support replies.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[#FBFBFA] border border-black/[0.08] space-y-1.5">
                    <div className="font-semibold text-xs text-[#1B4D3E] uppercase tracking-wider">03. IP &amp; Country</div>
                    <p className="text-xs text-[#4A4E4A]">Collected by Paddle during checkout to determine jurisdiction-specific VAT/sales tax and prevent transaction fraud.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">3</span>
                Payment Processing by Paddle (Merchant of Record)
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  All commercial transactions are processed through <strong>Paddle.com</strong>, our third-party Merchant of Record. Paddle is a globally trusted merchant infrastructure provider operating across the United States, United Kingdom, and European Union.
                </p>
                <p>
                  When checking out, your sensitive financial data—including your 16-digit credit card number, expiration date, card security code (CVV), or bank identifiers—is transmitted directly from your web browser to Paddle&rsquo;s encrypted payment vaults.
                </p>
                <div className="p-4 bg-[#1B4D3E]/[0.05] border border-[#1B4D3E]/20 rounded-lg text-xs sm:text-sm text-[#1A1A1A] space-y-1">
                  <p className="font-semibold text-[#1B4D3E]">Our Zero Financial Storage Guarantee:</p>
                  <p className="text-[#4A4E4A]">
                    Raised Garden Beds Layout never has access to, does not handle, and never stores your credit card number or bank credentials. Paddle provides us only with an anonymized transaction receipt identifier, your customer email, and confirmation that payment succeeded so we can release your PDF files.
                  </p>
                </div>
                <p className="text-xs text-[#717571]">
                  For additional details regarding Paddle&rsquo;s security controls, you may review Paddle&rsquo;s privacy documentation directly at <a href="https://www.paddle.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline font-medium">paddle.com/legal/privacy</a>.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">4</span>
                How We Use Your Email Address &amp; No-Sale Guarantee
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  Your email address is an essential channel of communication for product fulfillment. We use your email strictly for the following purposes:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#4A4E4A]">
                  <li>Dispatching your instant PDF blueprint download links and order confirmation.</li>
                  <li>Delivering your official Paddle sales invoice and VAT receipt.</li>
                  <li>Responding to direct customer service inquiries, refund requests, or blueprint replacement queries you initiate.</li>
                </ul>
                <div className="p-4 bg-[#FAF7F2] border border-[#C88A58]/35 rounded-lg space-y-1.5">
                  <p className="font-semibold text-sm text-[#A86D3F]">
                    Strict Guarantee Against Selling or Sharing Data:
                  </p>
                  <p className="text-xs sm:text-sm text-[#4A4E4A] leading-relaxed">
                    We do <strong>not</strong> sell, rent, monetize, trade, or share your personal information or email address with third-party advertisers, data brokers, lead generation agencies, or affiliate networks. We do not engage in targeted cross-context advertising.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">5</span>
                Cookies and Technical Web Storage
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  We keep technical website storage to an absolute minimum:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#4A4E4A]">
                  <li>
                    <strong>Essential Functional Storage:</strong> We do not deploy invasive third-party ad pixels (such as Meta pixel or marketing retargeting trackers). We use minimal, standard browser session storage to maintain smooth checkout drawer interactions and store functional UI states.
                  </li>
                  <li>
                    <strong>Server Logs:</strong> Like standard web hosts, our hosting servers automatically record basic technical access logs (e.g., browser user-agent, operating system, timestamp) strictly for server diagnostics, security monitoring, and uptime protection. These logs are purged periodically.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">6</span>
                Legal Bases for Processing Under GDPR
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-2">
                <p>For visitors and purchasers located in the European Economic Area (EEA) and United Kingdom, we process personal data under the following lawful bases:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#4A4E4A]">
                  <li><strong>Contractual Necessity:</strong> Processing your name and email to deliver the digital blueprint bundle you paid for and provide post-purchase access.</li>
                  <li><strong>Legal Obligation:</strong> Retaining mandatory financial transaction records and invoice logs as required by statutory taxation and anti-fraud regulations.</li>
                  <li><strong>Legitimate Interests:</strong> Operating a secure digital storefront, preventing fraudulent payments, and responding to direct inquiries.</li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">7</span>
                Your Privacy Rights &amp; How to Request Data Deletion
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  Regardless of your geographical location, we provide comprehensive rights regarding your personal information, in full accordance with GDPR and CCPA/CPRA standards:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4A4E4A]">
                  <div className="p-3.5 rounded bg-[#FBFBFA] border border-black/[0.08]">
                    <strong className="text-[#1A1A1A] block mb-1">Right to Access / Know</strong>
                    Request confirmation of the personal data we hold about you and receive a readable copy.
                  </div>
                  <div className="p-3.5 rounded bg-[#FBFBFA] border border-black/[0.08]">
                    <strong className="text-[#1A1A1A] block mb-1">Right to Erasure (Deletion)</strong>
                    Request permanent deletion of your email address and associated customer records.
                  </div>
                  <div className="p-3.5 rounded bg-[#FBFBFA] border border-black/[0.08]">
                    <strong className="text-[#1A1A1A] block mb-1">Right to Rectification</strong>
                    Request corrections to any inaccurate or misspelled customer email records.
                  </div>
                  <div className="p-3.5 rounded bg-[#FBFBFA] border border-black/[0.08]">
                    <strong className="text-[#1A1A1A] block mb-1">Right to Non-Discrimination</strong>
                    You will never experience reduced pricing or denied service for exercising your privacy rights.
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#1B4D3E]/[0.05] border border-[#1B4D3E]/20 space-y-2 mt-4">
                  <h3 className="font-display text-base font-bold text-[#1B4D3E]">
                    How to Submit a Data Deletion or Access Request
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A4E4A]">
                    To exercise your right to erasure, data access, or data portability, please email our privacy team directly:
                  </p>
                  <div className="bg-white p-3 rounded border border-black/[0.08] text-xs font-mono text-[#1A1A1A]">
                    To: <span className="text-[#1B4D3E] font-bold">support@raisedgardenbedslayout.com</span><br/>
                    Subject: <span className="font-semibold">Privacy Request / Data Deletion</span>
                  </div>
                  <p className="text-xs text-[#717571]">
                    Please submit your request from the email address used during purchase. We verify ownership and fulfill all valid erasure requests within thirty (30) days without charge.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">8</span>
                Data Retention &amp; Security Standards
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  We retain customer email addresses and transaction metadata only for as long as required to maintain persistent download link access for you, provide ongoing customer service, and satisfy statutory accounting or tax documentation rules.
                </p>
                <p>
                  All data transmitted across our website utilizes industry-standard 256-bit Transport Layer Security (TLS/HTTPS) encryption. Access to customer service inboxes is protected by strict multi-factor authentication (MFA).
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">9</span>
                Children&rsquo;s Online Privacy
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  Our digital products and website are intended for adults, homeowners, and garden enthusiasts over 18 years of age. We do not knowingly collect or solicit personal information from children under 13 (or under 16 in the European Union). If we become aware that a child has provided us with personal data, we will take immediate steps to delete such information.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">10</span>
                Contact Information
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-2">
                <p>If you have any questions or concerns regarding this Privacy Policy, our data practices, or our compliance posture, please contact us:</p>
                <div className="bg-[#FBFBFA] p-4 rounded-lg border border-black/[0.08] text-sm space-y-1">
                  <p><strong>Website:</strong> raisedgardenbedslayout.com</p>
                  <p><strong>Official Privacy Email:</strong> <a href="mailto:support@raisedgardenbedslayout.com" className="text-[#1B4D3E] underline font-semibold">support@raisedgardenbedslayout.com</a></p>
                  <p><strong>Merchant of Record Support:</strong> <a href="https://paddle.net" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline font-semibold">paddle.net</a></p>
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
