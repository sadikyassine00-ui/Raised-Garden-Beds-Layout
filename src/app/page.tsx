import React from 'react';
import { AnnouncementStrip } from '@/components/AnnouncementStrip';
import { BrandHeader } from '@/components/BrandHeader';
import { HeroSection } from '@/components/HeroSection';
import { StickyPurchaseBar } from '@/components/StickyPurchaseBar';
import { DeliverablesGrid } from '@/components/DeliverablesGrid';
import { InteractivePreview } from '@/components/InteractivePreview';
import { GuaranteeSection } from '@/components/GuaranteeSection';
import { FaqAccordion } from '@/components/FaqAccordion';
import { BottomConversion } from '@/components/BottomConversion';
import { Footer } from '@/components/Footer';
import { CheckoutTesterModal } from '@/components/CheckoutTesterModal';

export default function LandingPage() {
  return (
    <>
      <AnnouncementStrip />
      <BrandHeader />
      <main>
        <HeroSection />
        <DeliverablesGrid />
        <InteractivePreview />
        <GuaranteeSection />
        <FaqAccordion />
        <BottomConversion />
      </main>
      <StickyPurchaseBar />
      <Footer />
      <CheckoutTesterModal />
    </>
  );
}
