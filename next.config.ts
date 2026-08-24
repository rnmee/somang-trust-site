import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/trust", destination: "/somang-trust.html" },
      { source: "/tn-2026-01", destination: "/tn-2026-01.html" },
    ];
  },
};

export default nextConfig;
