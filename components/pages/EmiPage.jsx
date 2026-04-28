import CalcPageShell from "@/components/CalcPageShell";
import EmiCalculator from "@/components/calculators/EmiCalculator";

export default function EmiPage() {
  return (
    <CalcPageShell
      tag="EMI calculator"
      title="Monthly EMI for any loan, at any rate, over any tenure."
      lede="Standard amortising-EMI calculator. Move the sliders for ticket, rate and tenure — see the EMI, total interest paid and the principal vs interest split."
      applyHref="/apply"
      applyText="Get a real quote"
      explainer={
        <>
          <p>
            <strong>EMI formula:</strong> EMI = P × r × (1+r)<sup>n</sup> / ((1+r)<sup>n</sup> − 1), where P is principal, r is the monthly rate (annual rate / 12 / 100), and n is the tenure in months. The same number is what every bank's amortisation schedule starts with.
          </p>
          <p>
            <strong>How interest behaves:</strong> early in the loan, most of each EMI is interest; as the principal falls, the interest component shrinks and more of each EMI retires the principal. Pre-paying earlier in the tenure saves dramatically more interest than pre-paying later.
          </p>
          <p>
            <strong>Indicative only:</strong> actual lender EMI may differ slightly because of the day-count basis (365 vs 360), date of disbursal and rounding. We always confirm exact EMI on the sanction letter.
          </p>
        </>
      }
      related={[
        { to: "/calculators/od-lap",          title: "OD → LAP saving",            body: "Quantify the saving from switching an OD to a term loan." },
        { to: "/calculators/balance-transfer",title: "Balance Transfer break-even",body: "Months until BT processing fee is recovered through lower EMI." },
        { to: "/calculators/eligibility",     title: "Eligibility calculator",      body: "Maximum loan you'd qualify for at the EMI you can afford." },
      ]}
    >
      <EmiCalculator />
    </CalcPageShell>
  );
}
