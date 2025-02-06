const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      "@redux": path.resolve(__dirname, "src/redux"), // ✅ Fix alias path
    };

    return config;
  },
};

module.exports = nextConfig;

