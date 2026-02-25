# Image Validation — VOSSLER & SON (luthier-atelier)

## Validation Date
2026-02-26

## Method
All Unsplash image URLs validated via `curl -I` HTTP status check.
Only images returning HTTP 200 are included in the page.

---

## Validated Images

| Usage                     | Unsplash Photo ID                     | URL Pattern                        | Status |
|---------------------------|---------------------------------------|------------------------------------|--------|
| Hero background           | `1511512578047-dfb367046420`          | w=1920&q=80&auto=format&fit=crop   | 200 OK |
| Violin card (Instruments) | `1465821185474-20f201100d6e`          | w=800&q=80&auto=format&fit=crop    | 200 OK |
| Viola card (Instruments)  | `1558584673-f7bfb8a10e80`             | w=800&q=80&auto=format&fit=crop    | 200 OK |
| Cello card (Instruments)  | `1513883049090-d0b7439799bf`          | w=800&q=80&auto=format&fit=crop    | 200 OK |
| Notable — Violin soloist  | `1507838153414-b4b713384a76`          | w=800&q=80&auto=format&fit=crop    | 200 OK |
| Notable — Cello soloist   | `1493225457124-a3eb161ffa5f`          | w=800&q=80&auto=format&fit=crop    | 200 OK |
| Notable — Viola soloist   | `1518609878373-06d740f60d8b`          | w=800&q=80&auto=format&fit=crop    | 200 OK |
| Workshop gallery (large)  | `1548550023-2631f049773f`             | w=900&q=80&auto=format&fit=crop    | 200 OK |
| Workshop gallery (small1) | `1558584673-f7bfb8a10e80`             | w=600&q=80&auto=format&fit=crop    | 200 OK |
| Workshop gallery (small2) | `1465821185474-20f201100d6e`          | w=600&q=80&auto=format&fit=crop    | 200 OK |

---

## Image Selection Notes

- All IDs sourced from the pre-validated list provided in the project brief.
- IDs `1465821185474-20f201100d6e` and `1558584673-f7bfb8a10e80` are reused in workshop
  gallery at smaller crop sizes — visually distinct from instrument card usage.
- No images show individual portraits, face closeups, or identifiable real persons.
- All images are content-appropriate for a premium luthier / instrument-making brand.

---

## Unsplash License Note

All Unsplash images are free for commercial use under the Unsplash License.
No attribution is required; included here for transparency.
