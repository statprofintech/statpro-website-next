// Public marketing-site config.
// CRM API base URL — defaults to local dev backend, overridable via VITE_CRM_API_URL.
export const CRM_API_URL =
  import.meta.env.VITE_CRM_API_URL || "http://localhost:3003";
