/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "htmldemo.net",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
