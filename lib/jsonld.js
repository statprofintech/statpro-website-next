import { SITE_URL, SITE_NAME } from "./seo-config";

export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: SITE_NAME,
  alternateName: "StatPro",
  url: SITE_URL,
  logo: `${SITE_URL}/statpro-logo.png`,
  description:
    "Digital lending advisory and AMFI-registered mutual fund broker. Specialists in Loan Against Property, Lease Rental Discounting and Loan Against Securities.",
  areaServed: { "@type": "Country", name: "India" },
  sameAs: [
    "https://www.linkedin.com/company/statproindia",
  ],
};

export const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export function homeJsonLd() {
  return [ORGANIZATION_JSONLD, WEBSITE_JSONLD];
}

export function breadcrumb(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: SITE_URL + it.path,
    })),
  };
}

// Auto-derive a breadcrumb chain from a pathname.
// e.g. /calculators/emi → Home > Calculators > EMI
const SEGMENT_LABELS = {
  lap: "Loan Against Property",
  lrd: "Lease Rental Discounting",
  las: "Loan Against Securities",
  hl: "Home Loan",
  bl: "Business Loan",
  pl: "Personal Loan",
  lenders: "Lender Partners",
  about: "About",
  apply: "Apply",
  thanks: "Thanks",
  calculators: "Calculators",
  "od-lap": "OD-LAP",
  "balance-transfer": "Balance Transfer",
  emi: "EMI",
  "las-ltv": "LAS LTV",
  eligibility: "Eligibility",
  privacy: "Privacy Policy",
  terms: "Terms",
  grievance: "Grievance",
  disclosures: "Disclosures",
  cookies: "Cookie Policy",
  client: "Client",
  "sign-in": "Sign In",
  dashboard: "Dashboard",
  landingpage: "Landing",
};

const titleCase = (s) =>
  s
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

export function breadcrumbForPath(pathname) {
  if (!pathname || pathname === "/") return null;
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return null;
  const items = [{ name: "Home", path: "/" }];
  let acc = "";
  for (const seg of parts) {
    acc += "/" + seg;
    items.push({ name: SEGMENT_LABELS[seg] || titleCase(seg), path: acc });
  }
  return breadcrumb(items);
}

export function productJsonLd({ name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name,
    description,
    url: SITE_URL + path,
    provider: { "@type": "FinancialService", name: SITE_NAME, url: SITE_URL },
    areaServed: { "@type": "Country", name: "India" },
  };
}

export function faqJsonLd(qa) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
