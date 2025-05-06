import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header'; // Import Header component

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aparaturcoach.com'),
  title: {
    default: 'Aparatur Coach - Tryout Online TNI & POLRI Terbaik',
    template: '%s | Aparatur Coach',
  },
  description:
    'Persiapan sukses ujian TNI dan POLRI dengan tryout online Aparatur Coach. Latihan soal terupdate, analisis AI, dan panduan karir untuk menjadi abdi negara.',
  keywords: [
    'tryout tni',
    'tryout polri',
    'ujian masuk tni',
    'ujian masuk polri',
    'persiapan tni',
    'persiapan polri',
    'latihan soal tni',
    'latihan soal polri',
    'aparatur coach',
    'tes tni',
    'tes polri',
    'simulasi cat tni',
    'simulasi cat polri',
    'bimbingan belajar tni',
    'bimbingan belajar polri',
    'lolos seleksi tni',
    'lolos seleksi polri',
    'tes masuk polisi',
    'tes masuk tentara',
  ],
  authors: [{ name: 'Aparatur Coach', url: 'https://aparaturcoach.com' }],
  creator: 'Aparatur Coach',
  publisher: 'Aparatur Coach',
  openGraph: {
    title: 'Aparatur Coach - Tryout Online TNI & POLRI Terbaik',
    description:
      'Persiapkan diri Anda untuk sukses dalam ujian masuk TNI dan POLRI dengan platform tryout online interaktif dan analisis AI dari Aparatur Coach.',
    url: 'https://aparaturcoach.com',
    siteName: 'Aparatur Coach',
    images: [
      {
        url: 'https://aparaturcoach.com/og-image.png', // Ensure this image exists
        width: 1200,
        height: 630,
        alt: 'Aparatur Coach - Platform Tryout Online TNI & POLRI',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aparatur Coach - Tryout Online TNI & POLRI Terbaik',
    description:
      'Latihan soal TNI & POLRI, analisis performa AI, dan panduan karir. Sukses bersama Aparatur Coach!',
    images: ['https://aparaturcoach.com/twitter-image.png'], // Ensure this image exists
    creator: '@aparaturcoach', // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  applicationName: 'Aparatur Coach',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  themeColor: '#003049',
  alternates: {
    canonical: 'https://aparaturcoach.com',
    // Add other language versions if applicable
    // languages: {
    //   'en-US': 'https://aparaturcoach.com/en',
    // },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="google-site-verification" content="YOUR_GOOGLE_SITE_VERIFICATION_CODE" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Aparatur Coach",
              "url": "https://aparaturcoach.com",
              "description": "Persiapan sukses ujian TNI dan POLRI dengan tryout online Aparatur Coach. Latihan soal terupdate, analisis AI, dan panduan karir untuk menjadi abdi negara."
            }
          `}} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
    