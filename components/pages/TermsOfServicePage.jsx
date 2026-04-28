import LegalPageLayout from "@/components/LegalPageLayout"
import { COMPANY } from "@/lib/company";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of these terms",
    body: (
      <>
        <p>
          These Terms of Service (“Terms”) form a binding agreement between you and {COMPANY.legalName} (“{COMPANY.brand}”, “we”, “us”, “our”). By accessing this website, submitting an enquiry, applying for a loan or wealth product through us, or otherwise engaging our services, you confirm that you have read, understood and agree to be bound by these Terms.
        </p>
        <p>If you do not agree, please do not use our website or services.</p>
      </>
    ),
  },
  {
    id: "nature",
    title: "Nature of our services",
    body: (
      <>
        <p>
          {COMPANY.brand} is a corporate-credit advisor and a Direct Selling Agent (DSA) for RBI-regulated banks, NBFCs and HFCs across Loan Against Property, Loan Against Rental, Loan Against Securities, Home Loan, Business Loan and Personal Loan. We are also an AMFI-registered Mutual Fund Distributor.
        </p>
        <p>
          We <strong>do not</strong> ourselves lend money, accept deposits, manage investments, or guarantee any loan sanction or investment outcome. We structure, place, and negotiate on your behalf. The final loan agreement is signed directly between you and the partner lender, and the final mutual-fund transaction is between you and the AMC / RTA.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility",
    body: (
      <p>
        You must be at least 18 years old, of sound mind, and competent to contract under the Indian Contract Act, 1872. By using our services you represent that all information you provide is true, accurate, complete and your own, and that you have authority to provide it.
      </p>
    ),
  },
  {
    id: "your-obligations",
    title: "Your obligations",
    body: (
      <>
        <p>You agree to:</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Provide accurate, current and complete information and documents.</li>
          <li>Promptly inform us of any change in your contact, financial or KYC information.</li>
          <li>Not impersonate any person or misrepresent your identity, income or assets.</li>
          <li>Not use the website for any unlawful purpose, to upload malware or harmful code, or to attempt unauthorised access to our systems.</li>
          <li>Comply with the terms of any loan sanction letter, MITC, or scheme document signed with our partner lender or AMC.</li>
        </ul>
      </>
    ),
  },
  {
    id: "fees",
    title: "Fees and charges",
    body: (
      <>
        <p>
          For credit services, our placement fee is paid by the partner lender on disbursal — disclosed upfront in the sanction letter. You do not pay {COMPANY.brand} any fee for credit advisory or placement, unless otherwise expressly agreed in writing.
        </p>
        <p>
          For mutual-fund distribution, we receive trail commissions from AMCs disclosed under SEBI / AMFI norms in your account statement.
        </p>
        <p>
          Lender-side charges (processing fee, legal, technical, valuation, stamp duty, etc.) are payable by you directly to the lender per the sanction letter.
        </p>
      </>
    ),
  },
  {
    id: "no-guarantee",
    title: "No guarantee of sanction",
    body: (
      <p>
        Loan approval, sanction terms, ROI, ticket size, tenure and disbursal are at the sole discretion of the partner lender, based on your profile, collateral, and the lender's credit policy. Any indicative numbers shown on the website (e.g., panel-floor rates, eligibility sliders) are illustrative and not an offer or commitment to lend.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-party services and links",
    body: (
      <p>
        Our website may contain links to third-party websites, calculators or services (including partner banks, NBFCs, RBI Sachet, AMFI). We are not responsible for the content, privacy practices or terms of any third-party site. Your interaction with any third party is governed by their terms.
      </p>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    body: (
      <p>
        All content on this website — including text, graphics, logos, icons, software, design and trademarks — is the property of {COMPANY.legalName} or its licensors, and is protected under applicable Indian and international intellectual-property laws. You may not copy, reproduce, modify or distribute any content without our prior written permission, except for personal, non-commercial use.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer of warranties",
    body: (
      <p>
        The website and our services are provided on an “as-is” and “as-available” basis. To the maximum extent permitted by law, we disclaim all warranties, express or implied — including merchantability, fitness for a particular purpose, accuracy, completeness, and non-infringement. We do not warrant uninterrupted or error-free operation of the website.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        To the maximum extent permitted by law, {COMPANY.legalName}, its directors, employees and affiliates shall not be liable for any indirect, incidental, special, consequential, exemplary or punitive damages, including loss of profits, goodwill, data or other intangible losses, arising out of or related to your use of the website or our services. Our aggregate liability for any claim shall not exceed the placement fee actually received by us in respect of the relevant transaction.
      </p>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    body: (
      <p>
        You agree to indemnify and hold harmless {COMPANY.legalName}, its directors, employees and partners from and against any claim, loss, liability, cost or expense (including reasonable legal fees) arising out of (i) your breach of these Terms, (ii) any inaccurate or misleading information provided by you, or (iii) your violation of any law or third-party right.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    body: (
      <p>
        We may suspend or terminate your access to the website or our services at any time, with or without notice, if we reasonably believe you have breached these Terms or applicable law, or if continuing to provide services would expose us to legal or regulatory risk. You may discontinue use of our services at any time by withdrawing consent under our Privacy Policy.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law and jurisdiction",
    body: (
      <p>
        These Terms are governed by the laws of India. Any dispute arising out of or in connection with these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal — without prejudice to your rights under applicable consumer-protection laws.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these Terms",
    body: (
      <p>
        We may revise these Terms from time to time. The “Last updated” date at the top of the page indicates the latest revision. Continued use of the website or our services after changes are posted constitutes your acceptance of the revised Terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <p>
        Questions on these Terms? Email <a href={`mailto:${COMPANY.email}`} className="text-blue underline">{COMPANY.email}</a> or call <a href={`tel:${COMPANY.phoneHref}`} className="text-blue underline tabular">{COMPANY.phone}</a>.
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      tag="TERMS"
      eyebrow="Legal · Terms of Service"
      title="The rules of engagement — what we do, what you do, who's liable."
      lede="A plain-English statement of how our credit advisory, MF distribution and website work — and the legal terms under which we offer them."
      lastUpdated="27 April 2026"
      sections={sections}
    />
  );
}
