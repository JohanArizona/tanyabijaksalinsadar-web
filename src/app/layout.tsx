import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Tanya Bijak Salin Sadar - LIDM 2025',
  description: 'Video Digital Pendidikan - Universitas Brawijaya',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}