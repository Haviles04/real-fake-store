/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
    distDir: "_next",
    generateBuildId: async () => {
      if (process.env.BUILD_ID) {
        return process.env.BUILD_ID;
      } else {
        return `${new Date().getTime()}`;
      }
    },
  
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      },
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
        hostname: '**.com'
      }
      
  
    ]
  }
},nextConfig
