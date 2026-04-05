import type { NextConfig } from "next";

// GitHub Pages: BASE_PATH=/yorihub-site npm run build:gh
// 独自ドメイン (yorihub.jp): BASE_PATH は不要（空のまま）
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
