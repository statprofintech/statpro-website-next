import LegalPageLayout from "@/components/LegalPageLayout"
import { COMPANY } from "@/lib/company";

const sections = [
  {
    id: "what",
    title: "What cookies are",
    body: (
      <p>
        Cookies are small text files stored on your device by the websites you visit. They are widely used to make websites work more efficiently, to remember your preferences, and to provide reporting information to site owners. This Policy explains how {COMPANY.brand} uses cookies and similar technologies on its website.
      </p>
    ),
  },
  {
    id: "categories",
    title: "Categories of cookies we use",
    body: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li><strong>Strictly necessary:</strong> required for the website to function — session, security, load-balancing, CSRF tokens. These cannot be disabled.</li>
        <li><strong>Functional:</strong> remember your preferences (e.g., last calculator inputs, dismissed banners) so you don't have to re-enter them on every visit.</li>
        <li><strong>Analytics:</strong> aggregate, anonymous usage statistics that help us understand which pages and calculators are most useful, and where we can improve.</li>
        <li><strong>Performance / monitoring:</strong> help us measure page load times, capture client-side errors, and detect abuse.</li>
        <li><strong>Marketing (only if enabled):</strong> set when you click on a marketing link or are part of a re-engagement campaign you've opted into. Off by default.</li>
      </ul>
    ),
  },
  {
    id: "third-party",
    title: "Third-party cookies",
    body: (
      <p>
        Our website may use limited third-party services (for example, web-analytics or fraud-detection providers). These providers may set their own cookies, governed by their respective privacy policies. We do not allow advertising networks to drop cookies on our site without your consent.
      </p>
    ),
  },
  {
    id: "managing",
    title: "Managing cookies",
    body: (
      <>
        <p>
          You can control or delete cookies at any time through your browser settings. Most browsers allow you to refuse cookies, accept them only from certain sites, or delete them after each session. Disabling strictly-necessary cookies may affect the functionality of the website.
        </p>
        <p>Useful guides:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="text-blue underline">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noreferrer" className="text-blue underline">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" className="text-blue underline">Apple Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/microsoft-edge/" target="_blank" rel="noreferrer" className="text-blue underline">Microsoft Edge</a></li>
        </ul>
      </>
    ),
  },
  {
    id: "do-not-track",
    title: "“Do Not Track” signals",
    body: (
      <p>
        Industry standards on Do-Not-Track (DNT) signals are still evolving. We currently respect DNT for analytics and marketing categories — strictly-necessary cookies remain enabled to keep the site secure and functional.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this Policy",
    body: (
      <p>
        We may update this Policy from time to time to reflect changes in our cookie usage or applicable law. The “Last updated” date at the top of the page indicates the latest revision.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions on this Policy? Email <a href={`mailto:${COMPANY.email}`} className="text-blue underline">{COMPANY.email}</a>.
      </p>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      tag="COOKIES"
      eyebrow="Legal · Cookie Policy"
      title="What we store on your device, why, and how to control it."
      lede="A short policy describing the cookies and similar technologies our website uses, the purposes they serve, and the choices available to you."
      lastUpdated="27 April 2026"
      sections={sections}
    />
  );
}
