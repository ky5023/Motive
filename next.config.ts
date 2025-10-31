import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ 静的HTMLとして出力する設定
  basePath: "/Moxon", // ✅ GitHubリポジトリ名
  assetPrefix: "/Moxon/", // ✅ 静的ファイルのパスも合わせる
  images: {
    unoptimized: true, // ✅ GitHub Pagesでの画像最適化をオフ
  },
};

export default nextConfig;