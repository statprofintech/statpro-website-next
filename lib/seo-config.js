// Centralized SEO config. Keyed by exact pathname.
// Falls back to `default` for unknown paths.
//
// Titles do NOT include the brand suffix here — `app/layout.jsx` declares
// `metadata.title.template = "%s | StatPro Fintech"` and Next applies it once.
// Suffixing in both places would produce "… | StatPro Fintech | StatPro Fintech".

export const SITE_URL = "https://www.statproindia.com";
export const SITE_NAME = "StatPro Fintech";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

// `brand()` is now identity — kept so older call sites still resolve.
const brand = (t) => t;

export const SEO_DEFAULTS = {
  title: brand("Loan Against Property, LRD & LAS at India's Best Rates"),
  description:
    "StatPro Fintech helps borrowers lower interest cost on Loan Against Property, Lease Rental Discounting, and Loan Against Securities. 19 lender partners. AMFI-registered.",
  keywords:
    "loan against property, LAP, lease rental discounting, LRD, loan against securities, LAS, balance transfer, India",
  image: DEFAULT_OG_IMAGE,
  type: "website",
  robots: "index,follow",
};

export const SEO_BY_PATH = {
  "/": {
    title: brand("Loan Against Property, LRD & LAS — Lowest Interest Rates in India"),
    description:
      "Lower your interest cost on Loan Against Property, Lease Rental Discounting and Loan Against Securities. 19 lender partners, transparent rates, AMFI-registered MF broker.",
  },
  "/lap": {
    title: brand("Loan Against Property (LAP) — Compare Rates From 19 Lenders"),
    description:
      "Compare Loan Against Property rates across 19 partner banks and NBFCs. Up to 70% LTV, tenure up to 15 years, fast sanctions. Calculate EMI online.",
    keywords: "loan against property, LAP, mortgage loan, property loan rates India",
    image: `${SITE_URL}/og-lap.png`,
  },
  "/lrd": {
    title: brand("Lease Rental Discounting (LRD) — Unlock Your Rent Income"),
    description:
      "Convert future rent into capital with Lease Rental Discounting. Up to 90% of rental cashflow, multi-tenant accepted, mall and office property eligible.",
    keywords: "lease rental discounting, LRD, rent securitization, commercial property loan",
    image: `${SITE_URL}/og-lrd.png`,
  },
  "/las": {
    title: brand("Loan Against Securities (LAS) — Borrow Against Stocks & MFs"),
    description:
      "Pledge shares, mutual funds, or bonds for instant liquidity without selling. T+1 sanction, margin-call relief, rates from 9.5%.",
    keywords: "loan against securities, LAS, loan against shares, loan against mutual funds",
    image: `${SITE_URL}/og-las.png`,
  },
  "/hl": {
    title: brand("Home Loan — Compare Offers, Save on Interest"),
    description:
      "Home loans across 12+ partner lenders. First-time buyer, balance transfer, self-employed and NRI eligible. Get sanctioned at India's best rates.",
    keywords: "home loan, housing loan, home loan balance transfer, home loan India",
    image: `${SITE_URL}/og-hl.png`,
  },
  "/bl": {
    title: brand("Business Loan — Working Capital, SME, Equipment Finance"),
    description:
      "Unsecured and secured business loans for SMEs. Working capital, equipment finance, and term loans up to ₹5 Cr.",
    keywords: "business loan, SME loan, working capital, equipment finance",
    image: `${SITE_URL}/og-bl.png`,
  },
  "/pl": {
    title: brand("Personal Loan — Lowest Rates, Fast Approval"),
    description:
      "Personal loans up to ₹40 lakh at India's lowest interest rates. Debt consolidation, medical, education, wedding — fully digital approval.",
    keywords: "personal loan, debt consolidation, medical loan India",
    image: `${SITE_URL}/og-pl.png`,
  },
  "/lenders": {
    title: brand("19 Lender Partners — Banks & NBFCs"),
    description:
      "StatPro is empanelled with 19 lender partners across LAP, LRD, LAS, HL and BL. View the full list of banks and NBFCs.",
  },
  "/about": {
    title: brand("About Us — Who We Are"),
    description:
      "StatPro Fintech is a digital lending advisory and AMFI-registered mutual fund broker. We help businesses and HNIs lower their cost of capital.",
  },
  "/apply": {
    title: brand("Apply Online — Loan Against Property, LRD, LAS"),
    description:
      "Apply for LAP, LRD, LAS, HL, BL or PL with one form. Get matched to the best partner lender within 24 hours.",
    robots: "index,follow",
  },
  "/apply/thanks": {
    title: brand("Application Received"),
    description: "Thank you. Our team will reach out within 24 hours.",
    robots: "noindex,follow",
  },
  "/calculators": {
    title: brand("Loan Calculators — EMI, Eligibility, Balance Transfer"),
    description:
      "Free calculators for EMI, eligibility, OD-LAP utilization, balance-transfer break-even, and LAS LTV.",
  },
  "/calculators/od-lap": {
    title: brand("OD-LAP Utilization Calculator"),
    description:
      "Estimate effective interest cost on an Overdraft Loan Against Property at varying utilization levels.",
  },
  "/calculators/balance-transfer": {
    title: brand("Balance Transfer Break-even Calculator"),
    description:
      "Find the break-even tenure for a loan balance transfer accounting for processing fees and rate spread.",
  },
  "/calculators/emi": {
    title: brand("EMI Calculator"),
    description: "Calculate EMI for any loan amount, rate and tenure with full amortization.",
  },
  "/calculators/las-ltv": {
    title: brand("LAS LTV Calculator"),
    description:
      "Calculate eligible loan amount against shares, mutual funds and bonds based on RBI-prescribed LTV haircuts.",
  },
  "/calculators/eligibility": {
    title: brand("Loan Eligibility Calculator"),
    description: "Check eligibility for LAP, HL, BL and PL based on income, FOIR, and obligations.",
  },
  "/privacy": { title: brand("Privacy Policy"), description: "How StatPro Fintech collects, uses and protects your data.", robots: "index,follow" },
  "/terms": { title: brand("Terms of Service"), description: "Terms and conditions for using StatPro Fintech.", robots: "index,follow" },
  "/grievance": { title: brand("Grievance Redressal"), description: "Grievance redressal mechanism and escalation matrix at StatPro Fintech.", robots: "index,follow" },
  "/disclosures": { title: brand("Disclosures"), description: "Regulatory disclosures by StatPro Fintech.", robots: "index,follow" },
  "/cookies": { title: brand("Cookie Policy"), description: "Cookies used by StatPro Fintech and how to manage them.", robots: "index,follow" },

  // LAP landing
  "/landingpage/lap/balance-transfer": {
    title: brand("LAP Balance Transfer — Cut Your EMI by 25%"),
    description: "Move your existing Loan Against Property to a lower rate. Save lakhs over the tenure.",
  },
  "/landingpage/lap/special-purpose": {
    title: brand("LAP for Special Purpose — Education, Medical, Expansion"),
    description: "Use Loan Against Property for tuition, medical, business expansion or any sanctioned purpose.",
  },
  "/landingpage/lap/dropline-od": {
    title: brand("Dropline OD-LAP — Pay Interest Only on What You Use"),
    description: "Dropline overdraft against property: revolving limit, interest only on usage, principal step-down annually.",
  },

  // LRD landing
  "/landingpage/lrd/mall-office-owner": {
    title: brand("LRD for Mall & Office Owners"),
    description: "Lease Rental Discounting tailored for mall and Grade-A office owners with anchor tenants.",
  },
  "/landingpage/lrd/multi-tenant": {
    title: brand("Multi-Tenant LRD — Pool Rent From All Tenants"),
    description: "LRD against multi-tenant rent rolls. Diversified cashflow accepted by all 19 partner lenders.",
  },
  "/landingpage/lrd/lrd-vs-lap": {
    title: brand("LRD vs LAP — Which Is Right For You?"),
    description: "Side-by-side comparison of Lease Rental Discounting and Loan Against Property. Eligibility, LTV, rate, tenure.",
  },
  "/landingpage/lrd/nri-landlord": {
    title: brand("LRD For NRI Landlords"),
    description: "Lease Rental Discounting for NRIs with rental properties in India. NRO/NRE accepted.",
  },

  // LAS landing
  "/landingpage/las/t-plus-one-sanction": {
    title: brand("T+1 LAS Sanction — Loan Against Shares in 24 Hours"),
    description: "Pledge listed shares and get sanction in T+1. No selling, no capital-gains hit.",
  },
  "/landingpage/las/margin-call-relief": {
    title: brand("Margin-Call Relief — Refinance Your Broker MTF"),
    description: "Refinance broker margin funding into a Loan Against Securities to avoid forced selling.",
  },
  "/landingpage/las/las-vs-sell": {
    title: brand("LAS vs Selling Stocks — The Math"),
    description: "Why borrowing against your stocks beats selling them. Tax, opportunity cost, and break-even.",
  },

  // HL landing
  "/landingpage/hl/first-time-buyer": {
    title: brand("First-Time Home Buyer Loan"),
    description: "Home loans for first-time buyers with PMAY benefits and zero processing fee offers.",
  },
  "/landingpage/hl/balance-transfer": {
    title: brand("Home Loan Balance Transfer"),
    description: "Move your home loan to a lower rate and cut EMI by up to 25%.",
  },
  "/landingpage/hl/self-employed": {
    title: brand("Home Loan For Self-Employed"),
    description: "Home loans for self-employed professionals and business owners with bank-statement-based income.",
  },

  // BL landing
  "/landingpage/bl/sme-unsecured": {
    title: brand("Unsecured SME Business Loan"),
    description: "Collateral-free business loans up to ₹2 Cr based on GST and bank-statement turnover.",
  },
  "/landingpage/bl/working-capital": {
    title: brand("Working Capital Loan — Cash Credit & OD"),
    description: "Working capital limits, cash credit and overdraft facilities for SMEs.",
  },
  "/landingpage/bl/equipment-finance": {
    title: brand("Equipment Finance & Machinery Loan"),
    description: "Finance machinery, plant and equipment up to 100% of invoice value.",
  },

  // PL landing
  "/landingpage/pl/lowest-rate": {
    title: brand("Lowest-Rate Personal Loan"),
    description: "Personal loans starting from 10.49% — pre-approved offers for salaried professionals.",
  },
  "/landingpage/pl/debt-consolidation": {
    title: brand("Debt Consolidation Loan"),
    description: "Consolidate credit card and multiple personal loan EMIs into one lower-rate loan.",
  },
  "/landingpage/pl/medical-education": {
    title: brand("Medical & Education Personal Loan"),
    description: "Specially-structured personal loans for medical emergencies and education abroad.",
  },

  // Client portal — noindex
  "/client/sign-in": { title: brand("Client Sign In"), robots: "noindex,nofollow" },
  "/client/dashboard": { title: brand("Client Dashboard"), robots: "noindex,nofollow" },

  // ─────────────────────────────────────────────────────────────────
  // Landing pages v2 — main-site themed (white/blue/Inter), public,
  // indexable. Mounted at /lp/<family>/<slug>.
  // ─────────────────────────────────────────────────────────────────

  // LAP v2 (6)
  "/lp/lap/bt-topup":         { title: brand("LAP Balance Transfer + Top-Up"),  description: "Move your existing Loan Against Property to a sharper rate and pull a top-up alongside — single sanction, no second valuation." },
  "/lp/lap/dropline-od":      { title: brand("Dropline OD-LAP — Pay Only on What You Use"), description: "Revolving overdraft against your property. Interest only on the drawn balance. Limit step-down quarterly." },
  "/lp/lap/special-purpose":  { title: brand("LAP for Hospitals, Schools & Hotels"), description: "Specialist-NBFC desks fund special-purpose property where banks decline. 55% LTV on niche collateral." },
  "/lp/lap/industrial":       { title: brand("LAP for Industrial Property"),    description: "Loans against factories, warehouses, sheds and cold-storage units. Funded by 8 SME-NBFC partners." },
  "/lp/lap/self-employed":    { title: brand("LAP for Self-Employed Promoters"), description: "Bank-statement and GST-driven underwriting at HFC desks built for self-employed cash flow." },
  "/lp/lap/fresh":            { title: brand("Fresh LAP for First-Time Promoter Borrowers"), description: "First mortgage on owned residential, commercial or industrial property. Up to ₹10 Cr ticket." },

  // LRD v2 (5)
  "/lp/lrd/mall-office":      { title: brand("LRD for Mall & Office Owners"),    description: "Discount up to 20 years of rental cash flow into a lump sum today. 85% discounting on rental, sharpest panel rate." },
  "/lp/lrd/multi-tenant":     { title: brand("Multi-Tenant LRD — 6+ Tenants"),    description: "Per-tenant credit memo, escalation-aware pricing, tripartite escrow. Specialist NBFCs that handle the complexity." },
  "/lp/lrd/nri-landlord":     { title: brand("LRD for NRI Landlords"),            description: "Discount your Indian rental income into FEMA-clean repatriable capital. Tenant escrow, EMI auto-debited locally." },
  "/lp/lrd/lrd-vs-lap":       { title: brand("LRD vs LAP — Which Is Right?"),     description: "Side-by-side comparison: rate, ticket, tenure, LTV vs discounting. When LRD beats LAP on a rented property." },
  "/lp/lrd/hospital-hotel":   { title: brand("LRD for Hospitals & Hotels"),       description: "Going-concern rental discounting for hospitality and healthcare assets. Specialist NBFC route." },

  // LAS v2 (5)
  "/lp/las/t-plus-one":       { title: brand("T+1 LAS Sanction — Pledge Today, Draw Tomorrow"), description: "Specialist NBFC desks deliver same-day pledge, T+1 disbursal against listed equity, MFs and bonds." },
  "/lp/las/margin-call":      { title: brand("Margin-Call Relief — LAS With a Cure Window"), description: "Refinance broker MTF or restructure margin calls. 5–7 day cure window, no auto-liquidation." },
  "/lp/las/vs-sell":          { title: brand("LAS vs Selling Stocks — The Math"),  description: "Pledge — don't sell. Avoid LTCG, keep voting rights and capital appreciation. Pay interest only on what you draw." },
  "/lp/las/mf-heavy":         { title: brand("LAS Against Mutual Funds — Up to 75% LTV"), description: "Lien-mark equity and debt MF folios across AMCs. Sharper LTV on debt MFs than on listed equity." },
  "/lp/las/promoter-pledge":  { title: brand("Promoter Pledge LAS"),                description: "LAS structured for listed-company promoters. Disclosure-compliant, depository-pledge mechanism." },

  // HL v2 (5)
  "/lp/hl/first-time-buyer":  { title: brand("First-Time Home Loan Buyer"),       description: "Sharper than your salary-bank's pre-approved offer. PMAY-MIG eligibility checked at intake." },
  "/lp/hl/balance-transfer":  { title: brand("Home Loan Balance Transfer + Top-Up"), description: "Refinance your existing home loan and bundle a top-up — single sanction, RBI-zero foreclosure." },
  "/lp/hl/self-employed":     { title: brand("Home Loan for Self-Employed"),       description: "HFC desks underwrite ITR + GST + bank statement, not just salary slips. 8.70% sharpest rate." },
  "/lp/hl/construction":      { title: brand("Construction-Linked Home Loan"),      description: "Tranched disbursal aligned to builder milestones. Pre-EMI on disbursed portion only." },
  "/lp/hl/women-borrower":    { title: brand("Home Loan for Women Borrowers"),      description: "Stamp-duty concession + lender rate concession on home loans where the primary applicant is a woman." },

  // BL v2 (5)
  "/lp/bl/sme-stack":         { title: brand("SME Unsecured Business Loan — Stack to ₹6 Cr"), description: "₹75 L per lender unsecured BL, stackable across 4–5 NBFC partners. GST + bank-statement underwriting." },
  "/lp/bl/working-capital":   { title: brand("Working Capital Loan — OD, CC & Invoice Discounting"), description: "Right-instrument pick: OD vs CC vs invoice discounting. Sized to your actual cash-conversion cycle." },
  "/lp/bl/equipment-finance": { title: brand("Equipment Finance & Machinery Loan"), description: "Asset-backed finance up to 90% LTV on new equipment. Hypothecation on the machine, no property pledge." },
  "/lp/bl/doctor-loan":       { title: brand("Doctor Loan — Specialist Desk Pricing"), description: "Specialist NBFC desks for doctors and licensed medical professionals. Sharper rate, faster TAT." },
  "/lp/bl/women-led":         { title: brand("Women-Led Business Loan"),            description: "Concessional-rate variants for businesses where the principal owner / promoter is a woman." },

  // PL v2 (5)
  "/lp/pl/lowest-rate":        { title: brand("Lowest-Rate Personal Loan — From 10.49%"), description: "Beat your salary-bank's pre-approved offer. 6-lender benchmark, sanction in 24 hours, NEFT in 48." },
  "/lp/pl/debt-consolidation": { title: brand("Debt Consolidation Personal Loan"),  description: "Consolidate 4–5 credit-card balances + small EMIs into one PL at 11–12%. Cut effective APR by 60%." },
  "/lp/pl/medical-education":  { title: brand("Medical & Education Personal Loan"),  description: "Express-track NBFC desks for time-critical PLs. T+1 sanction, NEFT or direct payout to institution." },
  "/lp/pl/wedding":            { title: brand("Wedding Personal Loan"),               description: "Tiered ticket sizes for wedding expenses, fast-track sanction, RBI-zero pre-payment penalty." },
  "/lp/pl/salary-account":     { title: brand("Salary-Account Beat — Sharper PL"),    description: "Sharper than your salary-bank's pre-approved offer. We benchmark across 6 lenders for you." },
};

export function getSeoForPath(pathname) {
  const exact = SEO_BY_PATH[pathname];
  return { ...SEO_DEFAULTS, ...(exact || {}) };
}

// All public, indexable URLs. Used for sitemap generation.
// Both /landingpage/* and /lp/* are included — Google should crawl every
// public landing page so any organic traffic that does land on them counts
// for ranking. (We previously kept /landingpage/* out of the sitemap; that
// was reversed once the team confirmed paid + organic blended traffic.)
export const PUBLIC_PATHS = Object.entries(SEO_BY_PATH)
  .filter(([, v]) => !(v.robots || "").includes("noindex"))
  .map(([p]) => p);
