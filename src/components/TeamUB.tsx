// src/components/TeamUB.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  { name: "Johan Arizona", prodi: "Teknologi Informasi", role: "Ketua", img: "/team/johan1.jpg" },
  { name: "Rarendra Adi Prabowo", prodi: "Teknologi Informasi", role: "Anggota", img: "/team/rarendra1.jpg" },
  { name: "Rhesa Tsaqif Adyatma", prodi: "Teknik Informatika", role: "Anggota", img: "/team/rhesa1.jpg" },
  { name: "Winaya Siti Hadz Zahra", prodi: "Pendidikan Teknologi Informasi", role: "Anggota", img: "/team/winaya1.jpg" },
];

export default function TeamUB() {
  return (
    <section id="team" className="py-32 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-6xl font-bold text-center mb-20 gradient-text"
        >
          TIM KING BRAWIJAYA
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="bg-white/5 backdrop-blur border border-cyan-500/30 rounded-2xl overflow-hidden"
            >
              <Image src={member.img} alt={member.name} width={400} height={400} className="w-full h-64 object-cover object-[center_30%]" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-cyan-400 text-sm">{member.role}</p>
                <p className="text-gray-500 text-xs">{member.prodi}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-xl mb-4">Dosen Pendamping</p>
          <p className="text-3xl font-bold text-cyan-400">
            Dr. Ir. Wibisono Sukmo Wardhono, S.T., M.T.
          </p>
        </div>
      </div>
    </section>
  );
}