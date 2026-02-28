# Clone Plan — FORMA ATELIER (20260228_architect-portfolio)

## Research Sources

- Architecture portfolio trend research via WebSearch (2026)
- Hero layout reference: `multi_clone_hompage/prompt/hero-layouts.md` — Type E (Grid/Pattern Canvas)
- Design brief: `/tmp/20260228_architect-portfolio-design-brief.md`

## Design Decisions

### Hero Layout: Type E
Selected per design brief mandate. Type E was used least in the existing portfolio (only 2 existing pages: laser-tag-arena, vr-arcade). Architecture is a natural fit for the geometric/technical grid aesthetic.

Implementation variation chosen: **Hybrid Grid**
- Canvas-based architectural line grid (70px intervals with intersection dots)
- Image panel grid (6 cells in 3x2 grid) occupying right 55% of viewport
- Left content area with measurement line accents from canvas
- Sequential GSAP reveal of image cells on load

### Color Palette: P5 Arctic Slate
Matches the Nordic/Scandinavian brand positioning. The cool blue-gray accent (#A0C4D8) references architectural materials: concrete, steel, glass. Background (#141820) passes the dark threshold check (avg RGB = 20.33).

### Typography: F3 Bebas Neue + DM Sans
- Bebas Neue: Large display text, project names, section headings — conveys precision and structure
- DM Sans 300/400/500: Body text, labels, metadata — clean and readable at small sizes

### Animation: A3 Precise
x:-20px slide-in (left to right) rather than y-based fade. This mimics technical drawing reveal — elements slide into position as if being drafted. Tight stagger (0.04s) creates a precise, considered effect rather than theatrical delay.

## Color Validation

| Color | RGB Avg | Status |
|-------|---------|--------|
| --bg: #141820 | (20+24+32)/3 = 25.3 | PASS (>20) |
| --surface: #1C2030 | (28+32+48)/3 = 36.0 | PASS |
| --surface2: #222838 | (34+40+56)/3 = 43.3 | PASS |
| --border: #181C28 | (24+28+40)/3 = 30.7 | PASS |

All section backgrounds use `var(--bg)` or `var(--surface)` — never hardcoded dark hex values.

## Unsplash Image IDs Used

| ID | Content |
|----|---------|
| 1486325212027 | Architectural facade (hero-1) |
| 1487958449943 | Minimalist building (hero-2) |
| 1503387762-592 | Architectural model (hero-3) |
| 1524758631624 | Glass building (hero-4) |
| 1531971589569 | Concrete exterior (hero-5) |
| 1512917774080 | Modern house (hero-6, interior-2) |
| 1517581177682 | Architecture detail (hero-7) |
| 1558618666-fcd | Geometric structure (hero-8) |
| 1600585154526 | Residential interior (project-1) |
| 1600573472591 | Modern interior (project-2) |
| 1574691250077 | Tower exterior (project-3) |
| 1541123437800 | Minimalist home (project-4) |
| 1565182999561 | Industrial space (project-5) |
| 1522708323590 | Contemporary interior (project-6) |
| 1497366216548 | Office workspace (studio-1) |
| 1479839672679 | Dark interior (studio-2) |
| 1493246507139 | Mountain architecture (studio-3) |
| 1600047509807 | Modern kitchen/interior (interior-1) |
| 1545324418-cc1 | Residential exterior (interior-3) |
| 1513694203232 | Workspace/studio (process-1) |
| 1565183997392 | Technical/blueprint (process-2) |
| 1505691938895 | Interior space (additional) |

All IDs verified HTTP 200 before download. No forbidden IDs used.
