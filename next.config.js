/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Add SVGR Loader to handle SVG files
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
  
      // Return the updated config
      return config;
    },
  };
  
  module.exports = nextConfig;