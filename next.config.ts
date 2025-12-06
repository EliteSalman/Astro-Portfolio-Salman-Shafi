import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Basic optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  
  // Disable trailing slash
  trailingSlash: false,
};

export default nextConfig;
