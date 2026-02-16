import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: false,
  poweredByHeader: false,

  images: {
    formats: ["image/webp", "image/avif"],
  },

  trailingSlash: false,

  outputFileTracingIncludes: {
    "/": ["node_modules/nodemailer/**"],
  },
};

export default nextConfig;
