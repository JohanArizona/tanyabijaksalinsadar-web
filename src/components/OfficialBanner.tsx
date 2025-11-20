// src/components/OfficialBanner.tsx
import Image from 'next/image';

export default function OfficialBanner() {
  return (
    <div className="bg-gray-900/95 backdrop-blur-sm py-6 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <Image src="/logos/kemendikbud.png" alt="Kemendikbud" width={120} height={80} />
          <Image src="/logos/indonesia-emas.png" alt="Indonesia Emas 2045" width={100} height={80} />
          <Image src="/logos/dikti.png" alt="DIKTI" width={140} height={80} />
          <Image src="/logos/puspresnas.png" alt="Puspresnas" width={180} height={80} />
          <Image src="/logos/belmawa.png" alt="Belmawa" width={100} height={80} />
          <Image src="/logos/adibuana.png" alt="Adi Buana" width={80} height={80} />
          <Image src="/logos/lidm-2025.png" alt="LIDM 2025" width={100} height={80} className="animate-pulse" />
          <Image src="/logos/ub.png" alt="Universitas Brawijaya" width={80} height={80} />
        </div>
      </div>
    </div>
  );
}