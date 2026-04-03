import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // 静的エクスポートを有効化
  trailingSlash: true,   // GitHub Pages との URL 解決を安定させる
};

export default nextConfig;
