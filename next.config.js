/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'open-example.mypinata.cloud',
        port: '',
        pathname: '/ipfs/**'
      }
    ],
  },
}

module.exports = nextConfig
