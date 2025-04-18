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
  title: 'Aparatur Coach - Your Path to National Apparatus',
  description:
    'Aparatur Coach provides comprehensive online tryouts for TNI and POLRI entrance exams. Prepare with our tailored programs and AI-powered performance analysis.',
  keywords: [
    'tryout',
    'TNI',
    'POLRI',
    'online tryout',
    'state apparatus',
    'entrance exam',
    'performance analysis',
    'Aparatur Coach',
  ],
  authors: [{name: 'Aparatur Coach'}],
  openGraph: {
    title: 'Aparatur Coach - Your Path to National Apparatus',
    description:
      'Comprehensive online tryouts for TNI and POLRI entrance exams.',
    url: 'https://aparaturcoach.com',
    siteName: 'Aparatur Coach',
    images: [
      {
        url: 'https://aparaturcoach.com/og.png', // Replace with your actual OG image
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aparatur Coach - Your Path to National Apparatus',
    description:
      'Comprehensive online tryouts for TNI and POLRI entrance exams.',
    images: ['https://aparaturcoach.com/og.png'], // Replace with your actual OG image
    creator: '@AparaturCoach',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
