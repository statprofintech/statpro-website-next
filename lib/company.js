// Company constants — server-safe, imported by both server pages and the
// 'use client' LegalPageLayout. Kept in its own module to avoid Next.js's
// "client-marked module exports can't be read from server components" pitfall.

export const COMPANY = {
  legalName: "Statpro Fintech Pvt. Ltd.",
  brand: "StatPro Fintech",
  email: "care@statproindia.com",
  phone: "+91 92333 55500",
  phoneHref: "+919233355500",
  cin: "U65999MHXXXXPTCXXXXX",
  headOffice: ["503, Saltee Plaza", "Jessore Road", "Kolkata — 700 080", "West Bengal, India"],
  regdOffice: [
    "1st Floor, B-205, Kalpataru Building",
    "Bengal Srishti Complex, City Centre",
    "Durgapur, Paschim Bardhaman",
    "West Bengal — 713 216, India",
  ],
};
