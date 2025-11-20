// src/components/Gallery.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

const photos = [
  "/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg",
  "/gallery/4.jpg", "/gallery/5.jpg", "/gallery/6.jpg",
  "/gallery/7.jpg", "/gallery/8.jpg", "/gallery/9.jpg",
];

export default function Gallery() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-black text-center mb-20 gradient-text"
        >
          BEHIND THE SCENES
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer group"
            >
              <Image 
                src={src} 
                alt={`BTS ${i + 1}`} 
                width={600} 
                height={800} 
                className="w-full h-full object-cover transition group-hover:scale-110 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition">
                <p className="text-xl font-bold">Day {i + 1}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl text-cyan-400 font-bold">
            King Brawijaya • Malang 2025
          </p>
        </div>
      </div>
    </section>
  );
}