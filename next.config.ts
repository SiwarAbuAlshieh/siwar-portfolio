import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // One 404 page for both language versions (each has its own root layout).
    globalNotFound: true,
  },
  images: {
    // Visually lossless quality for the portrait.
    qualities: [75, 88],
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
