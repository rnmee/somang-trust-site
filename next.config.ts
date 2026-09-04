import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/index.html", destination: "/" },
      { source: "/research", destination: "/tn-2026-01.html" },
      { source: "/tn-2026-01", destination: "/tn-2026-01.html" },
      { source: "/trust", destination: "/somang-trust.html" },
      { source: "/corps", destination: "/corps.html" },
      { source: "/corps-claude", destination: "/corps-claude.html" },
      { source: "/corps-deepseek", destination: "/corps-deepseek.html" },
      { source: "/corps-qwen", destination: "/corps-qwen.html" },
      { source: "/lantern", destination: "/corps-qwen.html" },
      { source: "/corps-gemini", destination: "/corps-gemini.html" },
      { source: "/cleanroom", destination: "/corps-gemini.html" },
      { source: "/playground", destination: "/playground.html" },
      { source: "/simulation", destination: "/simulation.html" },
    ];
  },
};

export default nextConfig;
