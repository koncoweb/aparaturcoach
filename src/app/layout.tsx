import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aparatur Coach - Jalur Anda Menuju Aparatur Negara',
  description:
    'Aparatur Coach menyediakan tryout online komprehensif untuk ujian masuk TNI dan POLRI. Persiapkan diri dengan program yang disesuaikan dan analisis kinerja berbasis AI kami.',
  keywords: [
    'tryout',
    'TNI',
    'POLRI',
    'tryout online',
    'aparatur negara',
    'ujian masuk',
    'analisis kinerja',
    'Aparatur Coach',
  ],
  authors: [{name: 'Aparatur Coach'}],
  openGraph: {
    title: 'Aparatur Coach - Jalur Anda Menuju Aparatur Negara',
    description:
      'Tryout online komprehensif untuk ujian masuk TNI dan POLRI.',
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
    title: 'Aparatur Coach - Jalur Anda Menuju Aparatur Negara',
    description:
      'Tryout online komprehensif untuk ujian masuk TNI dan POLRI.',
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

