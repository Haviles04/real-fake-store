/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photo'
      },
      {
        protocol: 'https',
        hostname: 'api.lorem.space'
      }
      
  
    ]
  }
},nextConfig
