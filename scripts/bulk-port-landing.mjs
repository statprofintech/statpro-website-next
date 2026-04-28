// Bulk port every landing page route from the local Vite repo into the
// Next.js project. Mirrors the source folder layout under components/landing/
// (so /landingpage/* and /lp/* — which have name-collisions across v1/v2 —
// land in their respective folders).
//
// Generates app/<route>/page.jsx for each route, with metadata + breadcrumb.
//
// Routes are read from a hard-coded list extracted from main.jsx (route → src file).

import { execSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const ROUTES = [
  // v1 /landingpage
  ['/landingpage', 'landing/LandingIndexPage.jsx'],
  ['/landingpage/bl/equipment-finance', 'landing/bl/BlEquipmentFinancePage.jsx'],
  ['/landingpage/bl/sme-unsecured',     'landing/bl/BlSmeUnsecuredPage.jsx'],
  ['/landingpage/bl/working-capital',   'landing/bl/BlWorkingCapitalPage.jsx'],
  ['/landingpage/hl/balance-transfer',  'landing/hl/HlBalanceTransferPage.jsx'],
  ['/landingpage/hl/first-time-buyer',  'landing/hl/HlFirstTimeBuyerPage.jsx'],
  ['/landingpage/hl/self-employed',     'landing/hl/HlSelfEmployedPage.jsx'],
  ['/landingpage/lap/balance-transfer', 'landing/lap/LapBalanceTransferPage.jsx'],
  ['/landingpage/lap/dropline-od',      'landing/lap/LapDroplineOdPage.jsx'],
  ['/landingpage/lap/special-purpose',  'landing/lap/LapSpecialPurposePage.jsx'],
  ['/landingpage/las/las-vs-sell',           'landing/las/LasVsSellPage.jsx'],
  ['/landingpage/las/margin-call-relief',    'landing/las/LasMarginCallPage.jsx'],
  ['/landingpage/las/t-plus-one-sanction',   'landing/las/LasT1Page.jsx'],
  ['/landingpage/lrd/lrd-vs-lap',         'landing/lrd/LrdVsLapPage.jsx'],
  ['/landingpage/lrd/mall-office-owner',  'landing/lrd/LrdMallOfficeOwnerPage.jsx'],
  ['/landingpage/lrd/multi-tenant',       'landing/lrd/LrdMultiTenantPage.jsx'],
  ['/landingpage/lrd/nri-landlord',       'landing/lrd/LrdNriLandlordPage.jsx'],
  ['/landingpage/pl/debt-consolidation',  'landing/pl/PlDebtConsolidationPage.jsx'],
  ['/landingpage/pl/lowest-rate',         'landing/pl/PlLowestRatePage.jsx'],
  ['/landingpage/pl/medical-education',   'landing/pl/PlMedicalEducationPage.jsx'],

  // v2 /lp — mega-menu integrated
  ['/lp/bl/doctor-loan',         'landing/bl/v2/BlDoctorLoanPage.jsx'],
  ['/lp/bl/equipment-finance',   'landing/bl/v2/BlEquipmentFinancePage.jsx'],
  ['/lp/bl/sme-stack',           'landing/bl/v2/BlSmeStackPage.jsx'],
  ['/lp/bl/women-led',           'landing/bl/v2/BlWomenLedPage.jsx'],
  ['/lp/bl/working-capital',     'landing/bl/v2/BlWorkingCapitalPage.jsx'],
  ['/lp/hl/balance-transfer',    'landing/hl/v2/HlBalanceTransferPage.jsx'],
  ['/lp/hl/construction',        'landing/hl/v2/HlConstructionLinkedPage.jsx'],
  ['/lp/hl/first-time-buyer',    'landing/hl/v2/HlFirstTimeBuyerPage.jsx'],
  ['/lp/hl/self-employed',       'landing/hl/v2/HlSelfEmployedPage.jsx'],
  ['/lp/hl/women-borrower',      'landing/hl/v2/HlWomenBorrowerPage.jsx'],
  ['/lp/lap/bt-topup',           'landing/lap/v2/LapBalanceTransferTopupPage.jsx'],
  ['/lp/lap/dropline-od',        'landing/lap/v2/LapDroplineODPage.jsx'],
  ['/lp/lap/fresh',              'landing/lap/v2/LapFreshPromoterPage.jsx'],
  ['/lp/lap/industrial',         'landing/lap/v2/LapIndustrialPropertyPage.jsx'],
  ['/lp/lap/self-employed',      'landing/lap/v2/LapSelfEmployedPage.jsx'],
  ['/lp/lap/special-purpose',    'landing/lap/v2/LapSpecialPurposePage.jsx'],
  ['/lp/las/margin-call',        'landing/las/v2/LasMarginCallPage.jsx'],
  ['/lp/las/mf-heavy',           'landing/las/v2/LasMfHeavyPage.jsx'],
  ['/lp/las/promoter-pledge',    'landing/las/v2/LasPromoterPledgePage.jsx'],
  ['/lp/las/t-plus-one',         'landing/las/v2/LasT1SanctionPage.jsx'],
  ['/lp/las/vs-sell',            'landing/las/v2/LasVsSellPage.jsx'],
  ['/lp/lrd/hospital-hotel',     'landing/lrd/v2/LrdHospitalHotelPage.jsx'],
  ['/lp/lrd/lrd-vs-lap',         'landing/lrd/v2/LrdVsLapPage.jsx'],
  ['/lp/lrd/mall-office',        'landing/lrd/v2/LrdMallOfficePage.jsx'],
  ['/lp/lrd/multi-tenant',       'landing/lrd/v2/LrdMultiTenantPage.jsx'],
  ['/lp/lrd/nri-landlord',       'landing/lrd/v2/LrdNriLandlordPage.jsx'],
  ['/lp/pl/debt-consolidation',  'landing/pl/v2/PlDebtConsolidationPage.jsx'],
  ['/lp/pl/lowest-rate',         'landing/pl/v2/PlLowestRatePage.jsx'],
  ['/lp/pl/medical-education',   'landing/pl/v2/PlMedicalEducationPage.jsx'],
  ['/lp/pl/salary-account',      'landing/pl/v2/PlSalaryAccountPage.jsx'],
  ['/lp/pl/wedding',             'landing/pl/v2/PlWeddingPage.jsx'],
]

const SRC_ROOT = path.resolve('../statpro-website/src/pages')
const COMP_ROOT = path.resolve('components')
const APP_ROOT = path.resolve('app')

let ok = 0, fail = 0
for (const [route, srcRel] of ROUTES) {
  try {
    const src = path.join(SRC_ROOT, srcRel)
    const compDst = path.join(COMP_ROOT, srcRel) // mirrored layout under components/
    execSync(`node scripts/port-sections.mjs "${src}" "${compDst}"`, { stdio: 'inherit' })

    const importPath = '@/' + path.relative(path.resolve('.'), compDst).replace(/\.jsx$/, '')
    const compName = path.basename(srcRel, '.jsx').replace(/[^A-Za-z0-9]/g, '')

    const appDir = path.join(APP_ROOT, route.replace(/^\//, ''))
    mkdirSync(appDir, { recursive: true })
    const wrapper = `import ${compName} from '${importPath}'
import { getSeoForPath } from '@/lib/seo-config'

export function generateMetadata() {
  const seo = getSeoForPath('${route}')
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: '${route}' },
    openGraph: { title: seo.title, description: seo.description, images: [{ url: seo.image, width: 1200, height: 630 }] },
    twitter: { title: seo.title, description: seo.description, images: [seo.image] },
    robots: { index: false, follow: true },  // landing pages stay out of organic
  }
}

export default function Page() {
  return <${compName} />
}
`
    writeFileSync(path.join(appDir, 'page.jsx'), wrapper)
    ok++
  } catch (e) {
    console.error(`  ✗ ${route} :: ${srcRel} — ${e.message.slice(0, 100)}`)
    fail++
  }
}
console.log(`\nported ${ok} routes, ${fail} failed`)
