"use client";

import LandingPageLayout from "@/components/LandingPageLayout";
const PARENT = { label: "All LAS", to: "/las" };

export default function LasMarginCallPage() {
  return (
    <LandingPageLayout
      theme="las"
      tag="LAS · MARGIN-CALL"
      parent={PARENT}
      hero={{
        eyebrow: "Loan Against Securities · drawdown protection",
        headline: "Margin call? /Cure window of 5–7 days,/ no auto-liquidation.",
        lede: "Our LAS panel runs a daily LTV check, but the moment your portfolio dips below the cap, you get a 5–7 working-day cure window. Pledge more securities, repay a portion, or roll. Forced sale is a last resort — never a surprise.",
        ctaPrimary: { label: "Get a panel-comparison quote", to: "/apply?family=LAS" },
        ctaSecondary: { label: "See LAS main page", to: "/las" },
        badge: "02 / 03",
        stats: [
          { v: "5–7 d", l: "Cure window" },
          { v: "Daily", l: "LTV monitoring" },
          { v: "0",     l: "Surprise liquidations" },
          { v: "App",   l: "Self-serve top-up" },
        ],
      }}
      problem={{
        eyebrow: "What broker MTF and many LAS providers do",
        title: "Same-day forced sale. No cure window. No notice in time.",
        body: "Brokerage margin-trading facilities and some LAS lenders auto-liquidate the same trading day if LTV breaches. By the time you see the SMS, the position is gone — often at the day's low.",
        marks: [
          "Broker MTF: T+0 forced sale on margin breach.",
          "Some LAS lenders: T+1 sale, no replacement window.",
          "JioCredit + Mirae: 5–7 working-day cure window before any sale.",
          "You can use that window to pledge more, repay a portion, or wait out a knee-jerk dip.",
        ],
      }}
      solution={{
        eyebrow: "How the cure window works",
        title: "A real protocol — not a marketing line.",
        steps: [
          { n: "I",   title: "LTV breach detected (T)",      body: "Daily portfolio scan; if LTV exceeds the cap, you get an SMS + email + in-app alert with the shortfall amount." },
          { n: "II",  title: "Cure window opens (T+1)",      body: "5–7 working days to either pledge more securities (1-tap in app) or repay a portion of the OD." },
          { n: "III", title: "Resolution (T+5 to T+7)",      body: "If LTV restored, no sale. If not, lender liquidates only the minimum required to restore LTV — not the whole portfolio." },
        ],
      }}
      proof={{
        eyebrow: "What the policy actually delivers",
        title: "Audited cure-window outcomes from the panel.",
        stats: [
          { v: "5–7 d",   l: "Standard cure window",    sub: "From breach SMS to action deadline" },
          { v: ">90%",    l: "Cured without sale",       sub: "Most clients pledge more or partial-repay" },
          { v: "Min sale", l: "Liquidation policy",       sub: "Only the shortfall, not the whole pledge" },
          { v: "0%",      l: "Penalty for cure",          sub: "No fees on top-up pledge or partial repay" },
        ],
      }}
      example={{
        eyebrow: "A worked example",
        title: "Market drops 12% on Friday. Borrower's ₹1 Cr OD on a ₹2 Cr portfolio is now in breach.",
        narrative: "₹2 Cr top-100 portfolio, 50% LTV → ₹1 Cr OD limit, ₹85 L drawn. Market drops 12% over a week — portfolio now ₹1.76 Cr, LTV would need 48.3% — a breach. SMS sent Friday EOD. Cure window: 5 working days. Borrower pledges ₹25 L of debt MFs (75% LTV = ₹18.75 L extra limit) on Monday. LTV restored Tuesday. No sale. Market recovered 8% by next Friday.",
        ledger: [
          { k: "Initial portfolio",           v: "₹2,00,00,000" },
          { k: "OD limit (50% LTV)",          v: "₹1,00,00,000" },
          { k: "OD drawn",                    v: "₹85,00,000" },
          { k: "Portfolio after 12% dip",     v: "₹1,76,00,000" },
          { k: "Required pledge for ₹85 L",   v: "₹1,70,00,000 @ 50% — short ₹6 L" },
          { k: "Cure: pledge ₹25 L debt MFs", v: "+₹18,75,000 limit", highlight: true },
          { k: "Forced sale",                 v: "₹0", highlight: true },
          { k: "Days to cure",                v: "2 working days" },
        ],
      }}
      benefits={{
        eyebrow: "What protects you",
        title: "How a cure window changes the math.",
        items: [
          { title: "Time to act",          body: "5–7 working days is enough to evaluate, pledge or partial-repay — not just react to a Friday-evening SMS." },
          { title: "Min-sale policy",      body: "If liquidation does happen, only the shortfall is sold — not the whole pledge. Your remaining position stays intact." },
          { title: "Self-serve top-up",    body: "1-tap in the lender app to pledge more securities. No paperwork, no branch visit, no relationship-manager dependency." },
          { title: "No cure-fee penalty",  body: "Pledging more or partial repay during the cure window costs nothing. The structure is built for it." },
        ],
      }}
      eligibility={{
        eyebrow: "When the cure window matters most",
        title: "Borrower types who benefit the most.",
        qualifies: [
          "Drawn LAS at 70%+ utilisation — close to the cap, so dips can trigger breaches",
          "Single-script concentration — small index moves cause large portfolio swings",
          "Equity-heavy pledge — debt MFs are far more stable; equity needs the cure window",
          "Active borrowers who'd rather restore LTV than pay down the OD",
        ],
        also: [
          "Always pledge a mix — adding 20% debt MFs to an equity pledge dramatically reduces breach probability",
          "Set portfolio alerts at 65% LTV — gives you 6+ working days of runway before any actual breach",
          "Keep ₹3–₹5 L of liquid debt-MF in the same demat — the fastest cure top-up source",
        ],
      }}
      process={[
        { stage: "Day 0", title: "Breach detected",       body: "Daily 6 PM LTV scan; SMS + email + push if portfolio LTV exceeds cap." },
        { stage: "Day 1", title: "Cure window opens",     body: "Action options visible in the app: top-up pledge, partial repay, or contact RM." },
        { stage: "Day 1–7", title: "Self-serve resolution", body: "Most borrowers cure within 2 working days via in-app pledge top-up." },
        { stage: "Day 7+", title: "Min-sale fallback",     body: "Only if uncured: lender sells only the minimum amount required to restore LTV." },
      ]}
      faqs={[
        { q: "What's the LTV trigger for the cure window?",       a: "Lender-specific, but typically: equity pledge cap is 50% LTV; warning at 55% LTV; cure window opens at 60% LTV. Debt MFs have higher caps (75%) with proportionally higher triggers." },
        { q: "Can I extend the cure window beyond 7 days?",        a: "Not standard — but for high-ticket borrowers (>₹5 Cr OD) the RM can sometimes negotiate an extra 3–5 working days. Best to plan around the standard 5–7 day window." },
        { q: "Will pledging more shares hurt my margin in any way?", a: "No. Pledging is non-economic — your shares stay in your demat, you keep dividends and bonuses. The pledge just gives the lender a lien." },
        { q: "What if I don't have more shares to pledge?",         a: "Three options: (1) partial repay the OD with bank funds, (2) bring in debt MF units (75% LTV = more bang per rupee), (3) accept partial liquidation of the minimum needed." },
        { q: "Is this written into the LAS sanction letter?",       a: "Yes — both JioCredit and Mirae document the cure window in the sanction T&Cs. We make sure you have a copy before disbursal." },
      ]}
      cta={{
        headline: "Margin protection, in writing — before you draw.",
        body: "Send us your demat snapshot and we'll quote a panel-comparison with the cure-window terms spelled out side by side.",
        primary:   { label: "Get a panel comparison",  to: "/apply?family=LAS" },
        secondary: { label: "Read more on LAS",         to: "/las" },
      }}
    />
  );
}
