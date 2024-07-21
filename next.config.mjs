/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 10,
    },
  },
  serverExternalPackages: ["@node-rs/argon2"],
};

export default nextConfig;
