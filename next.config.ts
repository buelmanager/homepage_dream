import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  outputFileTracingExcludes: {
    "/api/templates/[slug]/download": [
      "./public/templates/**/*",
      "./multi_clone_hompage/**/*",
    ],
    "/api/templates/[slug]/view": [
      "./public/templates/**/*",
      "./multi_clone_hompage/**/*",
    ],
    "/api/templates": [
      "./public/templates/**/*",
      "./multi_clone_hompage/**/*",
    ],
    "/api/admin/scan": [
      "./public/templates/**/*",
      "./multi_clone_hompage/**/*",
    ],
    "/api/admin/upload-thumbnail": [
      "./public/templates/**/*",
      "./multi_clone_hompage/**/*",
    ],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
