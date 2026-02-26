# THE CREASE — Members' Cricket Pavilion

**Slug:** `20260226_cricket-pavilion`
**Tier:** PRO — £49
**Status:** PUBLISHED
**Created:** 2026-02-26

---

## Brand Concept

THE CREASE is an ultra-exclusive private members' cricket pavilion in the English countryside. Founded in 1891, it maintains two heritage cricket grounds, a coaching academy, and a Michelin-level members' dining room. Fewer than 200 members worldwide.

**Tagline:** "The Game. The Ground. The Brotherhood."

---

## Design System

| Token | Value | Notes |
|---|---|---|
| `--bg` | `#141E12` | avg(R+G+B)/3 = 22.7 — passes check |
| `--surface` | `#1C2A18` | avg = 26.7 — passes check |
| `--accent` | `#D4C080` | Cream/ivory gold |
| `--accent2` | `#8CB060` | Pavilion green |
| `--text` | `#F0EEE0` | Off-white |
| `--text-muted` | `#708050` | Muted green-grey |
| Heading font | EB Garamond | Google Fonts |
| Body font | Inter | Google Fonts |

---

## File Structure

```
20260226_cricket-pavilion/
├── index.html          # Main landing page
├── about.html          # History, founding members, academy
├── grounds.html        # Two grounds, pitch specs, match calendar
├── membership.html     # Tiers, benefits, application process
├── contact.html        # Enquiry form, address, visit info
├── meta.json           # Template metadata
├── readme.md           # This file
├── images/
│   └── thumbnail.webp  # 600px wide, 80% quality
└── docs/
    ├── clone_plan.md
    ├── originality_report.md
    └── image_validation.md
```

---

## Pages Overview

### index.html
- Cricket ball SVG preloader
- Fixed scroll indicator (left side, cream accent)
- Cinematic hero: golden hour, word-by-word title reveal, Est. MDCCCXCI badge
- 6 sections: Grounds, Fixtures, Pavilion, Membership, Academy, CTA
- GSAP ScrollTrigger animations throughout
- Full footer with founding year and CoA placeholder

### about.html
- Heritage timeline (1891–2026)
- Founding members grid
- Pavilion building features
- Academy statistics
- Recruiting CTA

### grounds.html
- Pavilion Ground detail with specs
- Meadow Ground detail with specs
- Full 2026 match calendar table
- Ground regulations (6 rules)

### membership.html
- Introduction with key statistics
- Three-tier comparison (Fielder / Pavilion / Patron)
- Full feature comparison table
- Four-step application process
- Member testimonials

### contact.html
- Secretary's office details (address, email, phone)
- Enquiry form (type selector, nomination status, message)
- Visit information (rail, road, parking, open days)
- Location map placeholder

---

## GSAP Implementation

All animations follow strict project rules:
- `immediateRender: false` at TOP LEVEL of all `gsap.from()` calls
- No `opacity: 0` in CSS on content elements
- ScrollTrigger `once: true` for all scroll animations
- Stagger values: 0.08–0.12
- Duration: 0.9–1.2s
- Ease: `power2.out`
- Y offset: 20–30px max

---

## Unsplash Images Used

| ID | Description | Used in |
|---|---|---|
| `1543076447-215ad9ba6923` | Sports/Cricket | Hero bg (fallback), thumbnail |
| `1529958030586-3aae4ca485ff` | Green landscape | Ground I card |
| `1512327536842-5aa37d1ba3e3` | Meadow/pastoral | Ground II card |
| `1558618666-fcd25c85cd64` | Interior/elegant | Pavilion section |
| `1524504388940-b1c1722653e1` | English countryside | About hero |
| `1558769132-cb1aea458c5e` | Architecture | Building section |
| `1509631179647-0177331693ae` | Interior/formal | Membership hero |
| `1515886657613-9f3515b0c78f` | Athlete/silhouette | Academy |
| `1582719508461-905c673771fd` | Sports training | Academy section |
| `1600607687939-ce8a6c25118c` | Architecture/formal | Contact hero |
| `1528360983277-13d401cdc186` | English countryside | Visit section |

---

## Color Compliance

All background sections checked against `avg(R+G+B)/3 >= 15` rule:
- `--bg: #141E12` → avg = 22.7 — PASS
- `--surface: #1C2A18` → avg = 26.7 — PASS
- All images use `filter: brightness(0.28–0.75)` — no section goes below avg 15
