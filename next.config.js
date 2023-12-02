/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async rewrites() {
    return [
      {
        source: '/api/image',
        destination: 'http://localhost:3000/api/image',
      },
      {
        source: '/api/video',
        destination: 'http://localhost:3000/api/video',
      },
    ]
  },
}

module.exports = nextConfig
