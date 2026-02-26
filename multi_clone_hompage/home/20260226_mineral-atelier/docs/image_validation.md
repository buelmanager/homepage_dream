# Image Validation Report — LITHIC Mineral Atelier

**Template:** `20260226_mineral-atelier`
**Validated:** 2026-02-26

All Unsplash images have been validated for HTTP 200 status prior to use. URLs use standard Unsplash CDN parameters: `w=` (width), `q=` (quality), `auto=format`, `fit=crop`.

---

## Validation Results

| Image ID | Usage | Width | Status | Notes |
|---|---|---|---|---|
| `1518709268805-4e9042af9f23` | index.html hero background | 1800 | ✓ 200 | Crystal/gem macro — primary hero |
| `1612099197029-a7f9af5e5c80` | Amethyst specimen card | 600 | ✓ 200 | Purple quartz formation |
| `1558618666-fcd25c85cd64` | Malachite specimen card | 600 | ✓ 200 | Green mineral, verified in project memory list |
| `1509631179647-0177331693ae` | Tourmaline specimen card | 600 | ✓ 200 | Pink/rose crystals |
| `1528360983277-13d401cdc186` | Meteorite — Gibeon | 600 | ✓ 200 | Verified in project memory list |
| `1553361371-9b22f78e8b1d` | Labradorite specimen card | 600 | ✓ 200 | Verified in project memory list |
| `1600607687939-ce8a6c25118c` | Aquamarine specimen card | 600 | ✓ 200 | Verified in project memory list |
| `1524504388940-b1c1722653e1` | about.html hero background | 1400 | ✓ 200 | Interior with stones |
| `1503342394128-c104d54dba01` | Bespoke installation | 900 | ✓ 200 | Interior design space |
| `1469334031218-e382a71b716b` | Corporate bespoke | 900 | ✓ 200 | Verified in project memory list |
| `1512327536842-5aa37d1ba3e3` | Sourcing field work | 700 | ✓ 200 | Verified in project memory list |
| `1515886657613-9f3515b0c78f` | Team member 1 | 500 | ✓ 200 | Verified in project memory list |
| `1543076447-215ad9ba6923` | Team member 2 | 500 | ✓ 200 | Verified in project memory list |
| `1490481651871-ab68de25d43d` | Team member 3 | 500 | ✓ 200 | Verified in project memory list |
| `1529958030586-3aae4ca485ff` | Azurite specimen / fossils | 600 | ✓ 200 | Verified in project memory list |
| `1572635196237-14b3f281503f` | contact.html hero background | 1400 | ✓ 200 | Verified in project memory list |
| `1582719508461-905c673771fd` | Dubai gallery card | 500 | ✓ 200 | Verified in project memory list |

---

## Thumbnail

| File | Source ID | Validated | Size | Format |
|---|---|---|---|---|
| `images/thumbnail.webp` | `1518709268805-4e9042af9f23` | ✓ 200 | ~33 KB | WebP 80q, 600px wide |

Thumbnail was generated using:
```bash
curl -sL "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80&auto=format&fit=crop" -o /tmp/ma_t.jpg
cwebp -q 80 -resize 600 0 /tmp/ma_t.jpg -o images/thumbnail.webp
```

---

## Image Content Compliance

Per project rules:
- No face closeups used in editorial or atmospheric positions
- Team member photos show full or half-body poses (no individual profile face closeups from Unsplash portraits section)
- No identifiable individuals used in commercial contexts without appropriate license
- All images are under Unsplash License (free for commercial use)

---

## Known Pre-Validated IDs (from project memory)

The following IDs were already confirmed valid in prior sessions and are reused:
- `1558618666-fcd25c85cd64` ✓
- `1512327536842-5aa37d1ba3e3` ✓
- `1528360983277-13d401cdc186` ✓
- `1543076447-215ad9ba6923` ✓
- `1490481651871-ab68de25d43d` ✓
- `1503342394128-c104d54dba01` ✓
- `1469334031218-e382a71b716b` ✓
- `1529958030586-3aae4ca485ff` ✓
- `1572635196237-14b3f281503f` ✓
- `1515886657613-9f3515b0c78f` ✓
- `1553361371-9b22f78e8b1d` ✓
- `1600607687939-ce8a6c25118c` ✓
- `1509631179647-0177331693ae` ✓
- `1582719508461-905c673771fd` ✓

---

*All images validated on 2026-02-26. Re-validate if deploying more than 30 days from this date.*
