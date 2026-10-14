import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalHeader } from '@/components/LegalHeader';
import { LegalContactBox } from '@/components/LegalContactBox';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Raised Garden Beds Layout',
  description:
    'Terms of Service and legal agreements for the Raised Garden Bed Blueprint and Layout Bundle. Merchant of Record transactions powered by Paddle.com.',
  alternates: {
    canonical: 'https://raisedgardenbedslayout.com/terms',
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = 'October 14, 2026';

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <LegalHeader currentDocument="Terms of Service" />

      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Banner */}
          <div className="mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1B4D3E]/10 border border-[#1B4D3E]/20 text-[#1B4D3E] text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Legal Agreement &bull; Merchant of Record Compliance</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B4D3E] tracking-tight mb-3">
              Terms of Service
            </h1>
            <p className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed max-w-2xl">
              These terms govern your purchase and use of digital informational products provided by raisedgardenbedslayout.com. Please review them carefully before ordering.
            </p>
          </div>

          {/* Top Contact & Update Highlight Box */}
          <LegalContactBox variant="top" lastUpdated={lastUpdated} />

          {/* Paddle Merchant of Record Mandatory Callout */}
          <div className="bg-[#FAF7F2] border-2 border-[#1B4D3E]/30 rounded-xl p-6 sm:p-7 mb-10 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="font-display text-base sm:text-lg font-bold text-[#1B4D3E]">
                  Paddle.com as Merchant of Record
                </h2>
                <p className="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed font-medium">
                  Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns.
                </p>
                <p className="text-xs text-[#4A4E4A] leading-relaxed">
                  Paddle Payments Ltd (or Paddle.com Inc. in the United States) is responsible for processing your transaction securely, collecting applicable sales tax or VAT according to your jurisdiction, issuing official tax invoices, and fulfilling customer service inquiries, billing support, and returns.
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
                Overview &amp; Service Provider Definition
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  Welcome to <strong>raisedgardenbedslayout.com</strong> (referred to herein as &ldquo;the Website&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). We are a specialized provider of digital informational products, woodworking schematics, and agricultural planning guides tailored for home gardeners and DIY builders.
                </p>
                <p>
                  Our primary product offering is the <strong>Raised Garden Bed Blueprint and Layout Bundle</strong> (the &ldquo;Digital Product&rdquo;), sold for a <strong>single, one-time fee of nine dollars ($9.00 USD)</strong>. The bundle encompasses printable high-resolution PDF architectural cut lists, modular dimensional lumber configurations (4&prime;&times;8&prime;, 4&prime;&times;4&prime;, 2&prime;&times;8&prime;, and 8&prime;&times;8&prime; L-shaped beds), square-foot companion planting matrices, soil volume calculation formulas, and seasonal succession sowing calendars.
                </p>
                <p>
                  By accessing this website, placing an order, or downloading the digital materials, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or purchase our products.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">2</span>
                Merchant of Record &amp; Payment Processing
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  All commercial orders and financial transactions made on raisedgardenbedslayout.com are conducted and processed exclusively by <strong>Paddle.com</strong> acting as our authorized Merchant of Record.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-[#4A4E4A]">
                  <li>
                    <strong>Legal Merchant:</strong> Paddle.com is the legal seller and Merchant of Record of the Digital Product. When you complete checkout, your contract of sale is with Paddle.com.
                  </li>
                  <li>
                    <strong>Tax &amp; Compliance:</strong> Paddle automatically calculates, collects, and remits local sales taxes, Goods and Services Tax (GST), and Value Added Tax (VAT) in accordance with statutory consumer regulations across all supported international jurisdictions.
                  </li>
                  <li>
                    <strong>Payment Methods:</strong> Paddle accepts major credit cards (Visa, MasterCard, American Express, Discover), debit cards, Apple Pay, Google Pay, and PayPal. Payment details are encrypted and transmitted directly through Paddle&rsquo;s Level 1 PCI-DSS certified gateway.
                  </li>
                  <li>
                    <strong>Invoicing:</strong> Following checkout, Paddle issues an official automated VAT/GST sales invoice directly to your specified email address.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">3</span>
                Digital Delivery &amp; Instant Access
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  All products available on raisedgardenbedslayout.com are delivered strictly in <strong>electronic, digital format</strong>. No physical wooden beds, fasteners, timber, seeds, or paper books will be shipped through postal mail.
                </p>
                <p>
                  Upon verified payment completion via Paddle:
                </p>
                <ol className="list-decimal pl-5 space-y-1.5 text-sm text-[#4A4E4A]">
                  <li>You will be immediately redirected to a secure order confirmation page containing direct PDF download links.</li>
                  <li>An automated confirmation email containing persistent, secure download links will be delivered to your order email within moments.</li>
                  <li>The blueprint bundle is supplied in universal Adobe Portable Document Format (.PDF), formatted for standard US Letter (8.5&Prime;&times;11&Prime;) and international A4 sheets, compatible with home desktop printers, mobile devices, iPads, and note-taking applications (such as GoodNotes and Notability).</li>
                </ol>
                <p>
                  If you do not see your delivery email within 10 minutes of ordering, check your spam or promotions folder, or contact our team directly at <a href="mailto:support@raisedgardenbedslayout.com" className="text-[#1B4D3E] underline font-semibold">support@raisedgardenbedslayout.com</a> with your Paddle order number for prompt re-delivery.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">4</span>
                License Grant &amp; Permitted Personal Use
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  When you purchase the Raised Garden Bed Blueprint and Layout Bundle, raisedgardenbedslayout.com grants you a non-exclusive, non-transferable, revocable license to access, download, view, and print the digital files for <strong>personal, non-commercial home garden use only</strong>.
                </p>
                <div className="bg-[#FBFBFA] border border-black/[0.08] rounded-lg p-4 space-y-2 text-xs sm:text-sm">
                  <p className="font-semibold text-[#1B4D3E]">What You May Do (Permitted Use):</p>
                  <ul className="list-disc pl-5 space-y-1 text-[#4A4E4A]">
                    <li>Save the PDF files onto your personal computers, smartphones, and tablet devices.</li>
                    <li>Print physical paper copies of the cut lists, diagrams, and planting grids for your personal residential backyard or community garden plot.</li>
                    <li>Construct physical garden beds for your private, non-commercial personal home use.</li>
                  </ul>
                </div>
                <div className="bg-[#FAF7F2] border border-[#C88A58]/30 rounded-lg p-4 space-y-2 text-xs sm:text-sm">
                  <p className="font-semibold text-[#A86D3F]">What You May NOT Do (Strictly Prohibited):</p>
                  <ul className="list-disc pl-5 space-y-1 text-[#4A4E4A]">
                    <li>Resell, sublicense, distribute, repackage, or rent the blueprints, cut lists, companion charts, or any portion thereof.</li>
                    <li>Upload, host, or share the digital files on public file-sharing networks, cloud folders, torrent trackers, social media groups, or digital marketplaces (including Etsy, eBay, or Amazon).</li>
                    <li>Use the architectural plans to manufacture, pre-fabricate, and sell commercial garden bed kits or commercial woodworking products without a separate written commercial licensing agreement executed with raisedgardenbedslayout.com.</li>
                    <li>Input or ingest our proprietary design text, CAD vectors, or planting layouts into generative artificial intelligence training datasets.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">5</span>
                Intellectual Property Rights
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  All contents of raisedgardenbedslayout.com and the Raised Garden Bed Blueprint Bundle (including but not limited to architectural drawings, 3D render mockups, square-foot layout grids, companion planting algorithms, soil volume calculators, lumber cut sheets, instructional text, graphics, logos, and website code) are the exclusive intellectual property of raisedgardenbedslayout.com and are protected under United States and international copyright, trademark, and unfair competition laws.
                </p>
                <p>
                  Any unauthorized duplication, modification, reverse-engineering, or commercial exploitation constitutes a direct infringement of intellectual property and will be pursued to the fullest extent permitted by law.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">6</span>
                User Conduct &amp; Acceptable Use
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  When utilizing our website and contacting our customer service, you agree not to:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#4A4E4A]">
                  <li>Provide fraudulent billing credentials, stolen credit cards, or false contact names during checkout.</li>
                  <li>Engage in automated data scraping, crawling, or network attacks aimed at disrupting server operations.</li>
                  <li>Abuse customer support channels with defamatory, abusive, or threatening communication.</li>
                  <li>Attempt to bypass security features, payment verifications, or digital file encryption mechanisms.</li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">7</span>
                Disclaimer of Warranties &amp; Limitation of Liability
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  <strong>DIY Woodworking &amp; Construction Safety:</strong> The blueprints, cut lists, diagrams, and build guides are provided for educational and recreational woodworking reference only. Construction involves power tools, circular saws, drills, heavy lumber, fasteners, and physical labor which carry inherent risks of bodily injury. You are solely responsible for:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#4A4E4A]">
                  <li>Employing proper personal protective equipment (PPE), including eye protection, hearing protection, and work gloves.</li>
                  <li>Inspecting timber for structural defects and confirming actual dimensional lumber tolerances before cutting (nominal 2&times;6 lumber typically measures 1.5&Prime;&times;5.5&Prime;).</li>
                  <li>Complying with municipal zoning requirements, homeowners association (HOA) covenants, and contacting local utility location services (&ldquo;Call 811&rdquo;) prior to ground excavation.</li>
                </ul>
                <p>
                  <strong>Agricultural &amp; Yield Variability:</strong> Garden yield, plant growth, companion effects, and pest prevention depend on local climate conditions, hardiness zones, sunlight exposure, soil amendments, watering consistency, and seed viability beyond our control. We make no warranty that every gardener will achieve identical harvest yields.
                </p>
                <p>
                  <strong>Limitation of Liability:</strong> To the maximum extent permitted under applicable law, in no event shall raisedgardenbedslayout.com, its owners, authors, affiliates, or Paddle.com be liable for any indirect, incidental, special, consequential, or punitive damages, or bodily injury or property damage arising out of your reliance on or execution of the build plans. In all cases, our aggregate total liability is strictly limited to the amount you paid for the product ($9.00 USD).
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">8</span>
                Refund &amp; Return Policy Reference
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  We proudly back our bundle with a <strong>14-day money-back guarantee</strong>. If you are unsatisfied with the blueprints, encounter an issue opening the files, or determine they do not fit your garden layout, you may request a 100% full refund within 14 days of purchase.
                </p>
                <p>
                  For complete instructions on submitting refund requests and Paddle clearing timeframes, please visit our dedicated <Link href="/refund" className="text-[#1B4D3E] font-semibold underline">Refund Policy</Link>.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">9</span>
                Modifications to Terms
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-3">
                <p>
                  We reserve the right to revise or update these Terms of Service at any time to reflect operational, legal, or regulatory requirements. The date of the most recent revision will always be displayed at the top and bottom of this document. Continued use of the website or purchased materials constitutes acceptance of the amended terms.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1B4D3E] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-mono font-bold flex items-center justify-center shrink-0">10</span>
                Contact &amp; Customer Support Channels
              </h2>
              <div className="text-sm sm:text-base text-[#4A4E4A] leading-relaxed space-y-2">
                <p>
                  For all questions regarding these Terms of Service, your order status, or technical support, please contact us at:
                </p>
                <div className="bg-[#FBFBFA] p-4 rounded-lg border border-black/[0.08] text-sm space-y-1">
                  <p><strong>Website:</strong> raisedgardenbedslayout.com</p>
                  <p><strong>Official Support Email:</strong> <a href="mailto:support@raisedgardenbedslayout.com" className="text-[#1B4D3E] underline font-semibold">support@raisedgardenbedslayout.com</a></p>
                  <p><strong>Merchant of Record:</strong> Paddle.com Inc. / Paddle Payments Ltd (<a href="https://paddle.net" target="_blank" rel="noopener noreferrer" className="text-[#1B4D3E] underline font-semibold">paddle.net</a>)</p>
                  <p><strong>Typical Response Window:</strong> Under 24 business hours</p>
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
