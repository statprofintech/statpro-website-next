# Lender Data Coverage Report

**Last updated:** 2026-04-27
**Scraping method:** WebFetch (HTML → markdown → LLM extraction). Pure-HTML pages extract well; JS-rendered SPA hub pages do not.

## HDFC Bank

| Product | File | Completeness | Status | Notes |
|---|---|---:|---|---|
| Home Loans | [hdfc-bank__home-loan.json](products/hdfc-bank__home-loan.json) | 95% | pending | Strongest record. ROI 7.75–13.20%, LTV 90%, tenure 12–360 mo, ticket ₹1L–₹100Cr, 25 docs, 25 features. |
| Home Loan BT | [hdfc-bank__home-loan-balance-transfer.json](products/hdfc-bank__home-loan-balance-transfer.json) | 85% | pending | ROI 7.75–13.20%, top-up up to ₹100L. |
| Home Loan Top-up | [hdfc-bank__home-loan-top-up.json](products/hdfc-bank__home-loan-top-up.json) | 88% | pending | ROI 8.0–13.7%, ticket cap ₹1Cr, full fees table. |
| Plot Loans | [hdfc-bank__plot-loan.json](products/hdfc-bank__plot-loan.json) | 85% | pending | LTV 80%, tenure 12–180 mo. |
| Rural Housing | [hdfc-bank__rural-housing-loan.json](products/hdfc-bank__rural-housing-loan.json) | 82% | pending | Agriculturist carve-outs (no ITR required, 20yr tenure). |
| Renovation | [hdfc-bank__home-renovation-loan.json](products/hdfc-bank__home-renovation-loan.json) | 83% | pending | LTV up to 100%, tenure 12–180 mo. |
| Extension | [hdfc-bank__home-extension-loan.json](products/hdfc-bank__home-extension-loan.json) | 85% | pending | LTV 90%, tenure 12–240 mo. |
| PMAY-U 2.0 | [hdfc-bank__pmay-urban-2.json](products/hdfc-bank__pmay-urban-2.json) | 70% | pending | Subsidy overlay; 4% on first ₹8L, max ₹1.8L benefit. |
| **LAP** | [hdfc-bank__loan-against-property.json](products/hdfc-bank__loan-against-property.json) | **5%** | **needs_retry** | Hub-page SPA. Sub-pages 404. Use Playwright. |
| **Business Loan** | [hdfc-bank__business-loan.json](products/hdfc-bank__business-loan.json) | **5%** | **needs_retry** | Same as LAP. |
| **Personal Loan** | [hdfc-bank__personal-loan.json](products/hdfc-bank__personal-loan.json) | **15%** | **needs_retry** | Got headline ROI (9.99%) and ticket cap (₹50L) only. |

**Aggregate:** 11/11 records created. Mean completeness ≈ 67%. 8 production-ready records, 3 placeholders awaiting retry.

## Why 3 retries needed

The HDFC LAP, Business Loan, and Personal Loan landing pages on `www.hdfc.bank.in` are React/Angular SPAs. The HTML returned by a plain HTTP fetch is just the app shell — no product data is in the initial markup. WebFetch cannot execute JS.

**Fix paths (in order of preference):**

1. **Playwright headless browser** — render the page, wait for content, extract. This is exactly the case the planned `scrapers/` folder (Phase 0 in `BUSINESS_LOAN_REVAMP_PLAN.md`, §3.4) was designed to handle. Stand it up next.
2. **HDFC published rate-card PDFs** — banks publish quarterly retail rate cards as PDFs. These are static and parse cleanly.
3. **Manual entry** — give the 3 weak products to a sales lead with a Google Form; takes 15 minutes.

## Open follow-ups

- [ ] Spin up Playwright pipeline (Python) to retry the 3 SPA pages
- [ ] Find HDFC's official rate-card PDF URL and add it as a fallback source
- [ ] Sales lead to QA-approve the 8 strong records before they go on the site
- [ ] Confirm post-merger HDFC URL structure for LAP/BL/PL — possibly moved under `/personal/borrow/` or similar; sub-page paths above all 404'd
- [ ] Move on to next partner (suggest: ICICI Bank, then Bajaj Finance — both have richer non-SPA documentation pages)

## Schema

All records validate against [schema/product.schema.json](schema/product.schema.json). Partner index validates against [schema/partner.schema.json](schema/partner.schema.json).
