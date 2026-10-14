import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/terms-of-service',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/refund-policy',
        destination: '/refund',
        permanent: true,
      },
      {
        source: '/refunds',
        destination: '/refund',
        permanent: true,
      },
      {
        source: '/tos',
        destination: '/terms',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
