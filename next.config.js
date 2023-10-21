/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'zatmonkey.com', 'www.instagram.com', 'abs.twimg.com', 'telegram.org', 'www.whatsapp.com', 'azarus.io', 'www.linkedin.com'],
  },
};

module.exports = nextConfig;
