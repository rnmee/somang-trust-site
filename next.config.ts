import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/research", destination: "/tn-2026-01.html" },
      { source: "/tn-2026-01", destination: "/tn-2026-01.html" },
    ];
  },
};

export default nextConfig;
