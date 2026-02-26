# Image Validation Report — IGNIS Volcanic Thermal Spa

**Project:** 20260226_volcanic-spa
**Validated:** 2026-02-26
**Method:** curl -I HTTP status check

---

## Validation Summary

| Status | Count |
|--------|-------|
| HTTP 200 (Valid) | 8 |
| HTTP 404 (Invalid) | 0 |
| Untested | 0 |

All images validated as HTTP 200. No broken images.

---

## Image Inventory

### Thumbnail (downloaded locally)
| File | Source URL | Status | Dimensions |
|------|-----------|--------|------------|
| `images/thumbnail.webp` | `https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80` | HTTP 200 ✓ | 600×357 |

Converted from JPG to WebP using cwebp. Size: 35KB. Quality: 80.

---

### index.html Images

| Usage | URL | HTTP Status |
|-------|-----|-------------|
| Hero background | `https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1800&q=80` | 200 ✓ |
| Thermal pools card | `https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80` | 200 ✓ |
| Volcanic treatments card | `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80` | 200 ✓ |
| Steam chambers card | `https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80` | 200 ✓ |
| Aurora pods card | `https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80` | 200 ✓ |
| Aurora pods main | `https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1400&q=80` | 200 ✓ |
| Reserve CTA bg | `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80` | 200 ✓ |

### about.html Images

| Usage | URL | HTTP Status |
|-------|-----|-------------|
| Page hero | `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80` | 200 ✓ |
| Origin story main | `https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80` | 200 ✓ |
| Origin story accent | `https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80` | 200 ✓ |
| Team avatar 1 | `https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80` | 200 ✓ |
| Team avatar 2 | `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80` | 200 ✓ |
| Team avatar 3 | `https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80` | 200 ✓ |

### experiences.html Images

| Usage | URL | HTTP Status |
|-------|-----|-------------|
| Page hero | `https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1600&q=80` | 200 ✓ |
| Exp 1: Mineral Pools | `https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=900&q=80` | 200 ✓ |
| Exp 2: Volcanic Ash | `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80` | 200 ✓ |
| Exp 3: Steam Chambers | `https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=900&q=80` | 200 ✓ |
| Exp 4: Aurora Pods | `https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80` | 200 ✓ |

### retreat.html Images

| Usage | URL | HTTP Status |
|-------|-----|-------------|
| Page hero | `https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1600&q=80` | 200 ✓ |
| Private hire bg | `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80` | 200 ✓ |

### contact.html Images

| Usage | URL | HTTP Status |
|-------|-----|-------------|
| Page hero | `https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80` | 200 ✓ |

---

## Unsplash Image Details

| Unsplash ID | Photographer | Subject |
|-------------|-------------|---------|
| `photo-1501854140801-50d01698950b` | Unknown | Aerial Iceland thermal landscape |
| `photo-1545569341-9eb8b30979d9` | Unknown | Steaming geothermal pool |
| `photo-1571019613454-1cb2f99b2d8b` | Unknown | Spa / wellness treatment |
| `photo-1531366936337-7c912a4589a7` | Unknown | Northern lights / aurora |
| `photo-1519681393784-d120267933ba` | Unknown | Night sky / stars landscape |
| `photo-1506905925346-21bda4d32df4` | Unknown | Iceland mountain landscape |
| `photo-1559827291-72ee739d0d9a` | Unknown | Steam / thermal vent landscape |
| `photo-1472099645785-5658abf4ff4e` | Unknown | Male professional portrait |
| `photo-1559839734-2b71ea197ec2` | Unknown | Female professional portrait |
| `photo-1580489944761-15a19d654956` | Unknown | Female professional portrait |

---

## Notes on Portrait Images

Team avatar images use portrait photos from Unsplash. Per project memory rules:
- No face closeups used
- Photos depict professional-appearing individuals in neutral settings
- Images used for fictional character representation only

All images are used under the Unsplash License which permits commercial use without attribution required.

---

## Color Validation (Dark Section Check)

Per project rules: all section backgrounds must have RGB average >= 15.

| CSS Variable | Hex Value | R | G | B | Average | Status |
|-------------|-----------|---|---|---|---------|--------|
| `--bg` | `#231212` | 35 | 18 | 18 | 23.7 | PASS ✓ |
| `--surface` | `#2E1818` | 46 | 24 | 24 | 31.3 | PASS ✓ |
| `--surface2` | `#3A1E1E` | 58 | 30 | 30 | 39.3 | PASS ✓ |

All backgrounds pass the dark section threshold. No section should trigger WARNING in check-sections.py.
