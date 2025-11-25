import Image from 'next/image';

export default function OfficialBannerEscalator() {
  const logos = [
    "/logos/tutwuri.webp", "/logos/indoemas.webp", "/logos/dikti.webp",
    "/logos/puspresnas.webp", "/logos/belmawa.webp", "/logos/adibuana.webp",
    "/logos/lidm.webp", "/logos/ub.webp"
  ];

  return (
    <div className="bg-white py-4 overflow-hidden">
      <div className="animate-marquee flex items-center gap-20">
        {[...logos, ...logos].map((src, i) => (
          <Image key={i} src={src} alt="" width={110} height={70} className="opacity-70 hover:opacity-100 transition" />
        ))}
      </div>
    </div>
  );
}