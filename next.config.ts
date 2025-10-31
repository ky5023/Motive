import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // 静的サイト出力
  basePath: isProd ? "/Moxon" : "", // ← GitHubリポジトリ名を反映
  assetPrefix: isProd ? "/Moxon/" : "",
  images: { unoptimized: true }, // GitHub Pagesでは必須
};

export default nextConfig;