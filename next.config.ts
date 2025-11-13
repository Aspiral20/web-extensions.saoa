import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export',
  distDir: "out",
  images: {
    unoptimized: true,
  },
  // reactStrictMode: true,
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/.' : '',
  // trailingSlash: true,
};

export default nextConfig;
