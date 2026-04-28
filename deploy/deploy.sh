#!/usr/bin/env bash
# deploy.sh — build the Next.js marketing site as a static export and rsync to OVH.
#
# Usage:  ./deploy/deploy.sh
#
# Pre-reqs:
#   - SSH key at ~/Downloads/ovh-stockkyc-key.pem (chmod 600).
#   - Run from the repo root (statpro-website-next/).
#   - .env.production has NEXT_PUBLIC_GTM_ID + NEXT_PUBLIC_CRM_API_URL set.
#
# Idempotent — safe to run repeatedly. Aborts on any error.
set -euo pipefail

OVH_USER=ubuntu
OVH_HOST=148.113.43.133
OVH_KEY=~/Downloads/ovh-stockkyc-key.pem
REMOTE_DIR=/var/www/statproindia

cd "$(dirname "$0")/.."

echo "▶ Building Next.js static export (npm run build)…"
npm run build

if [[ ! -f out/index.html ]]; then
  echo "✗ out/index.html not found — build failed." >&2
  exit 1
fi

echo "▶ Verifying CRM URL is baked into the bundle…"
if ! grep -RFq "crm.statproindia.com" out/_next/static/ 2>/dev/null; then
  echo "✗ CRM URL not found in bundle." >&2
  echo "  Check .env.production has NEXT_PUBLIC_CRM_API_URL=https://crm.statproindia.com" >&2
  exit 1
fi
echo "  ✓ CRM URL present in bundle."

echo "▶ Rsync out/ → $OVH_USER@$OVH_HOST:$REMOTE_DIR/ …"
rsync -avz --delete \
  -e "ssh -i $OVH_KEY -o StrictHostKeyChecking=accept-new" \
  out/ \
  "$OVH_USER@$OVH_HOST:$REMOTE_DIR/"

echo "▶ Sanity-checking deployed index.html on prod…"
ssh -i "$OVH_KEY" "$OVH_USER@$OVH_HOST" \
  "test -s $REMOTE_DIR/index.html && echo '  ✓ index.html present' || (echo '✗ index.html missing on prod' >&2 && exit 1)"

echo "▶ Reloading nginx…"
ssh -i "$OVH_KEY" "$OVH_USER@$OVH_HOST" "sudo nginx -t && sudo systemctl reload nginx"

echo "▶ Warming Cloudflare edge cache…"
bash "$(dirname "$0")/warm-cache.sh"

echo "✓ Deployed. Live at https://www.statproindia.com"
