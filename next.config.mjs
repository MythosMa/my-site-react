/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  env: {
    API_URL: process.env.BASE_API
  },
  rewrites: async () => {
    return [{
      source: `${process.env.NEXT_PUBLIC_BASE_API}/:path*`,
      destination: "http://localhost:3000/:path*"
    }]
  }
}

export default nextConfig
