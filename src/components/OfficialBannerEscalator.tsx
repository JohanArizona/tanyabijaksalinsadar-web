import Image from 'next/image';

export default function OfficialBannerEscalator() {
  // Logo dengan ukuran khusus untuk yang bulat (1:1 ratio)
  const logos = [
    { src: "/logos/emas.webp", width: 110, height: 70 },
    { src: "/logos/puspres.webp", width: 110, height: 70 },
    { src: "/logos/belma.webp", width: 110, height: 70 },
    { src: "/logos/lidm.webp", width: 110, height: 70 },
    { src: "/logos/adibuana.webp", width: 110, height: 70 },
    { src: "/logos/tutwuri.webp", width: 60, height: 60 }, 
    { src: "/logos/ub.webp", width: 60, height: 60 }, 
    { src: "/logos/filkom.webp", width: 110, height: 70 },
    { src: "/logos/dikti.webp", width: 110, height: 70 }
  ];

  return (
    <div className="bg-white py-2 overflow-hidden">
      <div className="animate-marquee flex items-center gap-20">
        {[...logos, ...logos].map((logo, i) => (
          <Image 
            key={i} 
            src={logo.src} 
            alt="" 
            width={logo.width} 
            height={logo.height} 
            className="opacity-70 hover:opacity-100 transition" 
          />
        ))}
      </div>
    </div>
  );
}