# Image Validation Report — MERIDIAN GALLERY

**Template:** `20260226_art-gallery`
**Date:** 2026-02-26
**Validation method:** HTTP HEAD request via curl (200 OK required)

---

## Images Used

| Usage                  | Photo ID                          | URL                                                                                                                    | Status |
|------------------------|-----------------------------------|------------------------------------------------------------------------------------------------------------------------|--------|
| Hero — gallery interior| 1578301978018-3005759f48f7        | https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=1200&q=80&auto=format&fit=crop                         | VALID  |
| Exhibition — painting  | 1544967082-d9d25d867d66           | https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=1200&q=80&auto=format&fit=crop                            | VALID  |
| Artist 6 — corridor    | 1541961017774-22349e4a1262        | https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80&auto=format&fit=crop                          | VALID  |
| Artist 4 — installation| 1580136579312-4b4d99f7e5b3        | https://images.unsplash.com/photo-1580136579312-4b4d99f7e5b3?w=800&q=80&auto=format&fit=crop                          | VALID  |
| Artist 5 — painting    | 1513519245088-0e12902e35ca        | https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80&auto=format&fit=crop                          | VALID  |
| Artist 3 — sculpture   | 1518998053901-5348d3961a04        | https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80&auto=format&fit=crop                          | VALID  |
| Artist 2, About image  | 1531243625752-c0eb5edc17a5        | https://images.unsplash.com/photo-1531243625752-c0eb5edc17a5?w=1200&q=80&auto=format&fit=crop                         | VALID  |
| Artist 1 — with artwork| 1460661419201-fd4cecdf8a8b        | https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80&auto=format&fit=crop                          | VALID  |

---

## Notes

- All 8 image IDs sourced from the project brief's pre-validated list
- No face closeups or individual profile photos used
- All images serve multiple roles (reused across artists grid and masonry for efficiency)
- Unsplash CDN parameters used: `?w=1200&q=80&auto=format&fit=crop` for full-size, `?w=800&q=80&auto=format&fit=crop` for artist cards
- All images are content-appropriate for a fine art gallery context
