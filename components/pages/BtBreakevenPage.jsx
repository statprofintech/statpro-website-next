import CalcPageShell from "@/components/CalcPageShell";
import BtBreakevenCalculator from "@/components/calculators/BtBreakevenCalculator";

export default function BtBreakevenPage() {
  return (
    <CalcPageShell
      tag="Balance Transfer break-even"
      title="When does a Balance Transfer actually pay for itself?"
      lede="A BT looks great on rate but adds processing fee, legal/technical and stamp duty. This calculator tells you the exact month from which the lower EMI starts saving you real money."
      applyHref="/apply?family=LAP&variant=Balance%20Transfer"
      applyText="Get BT quotes from 11 lenders"
      explainer={
        <>
          <p>
            <strong>Inputs that matter:</strong> outstanding balance, current rate, new rate, remaining tenure, and one-time switch costs (typically 0.5–1.0% processing fee, plus stamp duty on fresh mortgage).
          </p>
          <p>
            <strong>The break-even month</strong> is the point at which cumulative monthly EMI savings equal the upfront switch cost. Past that month, every EMI is pure saving. The bigger the rate spread and the longer the residual tenure, the faster you break even.
          </p>
          <p>
            <strong>Statpro guarantee:</strong> 0% foreclosure on every new Loan Against Property, Loan Against Rental and Home Loan sanction across our partner panel — so when you BT to us, you can BT out again at any time without penalty.
          </p>
        </>
      }
      related={[
        { to: "/calculators/od-lap",      title: "OD → LAP saving",       body: "Convert an Overdraft into amortising LAP and quantify the saving." },
        { to: "/calculators/emi",         title: "EMI calculator",         body: "Monthly outflow at any rate, ticket and tenure combination." },
        { to: "/calculators/eligibility", title: "Eligibility calculator", body: "Indicative loan you'd qualify for, by income or property value." },
      ]}
    >
      <BtBreakevenCalculator />
    </CalcPageShell>
  );
}
