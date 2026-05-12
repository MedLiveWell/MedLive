import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/lojas-revendedoras",
        destination: "/para-quem-vendemos",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
