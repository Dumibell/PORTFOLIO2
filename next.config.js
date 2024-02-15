/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
};

// module.exports = {
//   webpack(config) {
//     config.infrastructureLogging = { debug: /PackFileCache/ };
//     return config;
//   },
// };

module.exports = nextConfig;
