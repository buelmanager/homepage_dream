# Image Validation Report — AQUA SANCTUM

**Date:** 2026-02-26
**Method:** Curl HTTP HEAD request validation

---

## Unsplash Images Used

All images use the pattern:
`https://images.unsplash.com/photo-{ID}?w={size}&q=80&auto=format&fit=crop`

| ID | Description | Usage | Status |
|----|-------------|-------|--------|
| 1544551763-46a013bb70d5 | Overwater bungalows Maldives | Hero bg, Experience section | ✅ Valid |
| 1520250497591-112f2f40a3f4 | Infinity pool tropical | Facilities main, Nutrition visual | ✅ Valid |
| 1571019613454-1cb2f99b2d8b | Luxury spa treatment | Treatment card 3 (Coral Glow) | ✅ Valid |
| 1540555700478-4be290a03d6b | Water spa zen | Treatment card 1 (Crystal Water) | ✅ Valid |
| 1507525428034-b723cf961d3e | Tropical turquoise water | Reservations bg overlay | ✅ Valid |
| 1573790387438-4da905039392 | Spa stones water | Treatment card 2 (Deep Ocean Stone) | ✅ Valid |
| 1506905925346-21bda4d32df4 | Overwater villa night | Facilities floating image | ✅ Valid |
| 1559827291-72fb6f315e40 | Yoga on water platform | Treatment card 4 (Drift Float) | ✅ Valid |

---

## Image Size Parameters

| Section | Width | Quality |
|---------|-------|---------|
| Hero background | 1800px | q=80 |
| Experience left | 900px | q=80 |
| Facilities main | 900px | q=80 |
| Treatment cards | 600px | q=80 |
| Nutrition visual | 700px | q=80 |
| Facilities float | 400px | q=80 |
| Reservations overlay | 1800px | q=80 |

---

## Content Policy Compliance

- No face closeups ✅
- No individual profile photos ✅
- All images are landscape/architectural/product photography ✅
- No identifiable individuals as focal subjects ✅

---

## Notes

- All images are loaded with `loading="lazy"` attribute for performance
- Hero bg is loaded eagerly (above the fold)
- All IDs from the approved validated list provided in project brief
