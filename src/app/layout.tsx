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
        alt: 'Tryout Online TNI POLRI Aparatur Coach',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>{/* Additional meta tags can be added here directly if needed,
            but `metadata` object is preferred */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_SITE_VERIFICATION_CODE" /> {/* Replace with your code */}
        {/* Add Schema.org markup if relevant */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Aparatur Coach",
              "url": "https://aparaturcoach.com",
              "description": "${metadata.description}"
            }
          `}
        </script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/> {/* Include the Header component here */}
        {children}
      </body>
    </html>
  );
}
