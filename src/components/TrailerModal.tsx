// src/components/TrailerModal.tsx
'use client';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrailerModal({ isOpen, onClose }: TrailerModalProps) {
  // Biar bisa klik ESC buat tutup
  useEffect(() => {
    const handleESC = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleESC);
    return () => window.removeEventListener('keydown', handleESC);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm">
      {/* Overlay klik untuk tutup */}
      <div 
        className="absolute inset-0" 
        onClick={onClose}
      />
      
      <div className="relative max-w-4xl w-full mx-4">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-cyan-400 text-4xl transition z-10"
        >
          <X size={40} />
        </button>

        {/* Video YouTube Responsive */}
        <div className="relative pt-[56.25%] bg-black rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/JP09I9o7p_k?autoplay=1&rel=0"
            title="Trailer Tanya Bijak Salin Sadar"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="text-center mt-6">
          <h3 className="text-3xl font-bold text-white">Tanya Bijak Salin Sadar</h3>
          <p className="text-cyan-400 text-lg">Official Trailer • LIDM 2025</p>
        </div>
      </div>
    </div>
  );
}