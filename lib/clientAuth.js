// Borrower-portal helpers — talks to /api/public/borrower/* on the CRM.
// Token persists in sessionStorage so the dashboard survives a refresh.
import { CRM_API_URL } from "./config";

const TOKEN_KEY = "statpro_borrower_token";

export function getBorrowerToken() {
  try { return sessionStorage.getItem(TOKEN_KEY) || null; } catch { return null; }
}
export function setBorrowerToken(token) {
  try { sessionStorage.setItem(TOKEN_KEY, token); } catch { /* ignore */ }
}
export function clearBorrowerToken() {
  try { sessionStorage.removeItem(TOKEN_KEY); } catch { /* ignore */ }
}

/** POST /api/public/borrower/login → emails magic link. Always 200. */
export async function requestSignInLink(email) {
  const r = await fetch(`${CRM_API_URL}/api/public/borrower/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  if (r.status === 429) throw new Error("Too many requests. Please try again in a minute.");
  if (!r.ok && r.status !== 200) throw new Error("Could not send sign-in link.");
  return r.json();
}

/** GET /api/public/borrower/me?token=… → portal payload. */
export async function fetchBorrowerDashboard(token) {
  const url = `${CRM_API_URL}/api/public/borrower/me?token=${encodeURIComponent(token)}`;
  // Hard 15-second client-side timeout so the page can never spin forever.
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), 15_000);
  let r;
  try {
    r = await fetch(url, { signal: ctl.signal });
  } catch (e) {
    clearTimeout(t);
    if (e.name === "AbortError") {
      throw new Error(`Could not reach the API in 15s. Tried: ${CRM_API_URL}. If you're on the live site, the marketing build is missing VITE_CRM_API_URL=https://crm.statproindia.com.`);
    }
    throw new Error(`Network error reaching ${CRM_API_URL}: ${e.message}`);
  }
  clearTimeout(t);
  if (r.status === 404) throw new Error("token_not_found");
  if (r.status === 410) throw new Error("token_expired");
  if (!r.ok)            throw new Error(`fetch_failed (HTTP ${r.status} from ${CRM_API_URL})`);
  return r.json();
}

/** POST /api/public/docs-upload/:token — multipart files[] */
export async function uploadDocuments(token, files) {
  const fd = new FormData();
  for (const f of files) fd.append("files", f);
  const r = await fetch(`${CRM_API_URL}/api/public/docs-upload/${encodeURIComponent(token)}`, {
    method: "POST",
    body: fd,
  });
  if (r.status === 429) throw new Error("Too many uploads — please wait a minute and retry.");
  if (r.status === 404) throw new Error("Sign-in link expired. Please sign in again.");
  if (r.status === 410) throw new Error("Sign-in link revoked. Please sign in again.");
  if (!r.ok)            throw new Error("Upload failed.");
  return r.json();
}
