import { motion } from 'framer-motion';
import { useState } from 'react';

export default function InteractivePath() {
  const [choice, setChoice] = useState<'instan' | 'bijak' | null>(null);

  return (
    <section className="py-32 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-7xl font-bold mb-16 gradient-text"
        >
          PILIH JALANMU
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 10 }}
            onClick={() => setChoice('instan')}
            className="cursor-pointer group"
          >
            <div className="bg-red-900/40 backdrop-blur border border-red-500/50 rounded-3xl p-12 hover:border-red-400 transition-all">
              <h3 className="text-4xl font-bold text-red-400 mb-4">JALUR INSTAN</h3>
              <p className="text-lg">Copy-paste jawaban AI → Presentasi → GAGAL TOTAL</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotateY: -10 }}
            onClick={() => setChoice('bijak')}
            className="cursor-pointer group"
          >
            <div className="bg-cyan-900/40 backdrop-blur border border-cyan-500/50 rounded-3xl p-12 hover:border-cyan-400 transition-all">
              <h3 className="text-4xl font-bold text-cyan-400 mb-4">ALUR BIJAK</h3>
              <p className="text-lg">Tanya AI → Pelajari → Verifikasi → PRESENTASI SUKSES</p>
            </div>
          </motion.div>
        </div>

        {choice && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 text-3xl font-bold"
          >
            {choice === 'instan' ? "Kamu memilih jalan Andra yang instan... dan rugi." : "Kamu memilih jalan Bima — literasi adalah kekuatan sejati!"}
          </motion.div>
        )}
      </div>
    </section>
  );
}