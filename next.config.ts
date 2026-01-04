import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  compress: false,
  poweredByHeader: true,

  images: {
    formats: ["image/webp", "image/avif"],
  },

  trailingSlash: false,
};

export default nextConfig;
