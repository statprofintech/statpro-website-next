"use client";

import LandingPageLayout from "@/components/LandingPageLayout";
const PARENT = { label: "All LAS", to: "/las" };

export default function LasT1Page() {
  return (
    <LandingPageLayout
      theme="las"
      tag="LAS · T+1 SANCTION"
      parent={PARENT}
      hero={{
        eyebrow: "Loan Against Securities · for liquidity in 24 hours",
        headline: "Pledge today, /draw tomorrow morning./",
        lede: "JioCredit's NSDL-pledge route gets the OD live within 24 hours of e-KYC for top-100 equities and large-cap mutual funds. Pay interest only on what you draw — and unpledge as you repay.",
        ctaPrimary: { label: "Open my LAS",       to: "/apply?family=LAS" },
        ctaSecondary: { label: "See LAS main page", to: "/las" },
        badge: "01 / 03",
        stats: [
          { v: "T+1",   l: "Sanction TAT" },
          { v: "9.25%", l: "Starting rate" },
          { v: "50%",   l: "LTV on top-100" },
          { v: "75%",   l: "LTV on debt MFs" },
        ],
      }}
      problem={{
        eyebrow: "When liquidity timing matters",
        title: "Selling shares for liquidity costs you the LTCG and the next leg up.",
        body: "Selling part of a long-held equity portfolio to fund a short-term need crystallises long-term capital gains and locks in today's price. By the time the cash need is over, the market may have moved 8–10% and you're sitting on the proceeds, not the position.",
        marks: [
          "10% LTCG on equity gains above ₹1 L per FY — direct cost.",
          "Short-term cash need (3–9 months) — but the sale is permanent.",
          "Re-buying at a higher price = double cost.",
          "Pledging via LAS keeps the position intact and uses the asset as collateral.",
        ],
      }}
      solution={{
        eyebrow: "How a T+1 LAS works",
        title: "From e-KYC to OD-live, one business day.",
        steps: [
          { n: "I",   title: "e-KYC + demat link", body: "PAN, Aadhaar, NSDL DP details. End-to-end paperless." },
          { n: "II",  title: "Portfolio scan + pledge", body: "We auto-detect pledgeable holdings (top-100 + large-cap MFs). Apply per-script LTV." },
          { n: "III", title: "OD live next morning", body: "Sanctioned limit credited to your linked bank as a revolving overdraft. Draw any portion any time." },
        ],
      }}
      proof={{
        eyebrow: "Why JioCredit for T+1",
        title: "Built around speed, NSDL-only, no physical paperwork.",
        stats: [
          { v: "T+1",      l: "Standard sanction TAT", sub: "Sometimes same-day for clean files" },
          { v: "₹5 Cr",    l: "Per-account ticket cap", sub: "Higher tickets route to Mirae" },
          { v: "Top-100",  l: "Equity script-list",     sub: "+ large-cap MFs + SGB + ETFs" },
          { v: "0%",       l: "Pre-payment penalty",    sub: "OD revolving structure" },
        ],
      }}
      example={{
        eyebrow: "A worked example",
        title: "Pledging a ₹2 Cr top-100 equity portfolio for a 6-month working-capital need.",
        narrative: "A promoter held a ₹2 Cr equity portfolio (HUL, ITC, Infy, Reliance, ICICI Bank, etc.) and needed ₹70 L for 6-month working capital. Selling = LTCG on ~₹40 L of gains + lost the next 8% rally. We pledged via JioCredit; OD lived next morning at 9.25%. Drew ₹70 L, repaid in 5 months, unpledged.",
        ledger: [
          { k: "Portfolio value",        v: "₹2,00,00,000" },
          { k: "Pledgeable (50% LTV)",   v: "₹1,00,00,000" },
          { k: "OD limit sanctioned",    v: "₹1,00,00,000", highlight: true },
          { k: "Drawn",                  v: "₹70,00,000" },
          { k: "Rate",                   v: "9.25%" },
          { k: "Interest paid (5 mo)",   v: "≈ ₹2,69,000" },
          { k: "LTCG avoided",           v: "≈ ₹4,00,000",  highlight: true },
          { k: "Rally captured",         v: "₹16,00,000",   highlight: true },
        ],
      }}
      benefits={{
        eyebrow: "What you keep",
        title: "Why LAS beats selling — almost always.",
        items: [
          { title: "Position intact",      body: "Pledged shares stay in your demat. Dividends, bonus issues, AGM rights — all yours." },
          { title: "Pay-as-you-use",        body: "Interest only on the daily drawn balance. No EMI. No pre-payment penalty." },
          { title: "10-min top-up",        body: "Pledge more shares to increase your limit anytime — fully self-serve via the JioCredit app." },
          { title: "Margin-call cure window", body: "5–7 working days to either pledge more or pay down — never a surprise liquidation." },
        ],
      }}
      eligibility={{
        eyebrow: "Who qualifies",
        title: "Indian resident, individual demat, top-list securities.",
        qualifies: [
          "Indian resident, age 18+ (60 cap on some lenders)",
          "Active NSDL demat with pledgeable holdings (CDSL on Mirae)",
          "Holdings include top-500 equities or large-cap MFs",
          "PAN linked to demat (mandatory)",
          "Bank account in your name for OD credit",
        ],
        also: [
          "Joint demat — Mirae case-by-case; JioCredit individual only",
          "Corporate / HUF / trust — Mirae case-by-case",
          "Holdings under ₹2 L — below the lender minimum",
        ],
      }}
      process={[
        { stage: "Min 0",  title: "e-KYC + demat link", body: "PAN, Aadhaar e-KYC, NSDL DP linkage. Live selfie. All in-app." },
        { stage: "Min 5",  title: "Portfolio scan",     body: "Pledgeable holdings auto-detected; LTV applied per-script." },
        { stage: "Min 10", title: "Pledge + OD live",   body: "Electronic pledge to lender's DP; sanctioned limit credited to bank account." },
        { stage: "Anytime", title: "Draw / repay",      body: "Any portion, any time. Interest on drawn balance only." },
      ]}
      faqs={[
        { q: "Why JioCredit and not a bank for LAS?",         a: "Banks take 5–10 working days for LAS sanction; JioCredit is genuinely T+1 because the pledge is electronic via NSDL. For amounts > ₹5 Cr or MF-heavy portfolios, Mirae is the right route." },
        { q: "What happens if the market drops sharply?",     a: "Lender monitors LTV daily. If your portfolio falls and LTV breaches the cap, you get a top-up call — 5–7 working days to either pledge more securities or pay down the OD." },
        { q: "Can I sell pledged shares?",                    a: "Not without unpledging first. Repay the corresponding portion of the OD; the lender's app supports partial unpledge." },
        { q: "Is LAS taxable?",                               a: "The loan itself isn't taxable income. Interest paid is generally not tax-deductible unless the borrowing is for business — talk to your CA. The avoided LTCG on pledged shares is the implicit benefit." },
        { q: "Can I pledge mutual funds?",                    a: "Yes — both equity and debt MFs. Debt MFs get up to 75% LTV (highest on the panel). For MF-heavy portfolios, Mirae is usually sharper." },
      ]}
      cta={{
        headline: "Pledge today. Draw tomorrow morning.",
        body: "If you'd rather use your portfolio than sell it, send us your demat snapshot. We'll quote the OD limit + ROI within one working day.",
        primary:   { label: "Open my LAS",          to: "/apply?family=LAS" },
        secondary: { label: "Read more on LAS",     to: "/las" },
      }}
    />
  );
}
