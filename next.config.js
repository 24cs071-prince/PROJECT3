/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
    tsconfigPath: './tsconfig.json',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
    optimizePackageImports: ["lucide-react"],
  },
  outputFileTracingRoot: __dirname,
  onDemandEntries: {
    maxInactiveAge: 25000,
    pagesBufferLength: 2,
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
