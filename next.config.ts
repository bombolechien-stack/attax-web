import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "attax.app",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
