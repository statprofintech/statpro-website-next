import CalcPageShell from "@/components/CalcPageShell";
import SavingsCalculator from "@/components/SavingsCalculator";

export default function OdLapPage() {
  return (
    <CalcPageShell
      tag="OD → LAP comparator"
      title="See the real saving from converting an Overdraft into a Loan Against Property."
      lede="Overdraft pays interest forever — principal stays drawn. LAP pays interest plus principal — so the loan ends. Even at the same rate, the EMI structure saves ~40% over 10 years."
      applyHref="/apply?family=LAP&variant=Fresh"
      applyText="Get LAP quotes from 11 lenders"
      explainer={
        <>
          <p>
            <strong>Why OD pays more interest:</strong> on an Overdraft, you pay only interest each month — your principal stays drawn for the life of the facility. After 10 years on a ₹2 Cr OD at 11.5% with 90% utilisation, you've paid roughly ₹2.07 Cr in interest <em>and you still owe ₹1.8 Cr</em>.
          </p>
          <p>
            <strong>How LAP wins:</strong> a Loan Against Property at the same drawn amount amortises — every EMI carries both interest and principal, and the principal balance falls every month. By year 10, the loan is extinguished. Same drawn ₹1.8 Cr at 7.90% over 10 years = ~₹84 L total interest. <em>Saving on interest alone: ~₹1.2 Cr</em>; on true cost of capital (interest + outstanding principal): ~₹3 Cr.
          </p>
          <p>
            <strong>Sanity check:</strong> the calculator above does not assume any margin call, OD usage drop, or rate cut on the OD side. Real-world ODs almost always cost more than the model shows once you factor in renewal fees, processing fees on enhancement, and rate hardening over the cycle.
          </p>
        </>
      }
      related={[
        { to: "/calculators/balance-transfer", title: "Balance Transfer break-even", body: "Months to recover BT processing fee through lower EMI." },
        { to: "/calculators/emi",              title: "EMI calculator",              body: "Standard amortising EMI for any rate, ticket and tenure." },
        { to: "/calculators/eligibility",      title: "Eligibility calculator",      body: "Indicative ticket size from income or property value." },
      ]}
    >
      <SavingsCalculator />
    </CalcPageShell>
  );
}
