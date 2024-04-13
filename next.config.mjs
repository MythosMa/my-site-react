/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  redirects: () => {
    return [
      {
        source: "/:lng",
        destination: "/:lng/home",
        permanent: false,

      }
    ]
  }
}

export default nextConfig
