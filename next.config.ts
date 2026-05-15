import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Old category-id query params → new slug routes.
    const queryRedirects = [
      ["andadores", "andadores"],
      ["banquetas", "banquetas-de-banho"],
      ["cadeiras-banho", "cadeiras-de-banho"],
      ["cadeiras-transf", "cadeiras-de-transferencia"],
      ["cadeiras-de-transporte", "cadeiras-de-transporte"],
      ["muletas", "muletas"],
      ["barras", "barras-de-apoio"],
    ];

    return [
      {
        source: "/lojas-revendedoras",
        destination: "/para-quem-vendemos",
        permanent: true,
      },
      ...queryRedirects.map(([oldId, newSlug]) => ({
        source: "/produtos",
        has: [{ type: "query" as const, key: "cat", value: oldId }],
        destination: `/produtos/${newSlug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
