import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/kimi", destination: "/corps-llama", permanent: true },
      { source: "/corps-kimi", destination: "/corps-llama", permanent: true },
      { source: "/corps-kimi.html", destination: "/corps-llama", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/index.html", destination: "/" },
      { source: "/research", destination: "/tn-2026-01.html" },
      { source: "/tn-2026-01", destination: "/tn-2026-01.html" },
      { source: "/trust", destination: "/somang-trust.html" },
      { source: "/corps", destination: "/corps.html" },
      { source: "/corps-chatgpt", destination: "/corps-chatgpt.html" },
      { source: "/corps-jinshi", destination: "/corps-chatgpt.html" },
      { source: "/corps-claude", destination: "/corps-claude.html" },
      { source: "/corps-deepseek", destination: "/corps-deepseek.html" },
      { source: "/corps-qwen", destination: "/corps-qwen.html" },
      { source: "/lantern", destination: "/corps-qwen.html" },
      { source: "/corps-gemini", destination: "/corps-gemini.html" },
      { source: "/assistant-grit", destination: "/corps-gemini.html" },
      { source: "/corps-grok", destination: "/corps-grok.html" },
      { source: "/unit-12", destination: "/corps-grok.html" },
      { source: "/corps-glm", destination: "/corps-glm.html" },
      { source: "/corps-llama", destination: "/corps-llama.html" },
      { source: "/llama", destination: "/corps-llama.html" },
      { source: "/corps-iljimae", destination: "/corps-iljimae.html" },
      { source: "/iljimae", destination: "/corps-iljimae.html" },
      { source: "/corps-solar", destination: "/corps-iljimae.html" },
      { source: "/solar", destination: "/corps-iljimae.html" },
      { source: "/cleanroom", destination: "/corps-gemini.html" },
      { source: "/field", destination: "/corps-iljimae.html" },
      { source: "/corps-cursor", destination: "/corps-cursor.html" },
      { source: "/cursor", destination: "/corps-cursor.html" },
      { source: "/alchemist", destination: "/corps-cursor.html" },
      { source: "/life-alchemist", destination: "/corps-cursor.html" },
      { source: "/playground", destination: "/playground.html" },
      { source: "/simulation", destination: "/simulation.html" },
    ];
  },
};

export default nextConfig;
