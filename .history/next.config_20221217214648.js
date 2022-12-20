/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.lorem.space'
      },
      {
        protocol: 'https',
        hostname: 'placeimg.com'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      }
    ]
  }
},nextConfig
