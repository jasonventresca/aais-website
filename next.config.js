/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  //basePath: '/aais-website',
  reactStrictMode: true,
  images: {
    //unoptimized: true, // Disable default image optimization
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
  //assetPrefix: isProd ? '/aais-website/' : '',
  //basePath: isProd ? '/aais-website' : '',
};

export default nextConfig;
//module.exports = nextConfig;
