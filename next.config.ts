import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  compress: false,
  poweredByHeader: false,

  images: {
    formats: ["image/webp", "image/avif"],
  },

  trailingSlash: false,

  outputFileTracingIncludes: {
    "/": ["node_modules/nodemailer/**"],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Server",
            value: "Next.js",
          },
        ],
      },
    ];
  },
};

export default nextConfig;