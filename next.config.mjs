/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Use stable image optimization. AVIF first, WebP fallback.
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Allow imports without extension and from /lib /components /app shortcuts.
  experimental: {
    // Server-action body size — apply form is small but uploads might come later.
    serverActions: { bodySizeLimit: '2mb' },
  },
}

export default nextConfig
