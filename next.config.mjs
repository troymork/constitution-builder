/** @type {import("next").NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? '/constitution-builder' : '',
  assetPrefix: isProd ? '/constitution-builder/' : '',
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true }
};
export default nextConfig;
export const outputFileTracingRoot = process.cwd();
