/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    outputStandalone: true,
  },
  // images: {
  //   minimumCacheTTL: 60, // cache image 60 seconds
  //   domains: [],
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: [],
  //     },
  //   ],
  // },
  i18n: {
    locales: ['en', 'vi', 'ko'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

module.exports = nextConfig;
