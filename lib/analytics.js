// GTM dataLayer helpers. GA4 is loaded by the GTM container — Google Tag with
// G-KXNBGFH7WZ fires on Initialization - All Pages. All events flow:
//   trackPageview() → dataLayer.push → GTM trigger → GA4 tag → GA4 property.
//
// IDs come from NEXT_PUBLIC_* env vars baked into the build by Next.

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || ''

export function trackPageview(path) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'page_view',
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: name, ...params })
}
