import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",              // 静的サイトとして出力（これが超重要！）
  distDir: "docs",               // 出力先を docs に指定
  basePath: "/Moxon",            // GitHub Pages のリポジトリ名
  assetPrefix: "/Moxon/",        // 静的ファイルのパスも調整
  images: { unoptimized: true }  // 画像最適化を無効化
};

export default nextConfig;