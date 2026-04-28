#!/usr/bin/env bash
# warm-cache.sh — fetch all public pages so Cloudflare edge caches them.
# Run automatically by deploy.sh after rsync completes.
set -euo pipefail

BASE="https://www.statproindia.com"

PAGES=(
  /
  /lap/ /lrd/ /las/ /hl/ /bl/ /pl/
  /apply/ /lenders/ /about/
  /calculators/ /calculators/emi/ /calculators/eligibility/
  /calculators/balance-transfer/ /calculators/las-ltv/
  /privacy/ /terms/ /disclosures/ /grievance/
)

echo "▶ Warming Cloudflare edge cache…"
for path in "${PAGES[@]}"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$BASE$path")
  echo "  $code  $BASE$path"
done
echo "  ✓ Cache warm complete."
