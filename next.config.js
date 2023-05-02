/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/pokeapi.co\/api\/v2\/.*/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'pokeapi',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60 // 24 hours
        }
      },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
    {
      urlPattern: /^https?.*/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'offline',
        expiration: {
          maxEntries: 200,
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
});

module.exports = withPWA({
  reactStrictMode: true,
  disable: process.env.NODE_ENV === 'development',
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  output: 'standalone',
});