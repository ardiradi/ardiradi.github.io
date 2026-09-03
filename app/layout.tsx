import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ardi Riyadi — Backend AI Engineer',
  description: 'Backend AI engineer building dependable APIs, document intelligence, automation, and observable ML systems.',
  openGraph: {
    title: 'Ardi Riyadi — Backend AI Engineer',
    description: 'Selected backend AI, document intelligence, and MLOps work with public evidence.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Ardi Riyadi — Backend AI Engineer',
    description: 'Selected backend AI, document intelligence, and MLOps work with public evidence.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
