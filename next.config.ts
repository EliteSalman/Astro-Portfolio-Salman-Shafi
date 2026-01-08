import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  compress: false,
  poweredByHeader: true,

  images: {
    formats: ["image/webp", "image/avif"],
  },

  trailingSlash: false,

  experimental: {
    outputFileTracingIncludes: {
      "/": ["node_modules/nodemailer/**"],
    },
  },
};

export default nextConfig;
