/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: [
      'picsum.photos',
      'raw.githubusercontent.com',
      'img.29cm.co.kr',
      'lh3.googleusercontent.com',
      'i.ibb.co',
    ],
  },
}

module.exports = nextConfig
