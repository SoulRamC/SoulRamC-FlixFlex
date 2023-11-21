/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },
  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
  },
};

module.exports = nextConfig;
