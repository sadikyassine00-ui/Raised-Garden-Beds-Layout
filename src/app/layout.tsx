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
  metadataBase: new URL('https://terrabblueprints.com'),
  title: 'Raised Garden Bed Blueprint & Layout Bundle ($19) | Instant PDF Download',
  description:
    'Stop guessing garden spacing. High-yield raised bed blueprints, exact square-foot companion grids, and DIY build plans ready to print in seconds.',
  openGraph: {
    type: 'website',
    title: 'Raised Garden Bed Blueprint & Layout Bundle',
    description:
      'High-yield blueprints, companion planting grids, and lumber cut lists ready to print.',
    images: [
      {
        url: '/assets/blueprint-bundle-mockup.webp',
        width: 1200,
        height: 896,
        alt: 'Raised Garden Bed Blueprint and Layout Bundle Mockup',
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
      <body>{children}</body>
    </html>
  );
}
