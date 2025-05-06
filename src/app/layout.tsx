import type { Metadata } from 'next';
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono'; // Removing this line

import './globals.css';
import Header from '@/components/Header'; // Import Header component

export const metadata: Metadata = {
  metadataBase: new URL('https://spiriteducation.id'),
  title: {
    default: 'Tryout TNI POLRI Online - Spirit Education',
    template: '%s | Spirit Education',
  },
  description:
    'Persiapan sukses ujian TNI dan POLRI dengan tryout online Spirit Education. Latihan soal terupdate, analisis AI, dan panduan karirmu sebagai abdi negara.',
  authors: [{ name: 'Spirit Education', url: 'https://spiriteducation.id' }],
  creator: 'Spirit Education',
  publisher: 'Spirit Education',
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
    'bimbel tni',
    'bimbel polri',
    'lolos seleksi tni',
    'lolos seleksi polri',
    'tes masuk polisi',
    'tes masuk tentara',
    'informasi tes tni',
    'informasi tes polri',
  ],
  openGraph: {
    title: 'Tryout TNI POLRI Online - Spirit Education',
    description:
      'Persiapan sukses ujian TNI dan POLRI dengan tryout online. Latihan soal, analisis AI, dan persiapan karirmu sebagai abdi negara.',
    url: 'https://spiriteducation.id',
    siteName: 'Spirit Education',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: 'https://spiriteducation.id/og.png', // Pastikan gambar ini ada
        width: 800,
        height: 600,
        alt: 'Tryout Online TNI POLRI oleh Spirit Education',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tryout TNI POLRI Online - Spirit Education',
    description:
      'Persiapan sukses ujian TNI dan POLRI dengan tryout online. Latihan soal, analisis AI, dan persiapan karirmu sebagai abdi negara.',
    creator: '@spiriteducation', // Ganti dengan akun Twitter Anda jika ada
    images: ['https://spiriteducation.id/og.png'], // Pastikan gambar ini ada
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
        { url: '/favicon.ico', type: 'image/x-icon', sizes: '16x16' },
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
  themeColor: '#003049',
  alternates: {
    canonical: 'https://spiriteducation.id',
    // Add other language versions if applicable
    // languages: {
    // 'en-US': 'https://spiriteducation.id/en',
    // },
  },
  // Add other relevant meta tags here
  other: {
    'google-site-verification': 'YOUR_GOOGLE_SITE_VERIFICATION_CODE', // Replace with your code
    // Add more as needed
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
        <meta name="google-site-verification" content="YOUR_GOOGLE_SITE_VERIFICATION_CODE" /> {/* Replace with your code */}
        {/* Add Schema.org markup if relevant */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Spirit Education",
              "url": "https://spiriteducation.id",
              "description": "Persiapan sukses ujian TNI dan POLRI dengan tryout online Spirit Education. Latihan soal terupdate, analisis AI, dan panduan karir untuk menjadi abdi negara.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://spiriteducation.id/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
       </head>
      <body className={` antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="py-8 bg-gray-800 text-gray-300 text-center text-sm">
          <div className="container mx-auto">
            <p>&copy; {new Date().getFullYear()} Spirit Education. Hak cipta dilindungi.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
