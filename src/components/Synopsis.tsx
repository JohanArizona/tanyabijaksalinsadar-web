// src/components/Synopsis.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Synopsis() {
  return (
    <section id="synopsis" className="py-32 bg-gradient-to-b from-black via-purple-900/30 to-black">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black text-center mb-20 gradient-text"
        >
          SINOPSIS
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-4xl font-bold mb-8 text-cyan-400">
              Andra: Antara Instan dan Literasi
            </h3>
            <div className="text-lg leading-relaxed space-y-6 text-gray-300">
              <p>
                Di era digital, <span className="text-red-400 font-bold">Andra</span> dan <span className="text-cyan-400 font-bold">Bima</span> adalah dua mahasiswa yang menghadapi tugas presentasi yang sama. 
                Namun, mereka memilih jalan yang sangat berbeda dalam menggunakan Artificial Intelligence (AI).
              </p>
              <p>
                Andra memilih <span className="text-red-400">jalur instan</span>: copy-paste jawaban AI tanpa memahami materi. 
                Hasilnya? Presentasi kacau, malu di depan dosen, dan nilai jeblok.
              </p>
              <p>
                Sementara Bima memilih <span className="text-cyan-400">jalur bijak</span>: menggunakan AI sebagai <strong>mitra belajar</strong> — bertanya, memahami, memverifikasi, lalu menyampaikan dengan percaya diri.
              </p>
              <p className="text-2xl font-bold text-white mt-8">
                Pesan kami: <br />
                <span className="gradient-text text-4xl">Tanya Bijak, Salin Sadar</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <Image 
              src="/poster.png" 
              alt="Poster Tanya Bijak Salin Sadar" 
              width={800} 
              height={1200} 
              className="rounded-3xl shadow-2xl shadow-cyan-500/50 border-4 border-cyan-500/30"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-left">
              <p className="text-5xl font-black text-white">LIDM 2025</p>
              <p className="text-xl text-cyan-400">Divisi 3 • Video Digital Pendidikan</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}