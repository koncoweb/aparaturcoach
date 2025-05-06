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
  metadataBase: new URL('https://spiriteducation.id'), // Assuming a new domain or keeping a generic one if not specified
  title: {
    default: 'Spirit Education - Tryout Online TNI & POLRI Terbaik',
    template: '%s | Spirit Education',
  },
  description:
    'Persiapan sukses ujian TNI dan POLRI dengan tryout online Spirit Education. Latihan soal terupdate, analisis AI, dan panduan karir untuk menjadi abdi negara.',
  keywords: [
    'tryout tni',
    'tryout polri',
    'ujian masuk tni',
    'ujian masuk polri',
    'persiapan tni',
    'persiapan polri',
    'latihan soal tni',
    'latihan soal polri',
    'Spirit Education',
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
  authors: [{ name: 'Spirit Education', url: 'https://spiriteducation.id' }],
  creator: 'Spirit Education',
  publisher: 'Spirit Education',
  openGraph: {
    title: 'Spirit Education - Tryout Online TNI & POLRI Terbaik',
    description:
      'Persiapkan diri Anda untuk sukses dalam ujian masuk TNI dan POLRI dengan platform tryout online interaktif dan analisis AI dari Spirit Education.',
    url: 'https://spiriteducation.id',
    siteName: 'Spirit Education',
    images: [
      {
        url: 'https://spiriteducation.id/og-image.png', // Ensure this image exists
        width: 1200,
        height: 630,
        alt: 'Spirit Education - Platform Tryout Online TNI & POLRI',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spirit Education - Tryout Online TNI & POLRI Terbaik',
    description:
      'Latihan soal TNI & POLRI, analisis performa AI, dan panduan karir. Sukses bersama Spirit Education!',
    images: ['https://spiriteducation.id/twitter-image.png'], // Ensure this image exists
    creator: '@spiriteducation', // Updated Twitter handle
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
  applicationName: 'Spirit Education',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  themeColor: '#003049', // Kept as is, can be changed if new brand color
  alternates: {
    canonical: 'https://spiriteducation.id',
    // Add other language versions if applicable
    // languages: {
    // 'en-US': 'https://spiriteducation.id/en',
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
        {/* Additional meta tags can be added here directly if needed, but `metadata` object is preferred */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_SITE_VERIFICATION_CODE" /> {/* Replace with your code */}
        {/* Add Schema.org markup if relevant */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Spirit Education",
              "url": "https://spiriteducation.id",
              "description": "Persiapan sukses ujian TNI dan POLRI dengan tryout online Spirit Education. Latihan soal terupdate, analisis AI, dan panduan karir untuk menjadi abdi negara."
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
