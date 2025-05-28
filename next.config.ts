import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/myth.fun",
  assetPrefix: "./",
  trailingSlash: true,
};

export default nextConfig;