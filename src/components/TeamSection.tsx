import Image from 'next/image';

export default function TeamSection() {
  const team = [
    { name: "Johan Arizona", role: "Ketua", img: "/team/johan5.webp" },
    { name: "Rarendra Adi Prabowo", role: "Anggota", img: "/team/rendra5.webp" },
    { name: "Rhesa Tsaqif Adyatma", role: "Anggota", img: "/team/rhesa5.webp" },
    { name: "Winaya Siti Hadz Zahra", role: "Anggota", img: "/team/winaya5.webp" },
  ];

  return (
    <section id="team" className="py-4 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Judul Resmi dari Proposal */}
        <h2 className="text-5xl md:text-7xl font-black mb-6 text-[#FDCC35]">
          KING BRAWIJAYA
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-16">
          Video Digital Pendidikan • LIDM 2025
        </p>

        {/* Grid 4 Foto Tim — Rapi Banget */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border-4 border-transparent hover:border-[#FDCC35] transition-all duration-500"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={400}
                height={500}
                className="w-full h-96 md:h-[520px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay Kuning Emas */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Nama + Role */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-2xl font-bold text-[#FDCC35]">{member.name}</p>
                <p className="text-sm text-gray-300 uppercase tracking-wider mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dosen Pendamping — Dipisah Elegan */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="border-t-2 border-[#FDCC35] pt-12">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">
              Dosen Pembimbing
            </p>
            <p className="text-3xl md:text-4xl font-black text-white">
              Dr. Ir. Wibisono Sukmo Wardhono, S.T., M.T.
            </p>
            <p className="text-gray-400 mt-3 text-lg">
              Fakultas Ilmu Komputer, Universitas Brawijaya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}