const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  font-src 'self' 'https://fonts.googleapis.com';
  img-src 'self';
  frame-ancestors 'none'
`

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), battery=(), geolocation=(), microphone=(), browsing-topics=()'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      }
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
}
