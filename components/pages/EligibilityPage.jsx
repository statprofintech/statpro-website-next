import CalcPageShell from "@/components/CalcPageShell";
import EligibilityCalculator from "@/components/calculators/EligibilityCalculator";

export default function EligibilityPage() {
  return (
    <CalcPageShell
      tag="Eligibility calculator"
      title="See the indicative loan you'd qualify for, in 30 seconds."
      lede="Move the sliders for income (or property value), tenure and rate. We apply the panel's typical FOIR / LTV thresholds and show a realistic ticket size — the actual offer depends on lender, profile and documentation."
      applyHref="/apply"
      applyText="Get an exact quote from 4–5 lenders"
      explainer={
        <>
          <p>
            <strong>Two sizing modes:</strong> for income-based loans (Personal Loan, Business Loan, Home Loan), eligibility is governed by FOIR — your fixed-obligation-to-income ratio after the new EMI. For collateral-based loans (Loan Against Property, Loan Against Rental), eligibility is governed by LTV — loan-to-value of the property or NPV of the rental stream.
          </p>
          <p>
            <strong>Typical FOIR thresholds:</strong> 50% for net-monthly-income borrowers under ₹35,000; 60% for ₹35K–₹1L; 65% for higher-income brackets. Lenders push these limits 5–10% for clean profiles and squeeze them by 5–10% for thin-file borrowers.
          </p>
          <p>
            <strong>Typical LTV caps:</strong> 65% on Loan Against Property (residential or commercial), 50% of property value on Loan Against Rental (and 85% of rental NPV — whichever is lower), 90% on Home Loan under ₹30L tickets.
          </p>
        </>
      }
      related={[
        { to: "/calculators/emi",             title: "EMI calculator",             body: "What's the EMI on the eligible loan?" },
        { to: "/calculators/od-lap",          title: "OD → LAP saving",            body: "Convert an OD against property to amortising LAP." },
        { to: "/calculators/balance-transfer",title: "Balance Transfer break-even",body: "If you already have a loan, see how much a BT saves." },
      ]}
    >
      <EligibilityCalculator />
    </CalcPageShell>
  );
}
