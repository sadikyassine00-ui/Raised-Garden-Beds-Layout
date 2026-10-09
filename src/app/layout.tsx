import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#123329',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://raisedgardenbedslayout.com'),
  title: 'Raised Garden Beds Layout & Blueprint Bundle ($19) | Instant PDF Download',
  description:
    'Stop guessing garden spacing. High-yield modular raised bed layouts, exact square-foot companion grids, and DIY lumber cut lists ready to print in seconds.',
  openGraph: {
    type: 'website',
    url: 'https://raisedgardenbedslayout.com',
    siteName: 'Raised Garden Beds Layout',
    title: 'Raised Garden Beds Layout & Blueprint Bundle ($19)',
    description:
      'High-yield modular bed layouts, square-foot companion grids, and instant DIY lumber cut lists ready to print.',
    images: [
      {
        url: '/assets/blueprint-closeup-mockup.webp',
        width: 1200,
        height: 900,
        alt: 'Raised Garden Beds Layout Blueprint Bundle Close-up Mockup',
      },
    ],
  },
  other: {
    'product:price:amount': '19.00',
    'product:price:currency': 'USD',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${robotoMono.variable}`}>
      <body className="bg-[#FBFBFA] text-[#1A1A1A] antialiased selection:bg-[#1B4D3E] selection:text-white pb-20 md:pb-0">
        {children}
      </body>
    </html>
  );
}
