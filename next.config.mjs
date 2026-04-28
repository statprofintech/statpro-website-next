/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ── Static export ────────────────────────────────────────────────────────
  // Outputs a fully static site to `out/` — no Node server required.
  // Deploy: rsync out/ → /var/www/statproindia/ on OVH (behind Cloudflare CDN).
  output: 'export',

  // Each route becomes a directory with index.html.  nginx serves it natively.
  trailingSlash: true,

  // next/image optimisation requires a running server; use plain <img> sizing.
  images: {
    unoptimized: true,
  },

  // serverActions are server-only; not compatible with static export.
  // (The apply form POSTs directly to crm.statproindia.com via fetch.)
}

export default nextConfig
