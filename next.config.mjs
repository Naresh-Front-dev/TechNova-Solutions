/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.PAGES_BASE_PATH || "",
  allowedDevOrigins: ["192.168.31.109"],
};

export default nextConfig;
