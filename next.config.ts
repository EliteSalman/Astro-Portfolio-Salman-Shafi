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

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.:domain*",
          },
        ],
        destination: "https://:domain*/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
