/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_API: process.env.SERVER_API,
    APP_URL: process.env.APP_URL,
    SESSION_SECRET: process.env.SESSION_SECRET,
  },
};

export default nextConfig;
