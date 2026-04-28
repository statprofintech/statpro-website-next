"use client";

import LandingPageLayout from "@/components/LandingPageLayout";
const PARENT = { label: "All Personal Loan", to: "/pl" };

export default function PlDebtConsolidationPage() {
  return (
    <LandingPageLayout
      theme="pl"
      tag="PL · DEBT CONSOLIDATION"
      parent={PARENT}
      hero={{
        eyebrow: "Personal Loan · debt consolidation",
        headline: "Five EMIs at /36% APR/ → one EMI at 11.99%.",
        lede: "Credit-card revolves and small-ticket EMIs quietly add up to 36–48% effective APR. We consolidate them into a single panel-floor PL — one EMI, one date, sharper rate. Most files cut effective interest by 50–60%.",
        ctaPrimary: { label: "Consolidate my debt", to: "/apply?family=PL" },
        ctaSecondary: { label: "See PL main page", to: "/pl" },
        badge: "02 / 03",
        stats: [
          { v: "11.99%", l: "Median consolidated rate" },
          { v: "60%",    l: "Typical APR cut" },
          { v: "₹40 L",  l: "Maximum consolidation ticket" },
          { v: "T+2",    l: "Median sanction TAT" },
        ],
      }}
      problem={{
        eyebrow: "The credit-card slow burn",
        title: "Carrying ₹3 L on credit cards costs you ₹1.08 L a year — and you barely notice.",
        body: "Credit-card revolves charge 3–4% per month — that's 36–48% effective APR. Small-ticket EMIs (consumer durables, BNPL, personal loans) often sit at 18–24%. When you carry these for months, the interest compounds and your minimum-payment trap deepens. A consolidated PL at 12% breaks the trap — one EMI, one date, predictable payoff timeline.",
        marks: [
          "Credit cards charge 36–48% APR on revolves — disclosed in fine print, ignored in practice.",
          "Minimum payments on cards barely cover interest — principal stays unchanged for months.",
          "Multiple EMIs on different dates strain monthly cash flow management.",
          "DPDP-aligned credit reporting now penalises high credit-utilisation more sharply on CIBIL.",
        ],
      }}
      solution={{
        eyebrow: "How consolidation works",
        title: "One PL, paid out to your existing creditors, single EMI to one lender.",
        steps: [
          { n: "I",   title: "Liability scan",     body: "We map your existing credit cards, EMIs and small-ticket loans into a total-liability picture and effective-APR calculation." },
          { n: "II",  title: "Sized PL placement",  body: "Pitch a PL ticket sized to your total liability across 6 panel lenders. Sharpest rate placed; foreclosure-friendly variant chosen." },
          { n: "III", title: "Direct creditor payoff", body: "Disbursal split across creditors directly — credit-card outstandings paid off, EMI accounts foreclosed, small loans closed. Single EMI to the new PL only." },
        ],
      }}
      proof={{
        eyebrow: "What consolidation actually saves",
        title: "Across our 2025 PL debt-consolidation files.",
        stats: [
          { v: "11.99%", l: "Median consolidated rate", sub: "Vs 36–48% on cards" },
          { v: "60%",    l: "Typical APR cut",           sub: "Effective interest savings" },
          { v: "₹4.8 L", l: "Average annual saving",     sub: "On ₹15 L card balance file" },
          { v: "T+2",    l: "Median sanction TAT",       sub: "On clean salaried files" },
        ],
      }}
      example={{
        eyebrow: "A worked example",
        title: "₹15 L consolidation across 4 cards + 2 EMIs into a single 11.99% PL.",
        narrative: "A salaried marketing manager carrying ₹8 L across 4 credit cards (avg 38% APR), ₹4 L of consumer-durable EMIs (avg 22% APR) and ₹3 L of an old PL at 16%. Total monthly outflow: ₹52K, with most going to interest. We consolidated into a single ₹15 L PL at 11.99%, 4-year tenure, EMI ₹39.5K. Saved ₹12.5K/month, and the principal actually starts coming down.",
        ledger: [
          { k: "Credit-card balance",      v: "₹8,00,000 @ 38% APR" },
          { k: "Consumer-durable EMI",     v: "₹4,00,000 @ 22% APR" },
          { k: "Existing PL balance",      v: "₹3,00,000 @ 16% APR" },
          { k: "Total liability",           v: "₹15,00,000" },
          { k: "Old monthly outflow",      v: "₹52,000" },
          { k: "Consolidated PL rate",     v: "11.99%", highlight: true },
          { k: "New EMI",                  v: "₹39,500" },
          { k: "Monthly saving",           v: "₹12,500", highlight: true },
        ],
      }}
      benefits={{
        eyebrow: "What you get",
        title: "Why consolidation beats minimum-payment whack-a-mole.",
        items: [
          { title: "One EMI, one date",         body: "Cash-flow management goes from juggling 6 dates to managing 1. Mental load drops, missed-payment risk drops to near-zero." },
          { title: "Real principal reduction",  body: "Your monthly EMI now actually pays down principal — not just interest. Predictable payoff timeline, no rolling debt." },
          { title: "CIBIL improves over 6 mo",  body: "Closing credit-card balances drops your credit-utilisation ratio, which improves CIBIL by 30–60 points within 6 months." },
          { title: "Foreclosure-friendly",      body: "Floating-rate PL = 0% foreclosure penalty (RBI). When you receive a bonus or windfall, pre-pay any time at no charge." },
        ],
      }}
      eligibility={{
        eyebrow: "Who qualifies",
        title: "What consolidation files actually need.",
        qualifies: [
          "Salaried with 1+ year of consistent salary credit",
          "Net monthly take-home ₹50K+ (consolidation typically requires headroom)",
          "CIBIL 700+ (high credit-card utilisation may have pulled it lower — we work with 650+ on NBFC route)",
          "PAN, Aadhaar, last 3 salary slips, last 6 months' bank statement",
          "Clear list of existing liabilities to be consolidated (account numbers, balances, lender names)",
        ],
        also: [
          "Self-employed with high credit-card revolves and 3+ years of vintage",
          "Joint applications (spouse co-applicant) for higher consolidation ticket",
          "Files with 1–2 missed payments in the last 6 months — handled, with conservative pricing",
        ],
      }}
      process={[
        { stage: "Day 0",   title: "Liability scan",          body: "30-min call: list every existing card balance, EMI, small loan. We compute effective APR + consolidation savings." },
        { stage: "Day 0–1", title: "Parallel pitch",          body: "6 panel lenders pitched. Sharpest rate confirmed; foreclosure clause ensured floating-rate." },
        { stage: "Day 1–2", title: "Sanction + disbursal split", body: "Loan agreement digitally signed. Disbursal split across your existing creditors as direct payments." },
        { stage: "Day 2–7", title: "Account closure verification", body: "We confirm each creditor account is closed / paid. CIBIL updates over the next 6 weeks reflect the consolidation." },
      ]}
      faqs={[
        { q: "Will the disbursal go to me or directly to my creditors?", a: "Directly to your creditors. We coordinate with each (cards, EMI accounts, existing PL) and the lender disburses split-payments to close them. You only get any residual amount left over." },
        { q: "What happens to my closed credit cards?",                  a: "We recommend keeping the credit cards open (with zero balance) to maintain your credit history length, but you can close them if you prefer. Closing too many at once can briefly dip your CIBIL by 10–20 points before the consolidation effect kicks in." },
        { q: "Will my CIBIL improve?",                                    a: "Yes — typically 30–60 points within 6 months. Credit-utilisation dropping from 80–90% (when cards are revolving) to under 30% is the largest single CIBIL-positive event for most consolidation files." },
        { q: "Is the rate fixed or floating?",                            a: "We default to floating to ensure 0% foreclosure under RBI rules. Fixed-rate PL is an option (slightly lower starting rate) but locks in a 2–4% pre-payment penalty." },
        { q: "Can I include a co-applicant?",                              a: "Yes — and we recommend it where applicable. Spouse / parent co-applicant improves the consolidation ticket and often pulls the rate sharper. Both incomes counted; both CIBIL scores reviewed." },
      ]}
      cta={{
        headline: "Send your liability list. We'll model the saving in 30 min.",
        body: "List every credit card balance, EMI account and small loan you'd like to consolidate. We'll come back within one working day with the consolidation ticket, ROI and monthly saving.",
        primary:   { label: "Consolidate my debt", to: "/apply?family=PL" },
        secondary: { label: "Read more on PL",      to: "/pl" },
      }}
    />
  );
}
