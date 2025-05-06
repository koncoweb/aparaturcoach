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
    'tryout TNI',
    'tryout POLRI',
    'ujian masuk TNI',
    'ujian masuk POLRI',
    'persiapan TNI',
    'persiapan POLRI',
    'latihan soal TNI',
    'latihan soal POLRI',
    'Spirit Education',
    'tes TNI',
    'tes POLRI',
    'simulasi CAT TNI',
    'simulasi CAT POLRI',
    'bimbel TNI',
    'bimbel POLRI',
    'lolos seleksi TNI',
    'lolos seleksi POLRI',
    'tes masuk polisi',
    'tes masuk tentara',
    'informasi tes TNI',
    'informasi tes POLRI',
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
    creator: '@spiriteducation',
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
  themeColor: '#1A2E40', // Example theme color, adjust as needed
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
        <meta name="google-site-verification" content="YOUR_GOOGLE_SITE_VERIFICATION_CODE" /> {/* Replace with your code */}
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
