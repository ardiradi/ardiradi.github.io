import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ardiradi.github.io/'),
  title: 'Ardi Riyadi — Backend AI Engineer Intern',
  description: 'Backend AI engineer intern building inspectable APIs, document extraction prototypes, and ML learning systems with public implementation evidence.',
  alternates: {
    canonical: 'https://ardiradi.github.io/',
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    title: 'Ardi Riyadi — Backend AI Engineer Intern',
    description: 'Inspectable backend APIs, document extraction prototypes, and MLOps learning projects with public evidence.',
    url: 'https://ardiradi.github.io/',
    type: 'website',
    images: [{ url: 'https://ardiradi.github.io/social-preview.jpg', width: 1521, height: 762, alt: 'Evidence Finder in Ardi Riyadi backend AI portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ardi Riyadi — Backend AI Engineer Intern',
    description: 'Inspectable backend APIs, document extraction prototypes, and MLOps learning projects with public evidence.',
    images: [{ url: 'https://ardiradi.github.io/social-preview.jpg', alt: 'Evidence Finder in Ardi Riyadi backend AI portfolio' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
