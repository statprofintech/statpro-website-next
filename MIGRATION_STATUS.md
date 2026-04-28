# Migration status — statpro-website-next

Tracks per-page port progress against the plan in
[`statpro-website/docs/NEXTJS_MIGRATION.md`](../statpro-website/docs/NEXTJS_MIGRATION.md).

Update each row as work lands. Done = port complete + visual diff matches live + Lighthouse on staging ≥ 90.

## Phase 0 — Scaffold

- [x] Project directory `statpro-website-next/`
- [x] `package.json` (Next 15, React 19, Tailwind v4)
- [x] `next.config.mjs`, `postcss.config.mjs`, `jsconfig.json`
- [x] `app/globals.css` (verbatim copy of brand tokens from `src/index.css`)
- [x] `public/` assets copied (fonts, OG images, logo variants, favicon)
- [x] `lib/` modules copied (seo-config, jsonld, finance, lenders, utils, landingThemes, config)
- [x] `lib/analytics.js` rewritten for `NEXT_PUBLIC_GTM_ID`
- [x] `components/Logo.jsx` (verbatim)
- [x] `app/layout.jsx` with metadata, fonts, JSON-LD, GTM Script
- [x] `app/page.jsx` smoke-test home
- [x] `app/robots.js` (Next-native)
- [x] `app/sitemap.js` (Next-native, reuses `lib/seo-config`)

## Phase 1 — Foundation

- [ ] `npm install` succeeds
- [ ] `npm run dev` renders smoke-test home with brand styling
- [ ] Lighthouse on `localhost:3010` baseline (target ≥ 95 on minimal page)
- [ ] Push to GitHub repo (new)
- [ ] Connect Vercel → first deploy succeeds
- [ ] Vercel auto URL captured (e.g. `statpro-website-next.vercel.app`)
- [ ] `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_CRM_API_URL` env vars set on Vercel
- [ ] Optional: CNAME `staging.statproindia.com` → Vercel

## Phase 2 — Home page sections

Each section becomes `components/sections/*.jsx`. Mark `'use client'` only if it
uses `useState`, `motion`, or browser APIs.

- [ ] Hero (client — slider state)
- [ ] StatsBand (server)
- [ ] CalculatorHub (client — interactive)
- [ ] Pillars (server)
- [ ] Products (server)
- [ ] HowItWorks (server)
- [ ] WestBengalCities (server)
- [ ] Partners (server)
- [ ] PartnerMarquee (client — animation)
- [ ] CaseStudies (server)
- [ ] CollateralsMatrix (server)
- [ ] Faq (client — accordion state)
- [ ] FinalCta (server)
- [ ] Navbar (client — mobile menu state)
- [ ] Footer (server)
- [ ] WhatsAppButton (client — visibility)

## Phase 3 — Top-level product pages

- [ ] `ProductPageLayout` (shared)
- [ ] `app/lap/page.jsx`
- [ ] `app/lrd/page.jsx`
- [ ] `app/las/page.jsx`
- [ ] `app/hl/page.jsx`
- [ ] `app/bl/page.jsx`
- [ ] `app/pl/page.jsx`

## Phase 4 — Calculators

- [ ] `_CalcShell` (shared)
- [ ] `app/calculators/page.jsx`
- [ ] `app/calculators/emi/page.jsx`
- [ ] `app/calculators/od-lap/page.jsx`
- [ ] `app/calculators/balance-transfer/page.jsx`
- [ ] `app/calculators/las-ltv/page.jsx`
- [ ] `app/calculators/eligibility/page.jsx`

## Phase 5 — Legal + About + Lenders

- [ ] `LegalPageLayout`
- [ ] `app/privacy/page.jsx`
- [ ] `app/terms/page.jsx`
- [ ] `app/grievance/page.jsx`
- [ ] `app/disclosures/page.jsx`
- [ ] `app/cookies/page.jsx`
- [ ] `app/about/page.jsx`
- [ ] `app/lenders/page.jsx`

## Phase 6 — Apply form

- [ ] `app/apply/page.jsx` (client, POSTs to CRM)
- [ ] `app/apply/thanks/page.jsx` (server)
- [ ] CORS verified from Vercel origin → `crm.statproindia.com`

## Phase 7 — Landing pages

Counts mirror the existing Vite project:

- [ ] `LandingPageLayout` + `LandingPageLayoutFintech`
- [ ] `app/landingpage/lap/balance-transfer/page.jsx`
- [ ] `app/landingpage/lap/special-purpose/page.jsx`
- [ ] `app/landingpage/lap/dropline-od/page.jsx`
- [ ] `app/landingpage/lrd/...` (4)
- [ ] `app/landingpage/las/...` (3)
- [ ] `app/landingpage/hl/...` (3)
- [ ] `app/landingpage/bl/...` (3)
- [ ] `app/landingpage/pl/...` (3)
- [ ] `app/landingpage/lap/v2/...` (6)
- [ ] `app/landingpage/lrd/v2/...` (5)
- [ ] `app/landingpage/las/v2/...` (5)
- [ ] `app/landingpage/hl/v2/...` (5)
- [ ] `app/landingpage/bl/v2/...` (5)
- [ ] `app/landingpage/pl/v2/...` (5)
- [ ] All routes set `robots: noindex` (kept out of sitemap, same as current)

## Phase 8 — Client portal + marketing internal

- [ ] `app/client/sign-in/page.jsx` (magic-link)
- [ ] `app/client/dashboard/page.jsx` (auth-gated)
- [ ] `app/marketing/page.jsx` (password-gated gallery)
- [ ] `app/marketing/infographic/[slug]/page.jsx` (dynamic)

## Phase 9 — Build-time integrations

- [x] `app/sitemap.js` (will pick up new routes automatically)
- [x] `app/robots.js`
- [ ] OG generation script ported (or use Next's `opengraph-image.tsx` per route)
- [ ] Search-console verification meta in `app/layout.jsx` (env-driven)

## Phase 10 — QA on staging

- [ ] Lighthouse mobile ≥ 90 on `/`
- [ ] Lighthouse mobile ≥ 90 on each `/lap`, `/lrd`, `/las`, `/hl`, `/bl`, `/pl`
- [ ] Lighthouse mobile ≥ 90 on each calculator
- [ ] Visual diff vs live = zero (manual side-by-side)
- [ ] Apply form end-to-end (form → CRM → dashboard)
- [ ] Borrower magic-link flow
- [ ] OG cards validate on opengraph.xyz / Twitter validator
- [ ] GTM Preview shows page_view on every route
- [ ] GA4 DebugView shows events
- [ ] Mobile audit at 360/390/414 widths

## Phase 11 — Flip

- [ ] CloudFlare DNS for apex + www → Vercel
- [ ] Smoke test in incognito
- [ ] Watch GA4 Realtime + Vercel logs for 30 min

## Phase 12 — Cleanup (T+14 days)

- [ ] Tear down `/var/www/statproindia/` on OVH
- [ ] Tear down `/etc/nginx/sites-enabled/statproindia-www`
- [ ] Archive old `statpro-website/` repo
- [ ] Rename `statpro-website-next/` → `statpro-website/`
