// src/components/Header.tsx
import Image from 'next/image';
import OfficialBanner from './OfficialBanner';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg">
      <OfficialBanner />
      <div className="px-8 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <Image src="/logos/ub.png" alt="UB" width={60} height={60} />
          <div>
            <h1 className="text-2xl font-bold text-white">TANYA BIJAK<br/><span className="text-cyan-400">SALIN SADAR</span></h1>
            <p className="text-xs text-gray-400">LIDM 2025 • Divisi 3 Video Digital Pendidikan</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 text-lg">
          <a href="#synopsis" className="hover:text-cyan-400 transition">Sinopsis</a>
          <a href="#trailer" className="hover:text-cyan-400 transition">Trailer</a>
          <a href="#team" className="hover:text-cyan-400 transition">Tim</a>
          <a href="#proposal" className="hover:text-cyan-400 transition">Proposal</a>
        </nav>
      </div>
    </header>
  );
}