await import('./env.mjs')
import { env } from './env.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    proxyTimeout: 1000 * 600,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${env.RENDER_URL}/api/:path*`,
      },
    ]
  },
}

export default nextConfig
