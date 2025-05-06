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
  title: 'Tryout TNI POLRI Online Terbaik & Terpercaya | Aparatur Coach',
  description:
    'Informasi lengkap dan persiapan sukses ujian TNI dan POLRI dengan tryout online Aparatur Coach. Latihan soal terupdate, analisis AI, dan persiapan karirmu sebagai abdi negara.',
  keywords: [
    'informasi tryout TNI',
    'informasi tryout POLRI',
    'informasi ujian masuk TNI',
    'informasi ujian masuk POLRI',
    'informasi persiapan TNI',
    'informasi persiapan POLRI',
    'informasi latihan soal TNI',
    'informasi latihan soal POLRI',
    'Aparatur Coach',
    'informasi tes TNI',
    'informasi tes POLRI',
    'informasi simulasi CAT TNI',
    'informasi simulasi CAT POLRI',
    'bimbingan belajar TNI',
    'bimbingan belajar POLRI',
    'lolos seleksi TNI',
    'lolos seleksi POLRI',
  ],
  authors: [{ name: 'Aparatur Coach' }],
  openGraph: {
    title: 'Informasi dan Tryout TNI POLRI Online Terbaik | Aparatur Coach',
    description:
      'Dapatkan informasi terbaru dan persiapkan diri untuk ujian TNI & POLRI dengan tryout online terpercaya dari Aparatur Coach.',
    url: 'https://aparaturcoach.com',
    siteName: 'Aparatur Coach',
    images: [
      {
        url: 'https://aparaturcoach.com/og.png', // Replace with your actual OG image URL
        width: 800,
        height: 600,
        alt: 'Tryout Online TNI POLRI Aparatur Coach',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Informasi & Tryout TNI POLRI Online Terbaik - Aparatur Coach',
    description:
      'Info lengkap & persiapan sukses ujian TNI POLRI dengan tryout online dan analisis AI. Gabung Aparatur Coach!',
    images: ['https://aparaturcoach.com/og.png'], // Replace with your actual OG image URL
    creator: '@AparaturCoach', // Replace with actual Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true, // Optional: If you don't want images indexed
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
    shortcut: '/shortcut-icon.png', // Typically same as favicon.ico
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/manifest.json', // Add manifest for PWA potential
  metadataBase: new URL('https://aparaturcoach.com'), // Set base URL for relative paths
  applicationName: 'Aparatur Coach',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Add theme color for browser UI theming
  themeColor: '#003049', // Navy Blue
  // Add category if applicable
  // category: 'Education',
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
              "name": "Aparatur Coach",
              "url": "https://aparaturcoach.com",
              "description": "${metadata.description}"
            }
          `}} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/> {/* Include the Header component here */}
        {children}
      </body>
    </html>
  );
}
