// Mechanical port helper: copies a Vite section/component file into the
// Next.js project, applying these transforms:
//
//   1. Replace `import { Link } from "react-router-dom"` → `import Link from "next/link"`.
//   2. Replace `to=` JSX prop → `href=` (only when on a Link).
//   3. Replace alias imports `@/` and relative imports `../lib/x`/`../components/x`
//      with absolute `@/lib/x` / `@/components/x` paths.
//   4. Prepend `"use client";\n` when the file uses useState/useEffect/onClick/onChange/onSubmit/motion./useRef/useMemo/useCallback.
//   5. Replace `import.meta.env.VITE_X` → `process.env.NEXT_PUBLIC_X`.
//
// Usage: node scripts/port-sections.mjs <source-file> <target-file>

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'

const [src, dst] = process.argv.slice(2)
if (!src || !dst) {
  console.error('usage: port-sections.mjs <src> <dst>')
  process.exit(1)
}

let code = readFileSync(src, 'utf8')

// Strip BOM
code = code.replace(/^﻿/, '')

// (1) react-router-dom → next/link (only handles the standard `import { Link } from "react-router-dom"`).
code = code.replace(
  /import\s*\{\s*Link\s*\}\s*from\s*["']react-router-dom["'];?\s*\n/g,
  `import Link from "next/link";\n`
)
// Some files import other react-router exports we don't use → just drop the line.
code = code.replace(/import\s*\{[^}]*\}\s*from\s*["']react-router-dom["'];?\s*\n/g, '')

// (2) Replace JSX `to=` prop on <Link …> with `href=`. We only want to touch the prop on Link tags,
// so target the pattern `<Link ...to=` (handles attribute order via greedy match).
code = code.replace(/(<Link\b[^>]*?\s)to=/g, '$1href=')

// (3) Rewrite local relative imports → @/ paths.
//   ../lib/x → @/lib/x
//   ../../lib/x → @/lib/x
//   ../components/x → @/components/x
//   ../../components/x → @/components/x
code = code.replace(/from\s+["'](\.\.\/)+lib\//g, 'from "@/lib/')
code = code.replace(/from\s+["'](\.\.\/)+components\//g, 'from "@/components/')
code = code.replace(/from\s+["'](\.\.\/)+sections\//g, 'from "@/components/sections/')

// (4) `import.meta.env.VITE_X` → `process.env.NEXT_PUBLIC_X`.
code = code.replace(/import\.meta\.env\.VITE_([A-Z0-9_]+)/g, 'process.env.NEXT_PUBLIC_$1')

// (5) Decide if 'use client' is needed.
const needsClient = /\b(useState|useEffect|useRef|useMemo|useCallback|useReducer|onClick|onChange|onSubmit|onKeyDown|onMouseEnter|onMouseLeave|motion\.|requestAnimationFrame)\b/.test(code)
if (needsClient && !/^\s*['"]use client['"]/.test(code)) {
  code = `"use client";\n\n${code}`
}

mkdirSync(path.dirname(dst), { recursive: true })
writeFileSync(dst, code, 'utf8')
console.log(`  ✓ ${path.basename(dst)}  ${needsClient ? '(client)' : '(server)'}`)
