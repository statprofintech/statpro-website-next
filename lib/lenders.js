// Static imports of every v2 product JSON. Next.js (unlike Vite) doesn't have
// a glob primitive, so we list each file. Add a new line whenever a partner
// onboards. Build will fail loudly if a file is missing.

import hdfcBl from "@/data/lenders/products/hdfc-bank__bl.v2.json"
import hdfcHl from "@/data/lenders/products/hdfc-bank__hl.v2.json"
import hdfcLap from "@/data/lenders/products/hdfc-bank__lap.v2.json"
import hdfcPl from "@/data/lenders/products/hdfc-bank__pl.v2.json"
import jiocreditLas from "@/data/lenders/products/jiocredit__las.v2.json"

/** Array of all v2 Product records. */
export const products = [hdfcBl, hdfcHl, hdfcLap, hdfcPl, jiocreditLas];

/** Normalised partner list — derived from the v2 records. */
export const partners = (() => {
  const byId = new Map();
  for (const p of products) {
    if (!byId.has(p.partner_id)) {
      byId.set(p.partner_id, {
        id: p.partner_id,
        name: prettyName(p.partner_id),
        families: new Set(),
      });
    }
    byId.get(p.partner_id).families.add(p.family);
  }
  return Array.from(byId.values()).map((p) => ({
    ...p,
    families: Array.from(p.families).sort(),
  }));
})();

/** Hard-coded full panel — 19 confirmed partners, even those without v2 records yet. */
export const PARTNER_PANEL = [
  { id: "hdfc-bank", name: "HDFC Bank", category: "PRIVATE_BANK" },
  { id: "kotak-bank", name: "Kotak Mahindra Bank", category: "PRIVATE_BANK" },
  { id: "axis-finance", name: "Axis Finance", category: "NBFC_LARGE" },
  { id: "bajaj-finserv", name: "Bajaj Finserv", category: "NBFC_LARGE" },
  { id: "tata-capital", name: "Tata Capital", category: "NBFC_LARGE" },
  { id: "lt-finance", name: "L&T Finance", category: "NBFC_LARGE" },
  { id: "aditya-birla", name: "Aditya Birla Capital", category: "NBFC_LARGE" },
  { id: "cholamandalam", name: "Cholamandalam", category: "NBFC_LARGE" },
  { id: "piramal", name: "Piramal Finance", category: "NBFC_LARGE" },
  { id: "poonawalla", name: "Poonawalla Fincorp", category: "NBFC_LARGE" },
  { id: "lic-housing", name: "LIC Housing Finance", category: "HOUSING_FINANCE" },
  { id: "sammaan-finserve", name: "Sammaan Finserve", category: "HOUSING_FINANCE" },
  { id: "lendingkart", name: "Lendingkart", category: "NBFC_SME" },
  { id: "protium", name: "Protium", category: "NBFC_SME" },
  { id: "profectus", name: "Profectus Capital", category: "NBFC_SME" },
  { id: "jiocredit", name: "JioCredit", category: "NBFC_LAS" },
  { id: "mirae-asset", name: "Mirae Asset Financial", category: "NBFC_LAS" },
  { id: "jana-sfb", name: "Jana Small Finance Bank", category: "SMALL_FINANCE_BANK" },
  { id: "unity-sfb", name: "Unity Small Finance Bank", category: "SMALL_FINANCE_BANK" },
];

export const PARTNER_COUNT = PARTNER_PANEL.length; // 19

export const CATEGORY_LABELS = {
  PRIVATE_BANK: "Private Banks",
  PSU_BANK: "PSU Banks",
  SMALL_FINANCE_BANK: "Small Finance Banks",
  HOUSING_FINANCE: "Housing Finance",
  NBFC_LARGE: "Large NBFCs",
  NBFC_SME: "SME NBFCs",
  NBFC_LAS: "LAS Specialists",
};

export const FAMILY_LABELS = {
  LAP: "Loan Against Property",
  LRD: "Loan Against Rental",
  LAS: "Loan Against Securities",
  HL: "Home Loan",
  BL: "Business Loan",
  PL: "Personal Loan",
};

export function getProduct(partnerId, family) {
  return products.find((p) => p.partner_id === partnerId && p.family === family);
}

export function getProductsByFamily(family) {
  return products.filter((p) => p.family === family);
}

/** Aggregate per-family stats computed from the v2 catalogue. */
export function familyStats(family) {
  const recs = getProductsByFamily(family);
  const ranges = recs
    .map((r) => r.base?.pricing?.roi)
    .filter((roi) => roi && (roi.min_pct != null || roi.max_pct != null));
  const minPct = ranges.length ? Math.min(...ranges.map((r) => r.min_pct ?? r.max_pct)) : null;
  const maxPct = ranges.length ? Math.max(...ranges.map((r) => r.max_pct ?? r.min_pct)) : null;

  const tickets = recs
    .map((r) => r.base?.loan_structure)
    .filter((ls) => ls && (ls.ticket_inr_min != null || ls.ticket_inr_max != null));
  const ticketMin = tickets.length ? Math.min(...tickets.map((t) => t.ticket_inr_min).filter((x) => x != null)) : null;
  const ticketMax = tickets.length ? Math.max(...tickets.map((t) => t.ticket_inr_max).filter((x) => x != null)) : null;

  return {
    family,
    lenderCount: new Set(recs.map((r) => r.partner_id)).size,
    roiMinPct: minPct,
    roiMaxPct: maxPct,
    ticketInrMin: ticketMin,
    ticketInrMax: ticketMax,
    variantCount: recs.reduce((acc, r) => acc + (r.variants?.length ?? 0), 0),
  };
}

/** Set of unique collateral types accepted across the catalogue. */
export function uniqueCollateralTypes() {
  const set = new Set();
  for (const p of products) {
    for (const c of p.base?.collateral_accepted ?? []) set.add(c.type);
  }
  return Array.from(set).sort();
}

/** Catalogue-wide rollups for the "By the numbers" section. */
export const CATALOGUE_STATS = {
  partners: PARTNER_PANEL.length,
  productRecords: products.length,
  collateralTypes: uniqueCollateralTypes().length,
  families: 6,
};

function prettyName(id) {
  return id
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}
