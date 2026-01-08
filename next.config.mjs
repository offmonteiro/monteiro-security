/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
   basePath: '/monteiro-security',
   assetPrefix: '/monteiro-security',
  trailingSlash: true,
}

export default nextConfig
