/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.com'
      },
      {
        protocol: 'https',
        hostname: 'api.lorem.space'
      }
      
  
    ]
  }
},nextConfig
