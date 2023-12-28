import Footer from '@/components/footer';
import Header from '@/components/header';
import '@/styles/globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home | Sun Co.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx('antialiased scroll-smooth min-h-screen', inter.className)}>
        <Header />
        <main className="px-3 sm:px-10 md:px-16 lg:px-20 xl:px-28 min-h-[calc(100vh-89px-149px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
