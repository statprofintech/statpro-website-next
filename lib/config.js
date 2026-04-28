// Public marketing-site config.
// CRM API base URL — defaults to local dev backend, overridable via NEXT_PUBLIC_CRM_API_URL.
export const CRM_API_URL =
  process.env.NEXT_PUBLIC_CRM_API_URL || "http://localhost:3003";
