/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["dnw4v7kkt4ziq.cloudfront.net"],
  },
};

module.exports = nextConfig;
