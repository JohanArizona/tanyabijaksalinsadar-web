"use client";

import Hero from '@/components/Hero';
import OfficialBannerEscalator from '@/components/OfficialBannerEscalator';
import Synopsis from '@/components/Synopsis';
import TeamSection from '@/components/TeamSection';
import PesanMoral from '@/components/PesanMoral';
import ImpactSection from '@/components/ImpactSection';
import Footer from '@/components/Footer';
import TrailerModal from '@/components/TrailerModal';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Hero openTrailer={() => setIsOpen(true)} />
      <OfficialBannerEscalator />
      <Synopsis />
      <TeamSection />
      <PesanMoral />
      <ImpactSection />
      <Footer />
      <TrailerModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}