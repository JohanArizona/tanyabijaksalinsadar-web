import { motion } from 'framer-motion';

export default function Hero({ openTrailer }: { openTrailer: () => void }) {
  return (
    <section className="mt-12 relative h-screen flex flex-col items-center justify-center text-center px-6 bg-black overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videoheroless.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/10 to-black/90" />
      <div className="absolute inset-0 bg-black/40" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2 }} 
        className="relative z-10 max-w-5xl"
      >
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          TANYA BIJAK<br />
          <span className="text-[#FDCC35]">SALIN SADAR</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">Video Digital Pendidikan</p>
        <button 
          onClick={openTrailer} 
          className="px-12 py-5 bg-[#FDCC35] text-black font-bold text-xl rounded-full hover:bg-[#BE8800] hover:text-white transition-all shadow-2xl"
        >
          TONTON SEKARANG!
        </button>
        <p className="mt-10 text-gray-400">Universitas Brawijaya • Malang 2025</p>
      </motion.div>
    </section>
  );
}