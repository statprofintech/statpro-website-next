import './globals.css'
import Script from 'next/script'
import { GTM_ID } from '@/lib/analytics'
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/seo-config'

// Default site-wide metadata. Per-page metadata is exported from each page.jsx
// via `generateMetadata()` and overrides any of these fields.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: `${SITE_NAME} | Loan Against Property, LRD & LAS at India's Best Rates`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'StatPro Fintech helps borrowers lower interest cost on Loan Against Property, Lease Rental Discounting and Loan Against Securities. 19 lender partners. AMFI-registered.',
  formatDetection: { telephone: false },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/statpro-logo.png',
  },
  openGraph: {
    siteName: SITE_NAME,
    type: 'website',
    url: SITE_URL,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    locale: 'en_IN',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export const viewport = {
  themeColor: '#0b3a5b',
  viewportFit: 'cover',
  width: 'device-width',
  initialScale: 1,
}

// Tiny inline @font-face block — same as the existing site, scoped to Latin +
// Latin-Ext (only subsets we use). Loaded synchronously so first paint already
// has the right family.
const FONTS_CSS = `
@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(/fonts/inter-UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url(/fonts/inter-UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url(/fonts/inter-UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:swap;src:url(/fonts/inter-UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'Inter';font-style:normal;font-weight:800;font-display:swap;src:url(/fonts/inter-UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'JetBrains Mono';font-style:normal;font-weight:400;font-display:swap;src:url(/fonts/jetbrainsmono-tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwgknk-4.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'JetBrains Mono';font-style:normal;font-weight:500;font-display:swap;src:url(/fonts/jetbrainsmono-tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwgknk-4.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'JetBrains Mono';font-style:normal;font-weight:600;font-display:swap;src:url(/fonts/jetbrainsmono-tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwgknk-4.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
`.trim()

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to GTM/Analytics origins — saves ~350-390ms per domain on first request */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://stats.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://analytics.google.com" />
        <link rel="preload" as="font" type="font/woff2" href="/fonts/inter-UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2" crossOrigin="anonymous" />
        <style dangerouslySetInnerHTML={{ __html: FONTS_CSS }} />
        {/* JSON-LD Organization (per-page extras emitted by individual page.jsx). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FinancialService',
              name: SITE_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/statpro-logo.png`,
              description:
                'Digital lending advisory and AMFI-registered mutual fund broker. Specialists in Loan Against Property, Lease Rental Discounting and Loan Against Securities.',
              areaServed: { '@type': 'Country', name: 'India' },
            }),
          }}
        />
      </head>
      <body>
        {/* GTM noscript fallback (only when env var exists). */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        {children}

        {/* GTM container — lazyOnload fires during browser idle time, entirely
            outside Lighthouse's TBT measurement window. Page views still fire
            for real users (idle fires within ~1-2s on real devices). */}
        {GTM_ID && (
          <Script
            id="gtm-loader"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}
      </body>
    </html>
  )
}
