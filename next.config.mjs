/** @type {import('next').NextConfig} */
const nextConfig = {
  //reactStrictMode: true,
  removeConsole: process.env.NODE_ENV === "production",
};

export default nextConfig;
