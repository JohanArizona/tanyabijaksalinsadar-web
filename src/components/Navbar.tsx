'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center font-black text-black">UB</div>
          <div>
            <h1 className="text-xl font-bold">King Brawijaya</h1>
            <p className="text-xs text-gray-400">LIDM 2025 • Divisi 3</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#synopsis" className="hover:text-[#FDCC35] transition">Sinopsis</a>
          <a href="#team" className="hover:text-[#FDCC35] transition">Tim</a>
          <a href="#pesan" className="hover:text-[#FDCC35] transition">Pesan Moral</a>
          <a href="#impact" className="hover:text-[#FDCC35] transition">Dampak</a>
        </div>
      </div>
    </nav>
  );
}