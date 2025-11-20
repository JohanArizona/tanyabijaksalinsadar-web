// src/app/layout.tsx
import './globals.css';
import CursorTrail from '@/components/CursorTrail';

// ✅ Tetap menjadi Server Component agar metadata berfungsi
export const metadata = {
  title: 'Tanya Bijak Salin Sadar | LIDM 2025 King Brawijaya',
  description: 'Video edukasi penggunaan AI yang bijak - Juara Harapan LIDM 2025',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // ❌ HAPUS useEffect dari sini.
  // Biarkan layout ini bersih sebagai Server Component.

  return (
    <html lang="id">
      <body>
        {/* Komponen ini akan jalan di client side */}
        <CursorTrail /> 
        {children}
      </body>
    </html>
  );
}