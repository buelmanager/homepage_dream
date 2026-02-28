# Image Validation — STRATUM CAPITAL (20260228_asset-management)

**Generated:** 2026-02-28

---

## Image Strategy

All images are local `.webp` files stored in the `/images/` directory. No Unsplash CDN URLs are embedded in the HTML to prevent 404 failures.

---

## Required Images

| Filename | Used In | Recommended Search Keywords |
|---|---|---|
| `hero-1.webp` | index.html hero | "financial trading desk night", "investment bank office dramatic" |
| `hero-2.webp` | index.html intro + about.html | "investment committee meeting", "portfolio analysis screen" |
| `hero-3.webp` | process.html hero bg | "quantitative finance screen multiple monitors", "trading floor data" |
| `hero-4.webp` | index.html gallery | "global city financial district aerial", "asset management building" |
| `product-1.webp` | collection.html equities | "stock market data visualization", "equity research analysis" |
| `product-2.webp` | collection.html fixed income | "bond market trading", "fixed income desk" |
| `product-3.webp` | collection.html private credit | "private equity deal signing", "direct lending office" |
| `product-4.webp` | collection.html real assets | "infrastructure investment", "wind farm aerial", "toll road" |
| `ambient-1.webp` | index.html gallery + intro accent | "office headquarters glass modern", "institutional asset management" |
| `ambient-2.webp` | collection.html hedge + index.html gallery | "algorithmic trading screens", "quantitative analysis" |
| `ambient-3.webp` | process.html ESG + index.html gallery | "sustainable finance meeting", "ESG investment discussion" |
| `thumbnail.webp` | manifest.json | Generated from fullpage screenshot |

---

## Image Generation / Sourcing Notes

### Forbidden Unsplash IDs (per design brief)
- photo-1558618666-fcd25c85cd64
- photo-1524504388940-b1c1722653e1
- photo-1551488831-00ddcb6c6bd3
- photo-1543076447-215ad9ba6923
- photo-1503342394128-c104d54dba01

### Recommended Validated Unsplash IDs (from project memory)
- 1529958030586-3aae4ca485ff (suitable for hero — dark office)
- 1512327536842-5aa37d1ba3e3 (suitable for ambient)
- 1515886657613-9f3515b0c78f (suitable for product)
- 1509631179647-0177331693ae (suitable for hero)

### Validation Command
```bash
# Validate a URL before embedding
curl -I "https://images.unsplash.com/photo-XXXX?w=1600&q=80" | grep "HTTP/"

# Convert to webp after download
cwebp -q 80 input.jpg -o images/hero-1.webp
```

---

## Thumbnail Generation

```bash
# After capturing fullpage screenshot:
python3 scripts/capture-page.py 20260228_asset-management

# Generate thumbnail.webp (REQUIRED — not thumbnail.jpg):
cwebp -q 80 -resize 600 0 \
  multi_clone_hompage/home/20260228_asset-management/images/fullpage.png \
  -o multi_clone_hompage/home/20260228_asset-management/images/thumbnail.webp
```

---

## Color Compliance (Dark Theme)

Since this is a dark-themed site (--bg: #101420), the check-sections.py script thresholds apply differently:

- `--bg: #101420` → avg(16+20+32)/3 = 22.7 ✅ (above minimum 20)
- `--surface: #181E2A` → avg(24+30+42)/3 = 32.0 ✅
- `--surface2: #1F2535` → avg(31+37+53)/3 = 40.3 ✅
- Footer uses `var(--bg)` — compliant

All section backgrounds are within safe range. No dark section warnings expected.
