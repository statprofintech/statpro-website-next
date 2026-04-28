# statpro-website-next

Next.js 15 + React 19 + Tailwind v4 rebuild of `www.statproindia.com`.

While the migration is in progress this lives at:
- **`https://statpro-website-next.vercel.app`** (auto-deploy from `main`)
- **`https://staging.statproindia.com`** (optional, set via CloudFlare CNAME → Vercel)

The current production site at `https://www.statproindia.com` continues to run on
OVH untouched. When the port is complete and Lighthouse mobile is ≥ 90 on every
page, we flip CloudFlare DNS to Vercel — single-step cutover, instant rollback.

See:
- Plan: [`../statpro-website/docs/NEXTJS_MIGRATION.md`](../statpro-website/docs/NEXTJS_MIGRATION.md)
- Status: [`MIGRATION_STATUS.md`](MIGRATION_STATUS.md)

## Local dev

```bash
npm install
npm run dev   # http://localhost:3010
```

## Required env vars

Copy `.env.example` to `.env.local` for dev, or set in Vercel for production.

```
NEXT_PUBLIC_GTM_ID=GTM-537TPHW
NEXT_PUBLIC_CRM_API_URL=https://crm.statproindia.com
```

## Deploy

Vercel auto-deploys every commit to `main`. PRs get preview URLs automatically.
