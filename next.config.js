/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      electron: false, // Mengabaikan dependensi electron
    };
    return config;
  },
};

module.exports = nextConfig;
