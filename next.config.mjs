/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  rewrites: async () => {
    return [{
      source: `${process.env.NEXT_PUBLIC_BASE_API}/:path*`,
      destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`
    }]
  }
}

export default nextConfig
