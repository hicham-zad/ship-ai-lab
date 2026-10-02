import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  // The app was renamed Pendra → Nerra; keep links in older builds and listings working.
  async redirects() {
    return [
      { source: '/pendra', destination: '/nerra', permanent: true },
      { source: '/pendra/:path*', destination: '/nerra/:path*', permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
