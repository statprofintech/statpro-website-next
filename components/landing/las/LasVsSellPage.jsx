"use client";

import LandingPageLayout from "@/components/LandingPageLayout";
const PARENT = { label: "All LAS", to: "/las" };

export default function LasVsSellPage() {
  return (
    <LandingPageLayout
      theme="las"
      tag="LAS · VS SELL"
      parent={PARENT}
      hero={{
        eyebrow: "Loan Against Securities · vs selling shares",
        headline: "Need cash? /Pledge — don't sell./",
        lede: "Selling crystallises LTCG, locks in today's price and forfeits the next leg of compounding. Pledging via LAS keeps the position intact, uses the asset as collateral, and costs you only the interest on what you actually draw.",
        ctaPrimary: { label: "Open my LAS",        to: "/apply?family=LAS" },
        ctaSecondary: { label: "See LAS main page", to: "/las" },
        badge: "03 / 03",
        stats: [
          { v: "10%",   l: "LTCG saved" },
          { v: "0%",    l: "Pre-payment penalty" },
          { v: "Any %", l: "Draw amount" },
          { v: "Daily", l: "Interest-only billing" },
        ],
      }}
      problem={{
        eyebrow: "What selling actually costs",
        title: "The triple cost of selling for liquidity.",
        body: "Selling part of a long-held equity portfolio for a short-term need triggers three costs in sequence — and the third is the one nobody talks about until it's too late.",
        marks: [
          "10% LTCG on equity gains above ₹1 L per FY — direct, immediate.",
          "Locked-in exit price — if the market is flat or down, you're selling at a bad print.",
          "Re-entry cost — by the time the cash need is over, the market has often moved 5–15% higher.",
          "On a ₹50 L sale of long-held shares, the round-trip cost can easily be ₹8–₹12 L for a 6-month liquidity need.",
        ],
      }}
      solution={{
        eyebrow: "How LAS sidesteps all three costs",
        title: "Pledge → draw → repay → unpledge. Position untouched.",
        steps: [
          { n: "I",   title: "Pledge",   body: "Electronic pledge via NSDL — your shares stay in your demat, with a lender lien." },
          { n: "II",  title: "Draw",     body: "OD limit credited to your bank. Draw any portion any time. Interest only on drawn balance." },
          { n: "III", title: "Repay & unpledge", body: "Pay down the OD as cash flows return. Unpledge happens automatically as you repay." },
        ],
      }}
      proof={{
        eyebrow: "The math, on a real example",
        title: "₹50 L liquidity need against a ₹2 Cr long-held equity portfolio.",
        stats: [
          { v: "₹4 L",   l: "LTCG avoided",          sub: "10% on ~₹40 L of long-term gain" },
          { v: "₹8–12 L", l: "Re-entry cost avoided", sub: "Average 6-mo market move" },
          { v: "≈ ₹2.3 L", l: "Total LAS interest cost", sub: "9.25% on ₹50 L for 6 months" },
          { v: "₹10–14 L", l: "Net saving from LAS",    sub: "Sell-and-rebuy vs pledge" },
        ],
      }}
      example={{
        eyebrow: "A worked side-by-side",
        title: "₹50 L need, ₹2 Cr portfolio, 6-month repayment plan.",
        narrative: "Promoter holds ₹2 Cr in top-100 equities, average cost ₹1.6 Cr (₹40 L of LT gains). Needs ₹50 L for 6 months. Two paths: (a) sell ₹50 L of shares + pay LTCG, (b) pledge entire portfolio + draw ₹50 L on LAS. Math below.",
        ledger: [
          { k: "Path A — Sell ₹50 L of shares", v: "" },
          { k: "  LTCG on proportional gain",   v: "₹4,00,000" },
          { k: "  Lost compounding (6 mo @ 10%)", v: "₹2,50,000" },
          { k: "  Re-entry cost (avg 8% rally)", v: "₹4,00,000" },
          { k: "  Path A total cost",           v: "≈ ₹10,50,000" },
          { k: "Path B — Pledge & draw ₹50 L LAS", v: "", highlight: true },
          { k: "  Interest @ 9.25% × 6 mo",     v: "≈ ₹2,31,000" },
          { k: "  Processing fee (0.5%)",        v: "₹25,000" },
          { k: "  Path B total cost",            v: "≈ ₹2,56,000", highlight: true },
          { k: "Net saving — pledge vs sell",   v: "≈ ₹7,94,000",  highlight: true },
        ],
      }}
      benefits={{
        eyebrow: "What you keep",
        title: "Why pledging beats selling — almost always.",
        items: [
          { title: "Position intact",     body: "Pledged shares stay in your demat. Dividends, bonus issues, AGM voting — all yours." },
          { title: "No LTCG trigger",      body: "Pledging is not a sale. No tax event. No 10% LTCG on your gains." },
          { title: "Pay only on drawn",    body: "OD revolving — interest charged only on the daily drawn balance, not the sanctioned limit." },
          { title: "Compounding continues", body: "Your shares keep working. The next bull-leg is still yours, even while the OD is live." },
        ],
      }}
      eligibility={{
        eyebrow: "When LAS makes the most sense",
        title: "The clear pledge-vs-sell decision tree.",
        qualifies: [
          "Need cash for < 2 years (LAS shines on shorter horizons; longer horizons may favour partial sale)",
          "Long-held equity with significant LTCG — selling triggers tax",
          "Portfolio is in your name (individual demat, NSDL preferred for JioCredit speed)",
          "You're confident in the position long-term — pledging assumes you don't want to exit",
          "The portfolio is large enough — ≥ ₹5 L of pledgeable holdings",
        ],
        also: [
          "If the position is already overweight + you wanted to trim anyway, selling can be the right call",
          "If you're certain the market will fall in your repayment window, selling now hedges the LAS interest cost",
          "If LAS interest rate exceeds your conservative return expectation, the math flips — re-evaluate",
        ],
      }}
      process={[
        { stage: "Min 0",  title: "e-KYC + demat link", body: "PAN, Aadhaar, NSDL DP details, live selfie. Paperless." },
        { stage: "Min 5",  title: "Portfolio scan",     body: "Pledgeable holdings auto-detected; LTV applied per-script." },
        { stage: "Min 10", title: "OD live",            body: "Sanctioned limit credited to your linked bank as a revolving overdraft." },
        { stage: "Anytime", title: "Draw / repay / unpledge", body: "Use any portion, repay any time, unpledge happens automatically as you repay." },
      ]}
      faqs={[
        { q: "What if the LAS rate exceeds my equity return?",   a: "It probably won't over a long horizon, but for short LAS draws (< 1 year), interest cost is small in absolute terms and almost always smaller than LTCG + re-entry cost. Run the numbers on your actual ticket." },
        { q: "Can I get LAS against shares I haven't held long?", a: "Yes — there's no minimum holding period for LAS pledging. The lender cares about the script being on the approved list, not how long you've held it." },
        { q: "What if I want to sell some pledged shares anyway?", a: "Repay the proportional OD first → unpledge → sell. The lender app supports partial unpledge in one flow." },
        { q: "What about TDS on dividends from pledged shares?",   a: "Dividends are credited to your bank as usual; TDS applies normally — pledging doesn't change tax treatment of dividend income." },
        { q: "Can I pledge ESOP shares or RSUs?",                  a: "Once vested and credited to your demat, yes — same as any other equity. Unvested options aren't pledgeable until they vest and land in demat." },
      ]}
      cta={{
        headline: "Pledge today. Keep the position. Keep the LTCG.",
        body: "Send us your demat snapshot and the cash amount + horizon. We'll quote LAS pricing within one working day and run the pledge-vs-sell math for your specific file.",
        primary:   { label: "Open my LAS",          to: "/apply?family=LAS" },
        secondary: { label: "Read more on LAS",     to: "/las" },
      }}
    />
  );
}
