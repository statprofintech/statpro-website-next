"use client";

import { Sparkles, BadgePercent, ShieldCheck } from "lucide-react";
import MarketingLandingLayout from "@/components/MarketingLandingLayout";

const PARENT = { label: "Main Home Loan page", to: "/hl" };

const config = {
  hero: {
    eyebrow: "HL · for women borrowers",
    title: "Woman primary borrower or co-applicant?",
    accent: "5–10 bps lower rate, 1% lower stamp duty in WB.",
    lede: "Most lenders offer 5–10 bps lower HL rate when the primary borrower or co-applicant is a woman. West Bengal also offers 1% lower stamp duty (5% vs 6%) on women-name registrations. Together: ~₹2 L saved on a ₹1 Cr property.",
    bullets: [
      "5–10 bps lower HL rate (panel-wide).",
      "1% lower stamp duty in WB on women-name registration.",
      "Joint application with spouse / parent boosts FOIR.",
    ],
    stats: [
      { v: "5–10 bps", l: "Lower HL rate (panel-wide)" },
      { v: "1%",       l: "Lower stamp duty in WB" },
      { v: "₹2 L+",    l: "Total saving on ₹1 Cr property" },
      { v: "Joint",    l: "Co-applicant pools income for FOIR" },
    ],
  },
  pillars: {
    eyebrow: "Why women-borrower HL is sharper",
    title: "Three structural advantages built into the system.",
    items: [
      { icon: BadgePercent, title: "Rate concession",
        body: "HDFC, Bajaj Housing, LIC HF, Aditya Birla all offer 5–10 bps lower rate on women-name HLs. Some offer special schemes (LIC HF Griha Suvidha) that go deeper." },
      { icon: ShieldCheck,  title: "Lower stamp duty in WB",
        body: "West Bengal: 5% stamp duty for women registration vs 6% for men. On a ₹1 Cr property, that's ₹1 L saved upfront. Sole or joint registration in woman's name qualifies." },
      { icon: Sparkles,     title: "FOIR boost via co-applicant",
        body: "Joint HL with woman as co-applicant pools incomes — eligibility ladder jumps. Co-applicant doesn't need to be a property co-owner (though usually is)." },
    ],
  },
  numbers: {
    eyebrow: "What the saving compounds to",
    title: "On a typical ₹1 Cr HL.",
    stats: [
      { v: "5 bps",    l: "Rate concession (panel)",   sub: "10 bps on some schemes" },
      { v: "₹1 L",     l: "Stamp-duty saving (WB)",     sub: "1% lower on ₹1 Cr property" },
      { v: "₹1 L",     l: "Lifetime interest saved",   sub: "5 bps × ₹1 Cr × 20 yrs" },
      { v: "₹2 L+",    l: "Total saving",               sub: "Stamp duty + lifetime interest" },
    ],
  },
  example: {
    eyebrow: "A worked example",
    title: "₹85 L HL for a married couple — wife as primary borrower in WB.",
    narrative: "Salaried couple, husband ₹1.4 L net monthly, wife ₹1.1 L. Joint HL ₹85 L for a ₹1.05 Cr apartment in Salt Lake. Made wife primary borrower (her CIBIL: 791) — unlocks LIC HF Griha Suvidha at 7.15% + 1% lower stamp duty in WB.",
    ledger: [
      { k: "Property cost",                  v: "₹1,05,00,000" },
      { k: "Down-payment",                    v: "₹20,00,000" },
      { k: "HL requested",                    v: "₹85,00,000" },
      { k: "Lender",                          v: "LIC HF Griha Suvidha (women)", highlight: true },
      { k: "Rate (women scheme)",             v: "7.15% floating", highlight: true },
      { k: "Tenure",                           v: "25 years" },
      { k: "EMI",                              v: "₹61,000/mo" },
      { k: "Stamp duty @ 5% (WB women)",      v: "₹5,25,000" },
      { k: "Stamp duty @ 6% (men)",           v: "₹6,30,000" },
      { k: "Stamp duty saved",                v: "₹1,05,000", highlight: true },
      { k: "Lifetime interest saved (vs 7.25%)", v: "≈ ₹1,40,000", highlight: true },
    ],
  },
  eligibility: {
    eyebrow: "Women-borrower HL qualification",
    title: "Same as standard HL — plus the woman primary / co-applicant condition.",
    qualifies: [
      "Woman as sole borrower OR primary borrower in joint application",
      "If joint with spouse: woman should be on both loan + property registration to claim stamp-duty benefit",
      "Salaried with 2+ years' experience OR self-employed with 3+ years' vintage",
      "Net monthly income ≥ ₹35 K (banks) or ₹25 K (HFCs)",
      "Age 21–65 at maturity (extends to 70 with co-applicant)",
      "CIBIL 700+ (banks), 650+ (HFCs)",
    ],
    also: [
      "Stamp duty saving applies only if woman is on the property registration (joint or sole)",
      "Joint application with spouse pools incomes for FOIR — eligibility ladder jumps",
      "Some lenders offer additional concession (₹500 / lakh PF waiver) on women-borrower HLs",
    ],
  },
  faqs: [
    { q: "Does my wife need to earn for the rate concession to apply?",
      a: "No — concession applies whether she's earning or not, as long as she's the primary borrower or co-applicant. Income matters for FOIR (eligibility), but not for the rate concession." },
    { q: "Stamp duty saving — does it apply if husband is also on the registration?",
      a: "Joint registration (husband + wife) gets 5% stamp duty in WB if the woman is on the deed. Solo woman: 5%. Solo man: 6%. The benefit applies to women-name registration regardless of co-owner." },
    { q: "Which lenders offer the deepest women-borrower concession?",
      a: "LIC HF Griha Suvidha goes to floor (7.15%). Bajaj Housing offers 7.15% on women-co-applicant joint HLs. HDFC Bank offers 5 bps below their RLLR floor for women borrowers." },
    { q: "Can I switch my existing HL to a women-borrower scheme via BT?",
      a: "Yes — Balance Transfer with the wife added as primary borrower / co-applicant unlocks the women scheme on the new lender. Often a sharper rate than the original sanction." },
    { q: "What about Section 80EE additional deduction?",
      a: "Section 80EEA gives ₹1.5 L additional interest deduction for first-time buyers (HL sanctioned 2019–2022) — applies regardless of borrower gender. Not specific to women, but stacks on top of standard ₹2 L (Sec 24)." },
  ],
  cta: {
    headline: "Make her the primary borrower. Save ~₹2 L on a ₹1 Cr property.",
    body: "Send your property + income details. We'll route to LIC HF / Bajaj Housing / HDFC for the deepest women-borrower concession and structure the registration for max stamp-duty saving.",
    primary:   { label: "Get a women-borrower HL quote", to: "/apply?family=HL" },
    secondary: { label: "See main HL page",               to: "/hl" },
  },
};

export default function HlWomenBorrowerPageV2() {
  return <MarketingLandingLayout family="HL" parent={PARENT} config={config} />;
}
