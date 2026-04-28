import LegalPageLayout from "@/components/LegalPageLayout"
import { COMPANY } from "@/lib/company";

const sections = [
  {
    id: "policy",
    title: "Our grievance redressal commitment",
    body: (
      <>
        <p>
          {COMPANY.legalName} is committed to fair, transparent and time-bound resolution of every customer grievance. This Policy explains the channels available to you, the timelines we follow, and the escalation matrix you can rely on.
        </p>
        <p>
          We follow the principles of the RBI Master Circular on Customer Service in Banks, the RBI Master Direction on the Internal Ombudsman Scheme, and the SEBI / AMFI grievance norms applicable to mutual fund distributors.
        </p>
      </>
    ),
  },
  {
    id: "what-counts",
    title: "What counts as a grievance",
    body: (
      <>
        <p>For the purpose of this Policy, a grievance includes any complaint about:</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Conduct of our advisor, employee or authorised representative.</li>
          <li>Quality, timeliness or transparency of the credit-advisory or placement service.</li>
          <li>Deficiency in mutual-fund distribution service or transaction errors.</li>
          <li>Disclosure, communication or fee-related concerns.</li>
          <li>Data-handling, privacy or DPDP-related concerns.</li>
        </ul>
        <p>
          Complaints regarding the loan terms, charges or service of a partner lender after disbursal should additionally be raised with the lender's grievance officer (we will guide you to the right channel).
        </p>
      </>
    ),
  },
  {
    id: "level-1",
    title: "Level 1 — Your single advisor",
    body: (
      <>
        <p>
          Your assigned advisor at {COMPANY.brand} is your first point of contact. Most queries are resolved within the same working day and almost all within <strong>3 working days</strong>.
        </p>
        <p>You can reach us at:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Email: <a href={`mailto:${COMPANY.email}`} className="text-blue underline">{COMPANY.email}</a></li>
          <li>Phone: <a href={`tel:${COMPANY.phoneHref}`} className="text-blue underline tabular">{COMPANY.phone}</a></li>
        </ul>
      </>
    ),
  },
  {
    id: "level-2",
    title: "Level 2 — Grievance Redressal Officer",
    body: (
      <>
        <p>
          If your concern is not resolved at Level 1 within <strong>7 working days</strong>, or you are not satisfied with the resolution, please write to our Grievance Redressal Officer (GRO).
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Designation:</strong> Grievance Redressal Officer</li>
          <li><strong>Email:</strong> <a href={`mailto:${COMPANY.email}`} className="text-blue underline">{COMPANY.email}</a> (subject line: “Grievance — Level 2”)</li>
          <li><strong>Phone:</strong> <a href={`tel:${COMPANY.phoneHref}`} className="text-blue underline tabular">{COMPANY.phone}</a></li>
          <li><strong>Postal:</strong> Grievance Redressal Officer, {COMPANY.legalName}, {COMPANY.headOffice.join(", ")}.</li>
        </ul>
        <p>The GRO will acknowledge your complaint within <strong>2 working days</strong> and provide a substantive response within <strong>15 working days</strong>.</p>
      </>
    ),
  },
  {
    id: "level-3",
    title: "Level 3 — Partner-bank ombudsman",
    body: (
      <p>
        For complaints concerning a loan placed through us, the partner bank or NBFC has its own Internal Ombudsman or Principal Nodal Officer. If your grievance relates to the loan account, sanction or charges levied by the lender, we will assist you in escalating to the lender's ombudsman.
      </p>
    ),
  },
  {
    id: "level-4",
    title: "Level 4 — RBI Banking Ombudsman / SEBI SCORES",
    body: (
      <>
        <p>If your concern remains unresolved after 30 days, you may escalate further:</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>
            <strong>RBI Complaint Management System (CMS) — Sachet:</strong>{" "}
            <a href="https://sachet.rbi.org.in/" target="_blank" rel="noreferrer" className="text-blue underline">https://sachet.rbi.org.in/</a> — for complaints related to the partner bank, NBFC or HFC.
          </li>
          <li>
            <strong>SEBI SCORES:</strong>{" "}
            <a href="https://scores.sebi.gov.in/" target="_blank" rel="noreferrer" className="text-blue underline">https://scores.sebi.gov.in/</a> — for complaints related to mutual funds or AMCs.
          </li>
          <li>
            <strong>AMFI:</strong>{" "}
            <a href="https://www.amfiindia.com/investor-corner/investor-center/Investor-Complaints.html" target="_blank" rel="noreferrer" className="text-blue underline">AMFI Investor Complaints</a> — for distributor-related complaints.
          </li>
          <li>
            <strong>DPDP Board of India:</strong> for complaints under the Digital Personal Data Protection Act, 2023.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "what-to-include",
    title: "What to include in your complaint",
    body: (
      <>
        <p>To help us resolve your concern quickly, please include:</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Your full name, registered mobile number and email.</li>
          <li>Application reference / loan account number / MF folio (if applicable).</li>
          <li>A clear description of the issue and dates / amounts involved.</li>
          <li>Copies of any relevant documents or correspondence.</li>
          <li>The resolution you are seeking.</li>
        </ul>
      </>
    ),
  },
  {
    id: "tracking",
    title: "How we track and respond",
    body: (
      <p>
        Every grievance is logged in our internal grievance register with a unique ticket ID, monitored against the SLAs above, and reviewed monthly by senior management. We retain grievance records for at least 5 years, in line with applicable record-keeping obligations.
      </p>
    ),
  },
];

export default function GrievancePage() {
  return (
    <LegalPageLayout
      tag="GRIEVANCE"
      eyebrow="Legal · Grievance Redressal Policy"
      title="Four levels of escalation — with a clock attached to every step."
      lede="If something has gone wrong, here is exactly who to contact, by when to expect a response, and how to escalate further. We treat the timelines below as commitments, not aspirations."
      lastUpdated="27 April 2026"
      sections={sections}
    />
  );
}
