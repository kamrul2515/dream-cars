/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'webmasterdriver.net',
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com', // Unsplash এর সব সাব-ডোমেন হ্যান্ডেল করবে
      },
    ],
  },
};

export default nextConfig;