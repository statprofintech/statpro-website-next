// Pure finance helpers — used by every calculator on the site.
// All money in INR (rupees as integers OR floats; convert on display).

/** EMI for a fixed-rate, fully-amortising loan. */
export function emi(principal, annualRatePct, months) {
  if (months <= 0 || principal <= 0) return 0;
  if (annualRatePct <= 0) return principal / months;
  const r = annualRatePct / 12 / 100;
  return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
}

/** Total interest paid over the life of the loan. */
export function totalInterest(principal, annualRatePct, months) {
  return emi(principal, annualRatePct, months) * months - principal;
}

/** Compute side-by-side comparison and savings. */
export function compareLoans({ principal, currentRatePct, newRatePct, currentMonths, newMonths }) {
  const cur = {
    emi: emi(principal, currentRatePct, currentMonths),
    interest: totalInterest(principal, currentRatePct, currentMonths),
    months: currentMonths,
  };
  const nxt = {
    emi: emi(principal, newRatePct, newMonths),
    interest: totalInterest(principal, newRatePct, newMonths),
    months: newMonths,
  };
  return {
    current: cur,
    next: nxt,
    monthlyEmiSaving: cur.emi - nxt.emi,
    totalInterestSaving: cur.interest - nxt.interest,
    interestSavingPct: cur.interest === 0 ? 0 : ((cur.interest - nxt.interest) / cur.interest) * 100,
  };
}

/**
 * The flagship StatPro calculation: OD-pathway vs LAP-pathway.
 *
 *   OD path (status quo): you draw `utilizationPct` of `odLimit`, pay only
 *   interest on it month-on-month. After `tenureYears` you have paid
 *   `drawn × odRate × years` in interest, AND you still owe the drawn principal.
 *
 *   LAP path (proposed): take a term loan of `drawn` at `lapRate` for the same
 *   tenure. Pay an EMI; principal amortises to zero by end-of-tenure.
 *
 * Returns interest-paid for each, and the savings — both on a strict
 * interest-cost basis AND on a "true cost of capital" basis (which adds back
 * the OD principal that's still outstanding).
 */
export function compareODtoLAP({
  odLimit,
  utilizationPct,
  odRatePct,
  lapRatePct,
  tenureYears,
}) {
  const drawn = odLimit * (utilizationPct / 100);
  const tenureMonths = tenureYears * 12;

  // OD: interest only, paid monthly. Principal does not amortise.
  // Approximate at constant utilisation across tenure.
  const odInterestPerYear = drawn * (odRatePct / 100);
  const odInterestTotal = odInterestPerYear * tenureYears;
  const odPrincipalOutstandingAtEnd = drawn;
  const odTrueCost = odInterestTotal + odPrincipalOutstandingAtEnd;

  // LAP: term loan on the drawn amount, fully amortised.
  const lapEmi = emi(drawn, lapRatePct, tenureMonths);
  const lapTotalPaid = lapEmi * tenureMonths;
  const lapInterestTotal = lapTotalPaid - drawn;
  const lapPrincipalOutstandingAtEnd = 0;
  const lapTrueCost = lapTotalPaid; // principal + interest, all paid

  // Headline saving = interest saved (most defensible number)
  const interestSaving = odInterestTotal - lapInterestTotal;
  const interestSavingPct = odInterestTotal === 0 ? 0 : (interestSaving / odInterestTotal) * 100;

  // True cost saving = OD true cost - LAP true cost
  // (this also captures the value of having extinguished the principal)
  const trueCostSaving = odTrueCost - lapTrueCost;
  const trueCostSavingPct = odTrueCost === 0 ? 0 : (trueCostSaving / odTrueCost) * 100;

  return {
    drawn,
    tenureYears,
    od: {
      ratePct: odRatePct,
      interestPerYear: odInterestPerYear,
      interestTotal: odInterestTotal,
      principalOutstandingAtEnd: odPrincipalOutstandingAtEnd,
      trueCost: odTrueCost,
    },
    lap: {
      ratePct: lapRatePct,
      emi: lapEmi,
      totalPaid: lapTotalPaid,
      interestTotal: lapInterestTotal,
      principalOutstandingAtEnd: lapPrincipalOutstandingAtEnd,
      trueCost: lapTrueCost,
    },
    interestSaving,
    interestSavingPct,
    trueCostSaving,
    trueCostSavingPct,
  };
}

/** Format INR. Switches to lakhs / crores for big amounts. */
export function fmtINR(n, { decimals = 0 } = {}) {
  if (n == null || isNaN(n)) return "—";
  const abs = Math.abs(n);
  if (abs >= 1e7) return `₹${(n / 1e7).toFixed(decimals + (abs >= 1e8 ? 0 : 2))} Cr`;
  if (abs >= 1e5) return `₹${(n / 1e5).toFixed(decimals + 1)} L`;
  if (abs >= 1e3) return `₹${Math.round(n / 1e3)}K`;
  return `₹${Math.round(n)}`;
}

/** Compact rupee with full precision but Indian comma grouping. */
export function fmtINRFull(n) {
  if (n == null || isNaN(n)) return "—";
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

export function fmtPct(n, decimals = 2) {
  if (n == null || isNaN(n)) return "—";
  return `${n.toFixed(decimals)}%`;
}
