import CalcPageShell from "@/components/CalcPageShell";
import LasLtvCalculator from "@/components/calculators/LasLtvCalculator";

export default function LasLtvPage() {
  return (
    <CalcPageShell
      tag="LAS LTV calculator"
      title="How much can you borrow against your shares and mutual funds?"
      lede="Loan-to-Value depends on the security class — top-100 equities at 50%, debt mutual funds up to 75%, sovereign gold bonds around 60%. This calculator applies the right LTV per script tier and shows the OD limit."
      applyHref="/apply?family=LAS&variant=OD%20against%20equities"
      applyText="Open a LAS facility in 10 minutes"
      explainer={
        <>
          <p>
            <strong>LTV by security class:</strong> equities and ETFs are riskier collateral than debt mutual funds, so the lender applies a haircut on equity (50% LTV on top-100, 40% on mid-caps, 0% on sub-list scrips). Debt MFs and bonds get up to 75%. Sovereign Gold Bonds sit in the middle at ~60%.
          </p>
          <p>
            <strong>How disbursal works:</strong> JioCredit pledges your demat holdings electronically via NSDL and credits the OD to your linked bank — typically within 10 minutes of e-KYC. Mirae Asset Financial supports CDSL too and is sharper on mutual-fund-heavy portfolios.
          </p>
          <p>
            <strong>Margin-call cure window:</strong> if the market drops and your portfolio LTV breaches the cap, you have 5–7 working days to either pledge more securities or pay down the OD. Forced liquidation is a last resort, never a surprise.
          </p>
        </>
      }
      related={[
        { to: "/calculators/emi",         title: "EMI calculator",         body: "If you'd rather take a term loan instead of a revolving OD." },
        { to: "/calculators/eligibility", title: "Eligibility calculator", body: "Indicative loan from income or property — for non-LAS routes." },
        { to: "/calculators/od-lap",      title: "OD → LAP saving",        body: "If you also have property, compare LAP vs LAS as a funding source." },
      ]}
    >
      <LasLtvCalculator />
    </CalcPageShell>
  );
}
