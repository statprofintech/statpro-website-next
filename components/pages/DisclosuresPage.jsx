import LegalPageLayout from "@/components/LegalPageLayout"
import { COMPANY } from "@/lib/company";

const sections = [
  {
    id: "registration",
    title: "Corporate identity",
    body: (
      <>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Legal name:</strong> {COMPANY.legalName}</li>
          <li><strong>Brand:</strong> {COMPANY.brand}</li>
          <li><strong>CIN:</strong> {COMPANY.cin}</li>
          <li><strong>Head Office:</strong> {COMPANY.headOffice.join(", ")}</li>
          <li><strong>Registered Office:</strong> {COMPANY.regdOffice.join(", ")}</li>
        </ul>
      </>
    ),
  },
  {
    id: "role",
    title: "Our regulatory role",
    body: (
      <>
        <p>
          {COMPANY.brand} acts in two regulated capacities:
        </p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>
            <strong>Direct Selling Agent (DSA):</strong> as a sourcing and placement partner under the DSA framework of each partner bank, NBFC and HFC. We are not a lender ourselves, do not accept deposits, and do not hold customer funds at any stage.
          </li>
          <li>
            <strong>AMFI-registered Mutual Fund Distributor:</strong> with a valid ARN. We distribute mutual fund schemes of multiple AMCs on a non-discretionary basis. We do not manage portfolios, advise on stocks, or offer investment-advisory services regulated under SEBI (Investment Advisers) Regulations, 2013.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "lender-panel",
    title: "Lender panel",
    body: (
      <>
        <p>
          We currently maintain a curated panel of 19 partner lenders across Private Banks, Small Finance Banks, Housing Finance Companies, large NBFCs and SME / LAS-specialist NBFCs. The full panel is published on our <a href="/lenders" className="text-blue underline">Lender Network</a> page.
        </p>
        <p>
          Each partner is RBI-regulated (Banks / NBFCs) or NHB-registered (HFCs), or is an AMFI-registered intermediary (LAS specialists). We do not place loans through unregulated entities, peer-to-peer platforms, or shadow finance.
        </p>
      </>
    ),
  },
  {
    id: "fee",
    title: "Fee structure",
    body: (
      <>
        <p>
          Our placement fee for credit transactions is paid by the partner lender on disbursal — disclosed in the sanction letter. <strong>Customers do not pay {COMPANY.brand} a fee for credit advisory or placement</strong>, unless otherwise expressly agreed in writing.
        </p>
        <p>
          For mutual fund distribution, we receive trail commissions from AMCs, disclosed in your account statement under SEBI / AMFI norms. We follow AMFI Code of Conduct on commission disclosure.
        </p>
      </>
    ),
  },
  {
    id: "indicative-numbers",
    title: "Indicative rates and numbers",
    body: (
      <p>
        Interest rates, ticket sizes, tenures, processing fees and any savings projections shown on our website (including calculators, panel-floor cards and case studies) are <strong>indicative</strong>. Final terms are determined by the partner lender based on your profile, collateral and the lender's then-current credit policy. Past savings outcomes are not a guarantee of future results.
      </p>
    ),
  },
  {
    id: "kyc",
    title: "KYC, AML and CFT",
    body: (
      <p>
        We comply with the KYC, AML and CFT requirements of the Prevention of Money Laundering Act, 2002 and applicable RBI / SEBI guidelines. Customer KYC may be done through CKYC, e-KYC (Aadhaar OTP / biometric, where consented), or video-KYC channels of the partner lender or AMC. We retain KYC records for at least 10 years from the end of the customer relationship.
      </p>
    ),
  },
  {
    id: "data-protection",
    title: "Data protection and privacy",
    body: (
      <p>
        We follow the Information Technology Act, 2000, the IT Rules, 2011 and the Digital Personal Data Protection Act, 2023. Detailed practices are set out in our <a href="/privacy" className="text-blue underline">Privacy Policy</a> and <a href="/cookies" className="text-blue underline">Cookie Policy</a>.
      </p>
    ),
  },
  {
    id: "no-prohibited",
    title: "Prohibited and restricted activities",
    body: (
      <>
        <p>We do not solicit or place:</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Deposits from the public.</li>
          <li>Loans for any prohibited purpose under RBI guidelines (including capital-market speculation through unregulated channels, anti-social activities, or activities prohibited under PMLA).</li>
          <li>Cross-border remittances or forex transactions.</li>
          <li>Discretionary portfolio management or investment advice regulated under SEBI (IA) Regulations.</li>
        </ul>
      </>
    ),
  },
  {
    id: "conflict",
    title: "Conflict of interest",
    body: (
      <p>
        We disclose all material conflicts of interest to customers in writing before they commit to a transaction. Our placement decisions are guided by the customer's interest (rate, fees, structure, lender service quality), not by the level of payout from a particular lender.
      </p>
    ),
  },
  {
    id: "marketing",
    title: "Marketing communications",
    body: (
      <p>
        We send service and transactional communications to all customers. Marketing communications (newsletters, product updates) are sent only to customers who have opted in, with a clear unsubscribe link in every email.
      </p>
    ),
  },
  {
    id: "regulatory-links",
    title: "Useful regulatory references",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li><a href="https://www.rbi.org.in/" target="_blank" rel="noreferrer" className="text-blue underline">Reserve Bank of India</a></li>
        <li><a href="https://www.sebi.gov.in/" target="_blank" rel="noreferrer" className="text-blue underline">Securities and Exchange Board of India (SEBI)</a></li>
        <li><a href="https://www.amfiindia.com/" target="_blank" rel="noreferrer" className="text-blue underline">AMFI</a></li>
        <li><a href="https://sachet.rbi.org.in/" target="_blank" rel="noreferrer" className="text-blue underline">RBI Sachet — Complaint portal</a></li>
        <li><a href="https://scores.sebi.gov.in/" target="_blank" rel="noreferrer" className="text-blue underline">SEBI SCORES — Complaint portal</a></li>
      </ul>
    ),
  },
  {
    id: "contact",
    title: "Contact for compliance queries",
    body: (
      <p>
        Compliance, regulatory or disclosure queries: <a href={`mailto:${COMPANY.email}`} className="text-blue underline">{COMPANY.email}</a> · <a href={`tel:${COMPANY.phoneHref}`} className="text-blue underline tabular">{COMPANY.phone}</a>.
      </p>
    ),
  },
];

export default function DisclosuresPage() {
  return (
    <LegalPageLayout
      tag="DISCLOSURES"
      eyebrow="Legal · Compliance & Disclosures"
      title="Who we are, who we're regulated by, and what we will not do."
      lede="A consolidated statement of our regulatory status, fee structure, lender panel and the activities we will and will not undertake on your behalf."
      lastUpdated="27 April 2026"
      sections={sections}
    />
  );
}
