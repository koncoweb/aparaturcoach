import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
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
  title: 'Tryout TNI POLRI Online - Aparatur Coach',
  description:
    'Persiapan sukses ujian TNI dan POLRI dengan tryout online Aparatur Coach. Latihan soal terupdate, analisis AI, dan persiapan karirmu sebagai abdi negara.',
  keywords: [
    'tryout TNI',
    'tryout POLRI',
    'ujian masuk TNI',
    'ujian masuk POLRI',
    'persiapan TNI',
    'persiapan POLRI',
    'latihan soal TNI',
    'latihan soal POLRI',
    'Aparatur Coach',
    'tes TNI',
    'tes POLRI',
    'simulasi CAT TNI',
    'simulasi CAT POLRI',
  ],
  authors: [{name: 'Aparatur Coach'}],
  openGraph: {
    title: 'Tryout TNI POLRI Online - Aparatur Coach',
    description:
      'Persiapan sukses ujian TNI dan POLRI dengan tryout online. Latihan soal, analisis AI, dan persiapan karirmu sebagai abdi negara.',
    url: 'https://aparaturcoach.com',
    siteName: 'Aparatur Coach',
    images: [
      {
        url: 'https://aparaturcoach.com/og.png', // Replace with your actual OG image
        width: 800,
        height: 600,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tryout TNI POLRI Online - Aparatur Coach',
    description:
      'Persiapan sukses ujian TNI dan POLRI dengan tryout online. Latihan soal, analisis AI, dan persiapan karirmu sebagai abdi negara.',
    images: ['https://aparaturcoach.com/og.png'], // Replace with your actual OG image
    creator: '@AparaturCoach',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
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
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/> {/* Include the Header component here */}
        {children}
      </body>
    </html>
  );
}

