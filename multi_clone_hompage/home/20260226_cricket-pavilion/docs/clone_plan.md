# Clone Plan — THE CREASE Cricket Pavilion

**Slug:** `20260226_cricket-pavilion`
**Date:** 2026-02-26
**Category:** Luxury Sports / Private Members' Club
**Pages:** 5 (index, about, grounds, membership, contact)

---

## Concept Source

The design concept draws on the visual language and institutional character of English private members' clubs — specifically the MCC at Lord's Cricket Ground, the R&A, and Hurlingham Club. No actual HTML was cloned. All code is original.

**Reference inspirations (concept only):**
- MCC Long Room photography (heritage interior aesthetic)
- Hurlingham Club website (luxury members' club tone and structure)
- R&A website (navigation pattern and sport + heritage positioning)
- Rosewood Hotels digital identity (gold/dark luxury colour palette approach)

---

## Design Decisions

### Colour Palette
The `#141E12` dark cricket-field green was chosen to evoke the outfield at golden hour. The cream-gold `#D4C080` accent references the colour of a well-worn cricket ball and polished wood panelling. The pavilion green `#8CB060` echoes the chalk lines on a prepared pitch.

### Typography
**EB Garamond** (Google Fonts) provides the institutional gravitas required for a 135-year-old cricket club. Its italic variant is used for quotes and decorative elements. **Inter** provides technical clarity for specifications, fixture tables, and form labels.

### Layout Architecture
- `index.html`: Cinematic hero + 6 content sections. Pattern: label → title → divider → description → grid/layout.
- `about.html`: Timeline-driven narrative. 4 sections: history, founders, building, academy.
- `grounds.html`: Dual-ground presentation with technical specs + fixture table + regulations.
- `membership.html`: Conversion-focused. Tier cards → comparison table → process → testimonials → CTA.
- `contact.html`: Split layout — contact details left, enquiry form right.

### Animation Philosophy
GSAP ScrollTrigger stagger reveals. Conservative motion: y-offsets of 20–30px, durations of 0.9–1.2s. No distracting parallax or heavy motion — the brand is understated.

---

## Page-by-Page Section Plan

### index.html
| Section | Component | Image |
|---|---|---|
| Preloader | SVG cricket ball spin | — |
| Hero | Cinematic, word reveal | Unsplash 1543076447 |
| Grounds | 2-column image cards | 1529958030, 1512327536 |
| Fixtures | 6-card grid | — |
| Pavilion | Image + text + stats | 1558618666 |
| Membership | 3-tier cards | — |
| Academy | Image + programs | 1582719508 |
| CTA | Full-width text | — |
| Footer | 4-column + CoA | — |

### about.html
| Section | Content |
|---|---|
| Hero | English countryside (1524504388) |
| History | Timeline 1891–2026 + brand quote |
| Founders | 4-card grid of founding members |
| Building | Pavilion interior (1558769132) + features |
| Academy | Full-width image (1515886657) + stats grid |

### grounds.html
| Section | Content |
|---|---|
| Hero | Ground panorama (1529958030) |
| Ground I | Pavilion Ground specs + aerial diagram |
| Ground II | Meadow Ground specs + aerial diagram |
| Calendar | 10-fixture season table |
| Rules | 6-rule grid |

### membership.html
| Section | Content |
|---|---|
| Hero | Interior/formal (1509631179) |
| Intro | Stats + image (1558618666) |
| Tiers | 3 tier cards |
| Comparison | Full benefits table |
| Process | 4-step application |
| Testimonials | 3 member quotes |

### contact.html
| Section | Content |
|---|---|
| Hero | Architecture (1600607687) |
| Contact | Details + enquiry form |
| Visit | English countryside (1528360983) + travel info |
| Location | Map placeholder with coordinates |

---

## Technical Notes

- All pages: fixed navbar, GSAP CDN from cdnjs, `gsap.registerPlugin(ScrollTrigger)`
- Preloader on index.html only
- Scroll indicator on index.html only
- All internal href links use real `.html` filenames — no `#` anchors
- Form on contact.html has preventDefault + visual confirmation — no real submission
- CoA in footer uses Unicode `⚜` as placeholder
- Aerial ground diagrams use pure CSS circles and rectangles
