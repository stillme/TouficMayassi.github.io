/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  eslint: {
    // Ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
