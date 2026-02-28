# Originality Report — MERIDIEM Management Consulting

**Generated:** 2026-02-28
**Slug:** 20260228_management-consulting

---

## Brand Originality

| Element | Status | Notes |
|---------|--------|-------|
| Brand Name | ORIGINAL | "MERIDIEM" is coined — Latin for midday/culmination; not a real consulting firm name |
| Tagline | ORIGINAL | "Strategy that transforms. Results that endure." — written specifically for this project |
| Firm Story | FICTIONAL | Founded 1995 by "Eleanor Hartwell and David Meridiem" — entirely invented |
| Client Names | FICTIONAL | "Hartfield Group", "Axiom Industrials", "Stellar Financial" — all invented |
| Statistics | FICTIONAL | 1,200 consultants, 40 countries, 98% retention, 30 years — fictional but plausible |
| Case Study Results | FICTIONAL | $340M savings, $2.4B value delivered — invented but realistic-sounding |
| Leadership Names | FICTIONAL | Eleanor Hartwell, Marcus Lind, Ananya Krishnan, Thomas Eriksen, Jasmine Osei, Roberto Vasconcelos |
| Office Addresses | PLAUSIBLE FICTIONAL | Real landmark buildings used as addresses (e.g. One Bryant Park) but firm is fictional |

---

## Design Originality

| Element | Value | Uniqueness |
|---------|-------|------------|
| Color Palette | P5 Arctic Slate — `#141820` / `#A0C4D8` | Arctic blue-slate palette — distinctive from existing templates |
| Font Pair | DM Serif Display + Karla | Used in <3 existing templates in portfolio |
| Hero Layout | Type F — Interactive service selector | One of the least-used hero types in the portfolio |
| Hero Float Text | "TRANSFORM" at opacity 0.06 | Novel decorative typographic device |
| Service Widget | Tab-based interactive selector in hero | Unique to this template |
| Phase Layout | Horizontal grid with num-col / content / meta columns | Original structural pattern |
| Practice Filter | CSS + GSAP opacity filter bar | Clean, minimal approach not duplicated elsewhere |

---

## GSAP Implementation Audit

All GSAP animations verified for compliance:

- [x] `immediateRender: false` at TOP LEVEL of all `gsap.from()` calls
- [x] No `opacity: 0` in CSS on content elements
- [x] SplitText polyfill inline before Swiper on all pages
- [x] Scroll indicator in preloader `onComplete` callback AND `setTimeout(4000ms)`
- [x] Philosophy grid uses `display: grid; grid-template-columns: repeat(3, 1fr)`
- [x] Services grid has `overflow: visible`
- [x] Footer uses `background: var(--bg)` — no hardcoded hex
- [x] Counter animation uses ScrollTrigger `once: true`
- [x] No `opacity: 0` inline styles on content elements

---

## Color Safety Check

| Variable | Value | Avg RGB | Safe (≥15) |
|----------|-------|---------|------------|
| `--bg` | `#141820` | (20+24+32)/3 = 25.3 | YES |
| `--surface` | `#1C2030` | (28+32+48)/3 = 36.0 | YES |
| `--surface2` | `#222840` | (34+40+64)/3 = 46.0 | YES |
| `--border` | `#1E2638` | (30+38+56)/3 = 41.3 | YES |

All section backgrounds use CSS variables — no hardcoded dark hex values on section backgrounds or footer.

---

## Similarities to Existing Templates

| Template | Similarity | Status |
|----------|-----------|--------|
| 20260228_law-firm | Same date batch, different industry | OK — law is B2B legal, consulting is B2B strategy |
| 20260228_asset-management | Both financial/professional services | OK — asset mgmt is investment-focused; consulting is strategy |
| 20260228_executive-search | Both B2B professional services | OK — exec search is HR/recruitment vertical |
| 20260226_aerial-photography | Same multi-page structure | OK — different industry entirely |

No direct clones or near-duplicates identified.

---

## Verdict

**ORIGINAL** — This template is sufficiently differentiated from all existing portfolio entries through unique brand identity, original design system choices (P5 palette + F6 fonts), novel interactive hero widget (service selector), and unique structural elements (4-phase methodology display, practice area filter). All fictional content is plausible and industry-appropriate.
