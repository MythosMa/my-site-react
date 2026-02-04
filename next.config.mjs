/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/:lng/dev-api/:path*',
          destination: process.env.NEXT_PUBLIC_BASE_URL + '/:path*', // 你的后端地址
        },
      ]
    }
    return []
  },
}

export default nextConfig
