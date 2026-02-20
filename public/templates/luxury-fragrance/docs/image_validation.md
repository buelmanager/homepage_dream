# Image Validation Report — VELLUM Luxury Fragrance

**Validated:** 2024-02-19
**Method:** HTTP GET with User-Agent header, 10s timeout
**Tool:** Python urllib.request

---

## Validation Results

| ID | URL | Status | Result | Used In |
|----|-----|--------|--------|---------|
| hero-a | `photo-1541643600914-78b084683702` | 404 | **FAIL — EXCLUDED** | — |
| hero-b | `photo-1587017539504-67cfbddac569` | 200 | **PASS** | Hero background |
| hero-c | `photo-1608571423902-eed4a5ad8108` | 200 | **PASS** | Hero overlay/accent |
| hero-d | `photo-1519338381761-c7523edc1f46` | 200 | **PASS** | Manifesto section bg |
| botanical-rose | `photo-1500462918059-b1a0cb512f1d` | 200 | **PASS** | Ingredient: Rose |
| botanical-lav | `photo-1416879595882-3373a0480b5b` | 200 | **PASS** | Ingredient: Lavender |
| botanical-oud | `photo-1556909172-54557c7e4fb7` | 200 | **PASS** | Ingredient: Oud |
| botanical-amber | `photo-1508615039623-a25605d2b022` | 200 | **PASS** | Ingredient: Amber |
| botanical-jasmine | `photo-1464207687429-7505649dae38` | 200 | **PASS** | Ingredient: Jasmine |
| botanical-cedar | `photo-1448375240586-882707db888b` | 200 | **PASS** | Ingredient: Cedar |
| bottle-a | `photo-1592945403244-b3fbafd7f539` | 200 | **PASS** | Collection: ELEGY |
| bottle-b | `photo-1631815588090-d4bfec5b1ccb` | 200 | **PASS** | Collection: SOLENNE |
| bottle-c | `photo-1523293182086-7651a899d37f` | 200 | **PASS** | Collection: DUSK RESIN |
| bottle-d | `photo-1589782182703-2aaa69037b5b` | 200 | **PASS** | Hero accent / detail |
| bottle-e | `photo-1617450365226-9bf28c04e130` | 200 | **PASS** | Consultation section bg |
| atelier-a | `photo-1558769132-cb1aea458c5e` | 200 | **PASS** | Atelier process bg |
| atelier-b | `photo-1493612276216-ee3925520721` | 200 | **PASS** | Atelier step card |
| atelier-c | `photo-1534528741775-53994a69daeb` | 200 | **PASS** | Press section portrait |

---

## Summary

- **Total candidates tested:** 18
- **PASS:** 17
- **FAIL:** 1 (excluded from implementation)
- **Final images used in code:** 17 (all validated 200 OK)

All image URLs in index.html are verified accessible.
