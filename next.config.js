/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/py/:path*", destination: "http://api:8000/:path*" },
    ];
  },
};
module.exports = nextConfig;
