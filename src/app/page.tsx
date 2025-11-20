'use client';

import Hero from '@/components/Hero';
import InteractivePath from '@/components/InteractivePath';
import Synopsis from '@/components/Synopsis';
import TrailerModal from '@/components/TrailerModal';
import Team from '@/components/TeamUB';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Home() {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-black">
        <Hero openTrailer={() => setIsTrailerOpen(true)} />
        <InteractivePath />
        <Synopsis />
        <Team />
        <Gallery />
        <Footer />
        <TrailerModal isOpen={isTrailerOpen} onClose={() => setIsTrailerOpen(false)} />
      </div>
    </>
  );
}