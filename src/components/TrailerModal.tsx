'use client';
export default function TrailerModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-6" onClick={onClose}>
      <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-12 right-0 text-5xl text-white hover:text-[#FDCC35]">×</button>
        <div className="aspect-video bg-black rounded-2xl overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/JP09I9o7p_k?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}