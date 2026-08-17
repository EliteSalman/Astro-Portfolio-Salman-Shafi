import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "standalone",
  compress: false,
  poweredByHeader: false,
  allowedDevOrigins: ["10.8.0.1"],
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
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
