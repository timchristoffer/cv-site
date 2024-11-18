/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "", // Ensure this is correct if you are using a basePath
  output: "export",  // Enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable the Image Optimization API
  },
};

module.exports = nextConfig;