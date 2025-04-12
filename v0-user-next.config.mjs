/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Replace "coming-soon" with your actual repository name when you create it
  basePath: process.env.NODE_ENV === "production" ? "/coming-soon" : "",
  trailingSlash: true,
};

export default nextConfig;
