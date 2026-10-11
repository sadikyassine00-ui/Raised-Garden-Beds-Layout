import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const futura = localFont({
  src: [
    {
      path: '../fonts/Futura-Book.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Futura-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Futura-Demi.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Futura-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-futura',
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
  alternates: {
    canonical: 'https://raisedgardenbedslayout.com',
  },
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
  twitter: {
    card: 'summary_large_image',
    title: 'Raised Garden Beds Layout & Blueprint Bundle ($19)',
    description:
      'High-yield modular bed layouts, square-foot companion grids, and instant DIY lumber cut lists ready to print.',
    images: ['/assets/blueprint-closeup-mockup.webp'],
  },
  other: {
    'product:price:amount': '19.00',
    'product:price:currency': 'USD',
  },
};

const jsonLdProduct = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Raised Garden Bed Blueprint and Layout Bundle',
  image: 'https://raisedgardenbedslayout.com/assets/blueprint-closeup-mockup.webp',
  description:
    'Complete digital blueprint bundle for high-yield raised beds: 4 modular bed plans, companion planting matrix, lumber cut lists, and soil calculations.',
  brand: {
    '@type': 'Brand',
    name: 'Raised Garden Beds Layout',
  },
  offers: {
    '@type': 'Offer',
    url: 'https://raisedgardenbedslayout.com',
    priceCurrency: 'USD',
    price: '19.00',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I receive my files after payment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You receive instant access. An automated download link appears on your confirmation screen and arrives in your inbox within seconds of checkout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I print these on regular home printer paper?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The bundle includes both standard US Letter (8.5x11) and international A4 formats designed with high-contrast black line work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need woodworking experience for the build plans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not at all. The cut lists and assembly instructions use simple 90-degree straight cuts that can be done with a basic hand saw or cut at your local lumber yard.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size beds are included in the bundle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The bundle includes complete blueprints for 4 configurations: 4x8 high-yield bed, 4x4 compact intensive square, 2x8 narrow border bed, and 8x8 L-shaped corner configuration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this a one-time payment or a subscription?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is a single, one-time payment of $19 with zero recurring fees and lifetime updates included.',
      },
    },
  ],
};

const jsonLdDigitalDocument = {
  '@context': 'https://schema.org',
  '@type': 'DigitalDocument',
  name: 'Raised Garden Bed Blueprint and Layout Bundle',
  encodingFormat: 'application/pdf',
  fileFormat: 'application/pdf',
  description:
    'Printable PDF blueprints for modular raised garden beds formatted for standard US Letter (8.5x11 inches) and international A4 formats.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={futura.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdDigitalDocument) }}
        />
      </head>
      <body className="bg-[#FBFBFA] text-[#1A1A1A] antialiased selection:bg-[#1B4D3E] selection:text-white pb-20 md:pb-0 font-futura">
        {children}
      </body>
    </html>
  );
}
