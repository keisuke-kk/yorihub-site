import type { NextConfig } from "next";

// 公開先パスは .env.production の NEXT_PUBLIC_BASE_PATH で管理する
// GitHub Pages: NEXT_PUBLIC_BASE_PATH=/yorihub-site  (.env.production に記載済み)
// 独自ドメイン yorihub.jp への移行時: .env.production を NEXT_PUBLIC_BASE_PATH= に変更するだけでよい
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
