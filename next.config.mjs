/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/constitution-builder',
  trailingSlash: true,
};
export default nextConfig;
export const outputFileTracingRoot = process.cwd();
