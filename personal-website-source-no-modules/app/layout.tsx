import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/app/globals.css';
import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const openSans = Open_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Toufic Mayassi, PhD | Immunologist Transitioning to Life Sciences Consulting & Equity Research',
  description: 'Personal website of Toufic Mayassi, PhD immunologist with expertise in γδ T cells and celiac disease, transitioning to life sciences consulting and equity research.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
