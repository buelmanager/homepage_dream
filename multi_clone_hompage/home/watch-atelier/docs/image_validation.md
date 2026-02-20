# Image Validation Report — MERIDIAN Watch Atelier

**Date:** 2026-02-19
**Method:** HTTP HEAD request via Python 3 urllib (timeout: 10s)
**Acceptance criterion:** HTTP 2xx response code

---

## Validation Results

| # | Label | Photo ID | Final URL | Status | Result | Used In |
|---|-------|----------|-----------|--------|--------|---------|
| 1 | watch-macro-1 | photo-1523170335258-f5ed11844a49 | https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1800&q=80 | 200 | **PASS** | Hero background |
| 2 | watch-luxury-2 | photo-1547996160-81dfa63595aa | https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=900&q=80 | 200 | **PASS** | Collection Ref. 01 SOLARIS card |
| 3 | watch-movement-3 | photo-1614164185128-e4ec99c436d7 | https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1800&q=80 | 200 | **PASS** | Hero depth layer (movement detail) |
| 4 | watch-gold-4 | photo-1585386959984-a4155224a1ad | https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=900&q=80 | 200 | **PASS** | Candidate (unused — sufficient images available) |
| 5 | watch-dark-5 | photo-1639739528736-d6bf8dea1c8d | https://images.unsplash.com/photo-1639739528736-d6bf8dea1c8d?w=1800&q=80 | 404 | **FAIL** | Excluded — not used |
| 6 | watch-close-6 | photo-1600185365926-3a2ce3cdb9eb | https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=900&q=80 | 200 | **PASS** | Collection Ref. 03 ECLIPSE card |
| 7 | watch-wrist-7 | photo-1551816230-ef5deaed4a26 | https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=900&q=80 | 200 | **PASS** | Collection Ref. 02 NOCTURNE card |
| 8 | watch-workshop-8 | photo-1611021061285-f59a6bde3e96 | https://images.unsplash.com/photo-1611021061285-f59a6bde3e96?w=1800&q=80 | 404 | **FAIL** | Excluded — not used |
| 9 | watchmaker-hands-9 | photo-1584036561566-baf8f5f1b144 | https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=1200&q=80 | 200 | **PASS** | Atelier section main image |
| 10 | watchmaker-tools-10 | photo-1593590019691-4421cccb41cd | https://images.unsplash.com/photo-1593590019691-4421cccb41cd?w=1800&q=80 | 404 | **FAIL** | Excluded — not used |
| 11 | watch-dial-11 | photo-1508685096489-7aacd43bd3b1 | https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=900&q=80 | 200 | **PASS** | Collection Ref. 04 AURORA card |
| 12 | watch-movement-12 | photo-1546868871-7041f2a55e12 | https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80 | 200 | **PASS** | Atelier detail grid (movement close-up) |
| 13 | dark-atelier-13 | photo-1556742049-0cfed4f6a45d | https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1800&q=80 | 200 | **PASS** | Inquiry/commission form background |
| 14 | luxury-desk-14 | photo-1507003211169-0a1dd7228f2d | https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1800&q=80 | 200 | **PASS** | Candidate (unused) |
| 15 | precision-tools-15 | photo-1565993867988-08a83e4437f3 | https://images.unsplash.com/photo-1565993867988-08a83e4437f3?w=1800&q=80 | 404 | **FAIL** | Excluded — not used |
| 16 | watch-box-16 | photo-1546868871-7041f2a55e12 | (same as #12) | 200 | **PASS** | Candidate (same ID as #12, counted once) |
| 17 | atelier-light-17 | photo-1502945015378-0e284ca1a5be | https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=1800&q=80 | 200 | **PASS** | Candidate (unused) |
| 18 | watch-collection-18 | photo-1557531365-e8b22d93dbd0 | https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?w=1200&q=80 | 200 | **PASS** | Heritage section decorative background |
| 19 | gears-mechanical-19 | photo-1563861826100-9cb868fdbe1c | https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&q=80 | 200 | **PASS** | Atelier detail grid (gears close-up) |
| 20 | luxury-still-20 | photo-1495555961986-b9e36d6de9cf | https://images.unsplash.com/photo-1495555961986-b9e36d6de9cf?w=1800&q=80 | 404 | **FAIL** | Excluded — not used |

---

## Summary

| | Count |
|---|---|
| **Total Candidates** | 20 |
| **PASS (2xx)** | 15 |
| **FAIL (404)** | 5 |
| **Used in final HTML** | 9 |
| **All used URLs verified** | ✅ Yes |

---

## Images Used in Final Output

| Section | URL |
|---------|-----|
| Hero background | photo-1523170335258-f5ed11844a49 |
| Hero depth layer | photo-1614164185128-e4ec99c436d7 |
| Collection: Ref. 01 SOLARIS | photo-1547996160-81dfa63595aa |
| Collection: Ref. 02 NOCTURNE | photo-1551816230-ef5deaed4a26 |
| Collection: Ref. 03 ECLIPSE | photo-1600185365926-3a2ce3cdb9eb |
| Collection: Ref. 04 AURORA | photo-1508685096489-7aacd43bd3b1 |
| Atelier: main image (hands) | photo-1584036561566-baf8f5f1b144 |
| Atelier: detail movement | photo-1546868871-7041f2a55e12 |
| Atelier: detail gears | photo-1563861826100-9cb868fdbe1c |
| Heritage: decorative bg | photo-1557531365-e8b22d93dbd0 |
| Inquiry: form background | photo-1556742049-0cfed4f6a45d |

**All 11 image slots use validated PASS URLs only. No FAIL URL appears in the final HTML.**
