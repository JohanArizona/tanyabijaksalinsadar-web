import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero({ openTrailer }: { openTrailer: () => void }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      >
        <source src="/trailer.mp4" type="video/mp4" />
      </video>

      {/* Glitch Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 animate-pulse" />

      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center px-8 max-w-5xl"
      >
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 gradient-text"
          animate={{ 
            textShadow: [
              "0 0 40px #00ffff",
              "0 0 80px #ff00ff",
              "0 0 40px #00ffff"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          TANYA BIJAK<br />SALIN SADAR
        </motion.h1>

        <motion.p 
          className="text-xl md:text-3xl mb-12 text-cyan-300 font-light typing-animation"
        >
          AI Bukan Contekan, Tapi Guru Pintar
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={openTrailer}
          className="px-12 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
        >
          ▶ TONTON TRAILER
        </motion.button>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          ↓ Scroll ↓
        </motion.div>
      </motion.div>
    </section>
  );
}