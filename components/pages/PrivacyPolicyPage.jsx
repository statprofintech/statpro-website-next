import LegalPageLayout from "@/components/LegalPageLayout"
import { COMPANY } from "@/lib/company";

const sections = [
  {
    id: "scope",
    title: "Scope and applicability",
    body: (
      <>
        <p>
          This Privacy Policy describes how {COMPANY.legalName} (“{COMPANY.brand}”, “we”, “us”, “our”) collects, uses, discloses and safeguards personal information when you visit our website, apply for a loan or wealth product through us, or otherwise interact with our advisors, channels or partners.
        </p>
        <p>
          The Policy is issued in compliance with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023 (“DPDP Act”) as applicable.
        </p>
      </>
    ),
  },
  {
    id: "data-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p>We collect the following categories of personal information, only as necessary to provide our services:</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li><strong>Identity & contact:</strong> name, date of birth, PAN, Aadhaar (where consented for e-KYC), mobile number, email, residential and business address.</li>
          <li><strong>Financial information:</strong> bank statements, ITRs, GST returns, Form 16, salary slips, existing loan accounts, CIBIL / credit-bureau reports, property documents and valuation reports.</li>
          <li><strong>Transactional data:</strong> loan application status, sanction terms, disbursal records, MF folio details, KYC artefacts.</li>
          <li><strong>Technical data:</strong> IP address, device, browser, pages viewed, referrer and timestamps, captured by cookies and analytics — see our <a href="/cookies" className="text-blue underline">Cookie Policy</a>.</li>
          <li><strong>Communications:</strong> calls, emails, WhatsApp / chat messages and meeting notes you exchange with our advisors.</li>
        </ul>
      </>
    ),
  },
  {
    id: "purpose",
    title: "Purposes for which we use your information",
    body: (
      <>
        <p>We process your personal information for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>To assess your eligibility, structure your application and place it with the lender(s) you approve.</li>
          <li>To complete KYC, AML and underwriting checks required by partner lenders or by AMFI / RTA for mutual fund onboarding.</li>
          <li>To service your account post-disbursal — including refinance, top-up, foreclosure and grievance handling.</li>
          <li>To comply with applicable law, regulatory directions, court orders and lawful information requests.</li>
          <li>To improve our website, products and advisory experience.</li>
        </ul>
      </>
    ),
  },
  {
    id: "consent",
    title: "Lawful basis & consent",
    body: (
      <>
        <p>
          We collect personal data only with your express consent or where processing is necessary for performance of a contract you have entered into with us, for compliance with a legal obligation, or for a specified legitimate use under the DPDP Act.
        </p>
        <p>
          You may withdraw consent at any time by writing to <a href={`mailto:${COMPANY.email}`} className="text-blue underline">{COMPANY.email}</a>. Withdrawal will not affect the lawfulness of processing carried out before the withdrawal, and may limit our ability to continue advising you on a live application.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "How we share your information",
    body: (
      <>
        <p>We share personal information only as follows:</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li><strong>With partner lenders</strong> you have approved, and only the 4–5 lenders shortlisted from our 19-lender panel for your file.</li>
          <li><strong>With service providers</strong> bound by confidentiality — credit bureaus, KYC verification agents, valuers, lawyers, document-collection vendors, e-sign and e-stamp providers, RTAs and AMCs (for MF transactions).</li>
          <li><strong>With regulators and authorities</strong> where required by RBI, SEBI, AMFI, FIU-IND, income-tax authorities, courts or law-enforcement agencies under applicable law.</li>
          <li><strong>In a corporate transaction</strong> such as merger, acquisition or restructuring, subject to equivalent confidentiality obligations.</li>
        </ul>
        <p>We do not sell your personal data to advertisers or any third party.</p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security of your information",
    body: (
      <>
        <p>
          We follow reasonable security practices and procedures aligned with ISO/IEC 27001 standards as referenced under the IT Rules, 2011. Controls include role-based access, encryption-in-transit (TLS 1.2+), encryption-at-rest for sensitive fields, audit logging, periodic access review and vendor due-diligence.
        </p>
        <p>
          No method of transmission over the internet is 100% secure. While we work to protect your personal data, we cannot guarantee absolute security and you share information at your own risk.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    body: (
      <>
        <p>
          We retain personal information only for as long as required to fulfil the purposes for which it was collected, or to comply with statutory record-keeping obligations (typically 8 years from disbursal for credit transactions and 10 years for AML records), after which it is securely deleted or anonymised.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your rights as a Data Principal",
    body: (
      <>
        <p>Subject to the DPDP Act, you have the right to:</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Access a summary of your personal data we hold and the processing activities undertaken.</li>
          <li>Request correction or erasure of inaccurate, incomplete or no-longer-required data.</li>
          <li>Withdraw consent and request that processing cease (subject to legal retention).</li>
          <li>Nominate another individual to exercise your rights in the event of death or incapacity.</li>
          <li>File a grievance with us, and escalate to the Data Protection Board of India if unresolved.</li>
        </ul>
        <p>
          To exercise any right, write to <a href={`mailto:${COMPANY.email}`} className="text-blue underline">{COMPANY.email}</a> with the subject line “DPDP Request”. We respond within the timelines prescribed under applicable law.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Minors",
    body: (
      <p>
        Our services are intended for adults aged 18 and above. We do not knowingly collect personal data of minors except as a guardian / nominee under a parent's account, and only with verifiable parental consent.
      </p>
    ),
  },
  {
    id: "transfers",
    title: "Cross-border transfers",
    body: (
      <p>
        Personal data is primarily stored and processed in India. To the extent any data is transferred outside India (e.g., for cloud infrastructure or sub-processors), such transfer will be subject to safeguards consistent with the DPDP Act and the Government of India's notifications under it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this Policy",
    body: (
      <p>
        We may update this Policy from time to time to reflect changes in law or our practices. The “Last updated” date at the top of the page indicates the latest revision. Material changes will be communicated by email or a prominent notice on the website.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <p>For any privacy-related query or to exercise your rights:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Email: <a href={`mailto:${COMPANY.email}`} className="text-blue underline">{COMPANY.email}</a></li>
          <li>Phone: <a href={`tel:${COMPANY.phoneHref}`} className="text-blue underline tabular">{COMPANY.phone}</a></li>
          <li>Postal: Grievance Redressal Officer, {COMPANY.legalName}, {COMPANY.headOffice.join(", ")}.</li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      tag="PRIVACY"
      eyebrow="Legal · Privacy Policy"
      title="How we collect, use and safeguard your information."
      lede="We collect only the data needed to place your loan or service your investments — and share it only with the lenders, regulators and partners you authorise. This Policy explains exactly what, why and for how long."
      lastUpdated="27 April 2026"
      sections={sections}
    />
  );
}
