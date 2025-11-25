import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ImpactSection() {
  // Taruh semua foto sosialisasi kamu di public/impact/
  // Contoh: public/impact/1.jpg, 2.jpg, dst...
  const photos = [
    { src: "/impact/SMA 3.jpeg", title: "SMA Negeri 3 Malang", desc: "150 siswa kelas 12" },
    { src: "/impact/SMK 5.jpeg", title: "SMA Negeri 3 Malang", desc: "150 siswa kelas 12" },
    { src: "/impact/SMA 3.jpeg", title: "SMA Negeri 3 Malang", desc: "150 siswa kelas 12" },
    { src: "/impact/Cfd.jpg", title: "Universitas Brawijaya", desc: "Sharing Session FILKOM" },
    { src: "/impact/3.jpg", title: "Car Free Day Malang", desc: "500+ penonton & bagi stiker" },
    { src: "/impact/4.jpg", title: "SMK Telkom Malang", desc: "Workshop 80 siswa RPL" },
    { src: "/impact/5.jpg", title: "SMAK St. Albertus", desc: "Diskusi bersama guru BK" },
    { src: "/impact/6.jpg", title: "CFD Rampal Malang", desc: "Sosialisasi mingguan" },
    { src: "/impact/7.jpg", title: "SMA Negeri 1 Kepanjen", desc: "Kunjungan & pemutaran" },
    { src: "/impact/8.jpg", title: "Universitas Ma Chung", desc: "Kolaborasi antar kampus" },
    // Tambah sampai 12 kalau punya banyak foto!
  ];

  return (
    <section id="impact" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        {/* Judul Besar */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-6 text-[#FDCC35]"
        >
          DAMPAK NYATA
        </motion.h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto">
          Video “Tanya Bijak Salin Sadar” telah disosialisasikan langsung ke ribuan pelajar & mahasiswa
        </p>

        {/* Grid Foto Rapi 3 Kolom (Mobile: 1 kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                width={800}
                height={600}
                className="w-full h-96 object-cover transition-all duration-500 group-hover:scale-110"
              />
              {/* Overlay Kuning Emas Saat Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Teks di Bawah Foto */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-2xl font-bold text-[#FDCC35] mb-2">
                  {photo.title}
                </h3>
                <p className="text-gray-300 text-sm">{photo.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistik Besar di Bawah */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <p className="text-6xl md:text-8xl font-black text-[#FDCC35]">
            1.500+
          </p>
          <p className="text-2xl md:text-3xl text-gray-300 mt-4">
            Pelajar & Mahasiswa Tersosialisasi
          </p>
          <p className="text-lg text-gray-500 mt-6">
            Hingga November 2025 • Malang Raya & Sekitarnya
          </p>
        </motion.div>

        {/* Quote Penutup */}
        <div className="mt-20 max-w-4xl mx-auto">
          <blockquote className="text-2xl md:text-4xl italic text-gray-400 border-l-8 border-[#FDCC35] pl-10 py-6">
            “Kami tidak hanya membuat video.<br />
            Kami membawa pesan ini langsung ke masyarakat.”
          </blockquote>
          <p className="text-right text-[#FDCC35] mt-6 font-bold">
            — King Brawijaya Team
          </p>
        </div>
      </div>
    </section>
  );
}