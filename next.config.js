/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/aais-website/' : '',
  basePath: isProd ? '/aais-website' : '',
  output: 'export'
};

//export default nextConfig;
module.exports = nextConfig;
