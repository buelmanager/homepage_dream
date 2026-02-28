# Clone Plan — 20260228_photographer-portfolio

## Target Brand
LUMIÈRE STUDIO — fine art and documentary photographer portfolio

## Design Constraints Applied
- **Hero**: Type B Parallax (mousemove + layered backgrounds)
- **Palette**: P8 Onyx Stone (#181818 bg, #B0B0C0 accent)
- **Font**: F8 Bodoni Moda + Work Sans
- **Animation**: A4 Dramatic (y:40, duration:1.2s, stagger:0.15, ease:power2.inOut)

## Pages Built
1. `index.html` — 11 sections: Preloader, Scroll indicator, Navbar, Hero-B, Vision, Signature Series, Featured Work, Awards/Press, Client List, Commission CTA, Footer
2. `about.html` — 5 sections: Banner, Artist Statement, Philosophy, Exhibition History, Publications
3. `collection.html` — 4 sections: Banner, Filter+Grid, Photo Masonry, Lightbox CTA
4. `process.html` — 5 sections: Banner, Creative Process (4 steps), Equipment, Location Scouting, Post-Production
5. `contact.html` — 5 sections: Banner, Commission Form, Studio Info, Print Orders, FAQ

## GSAP Compliance Checklist
- [x] All gsap.from() with scrollTrigger have immediateRender: false at top level
- [x] No CSS opacity:0 on content elements
- [x] preHideBelowFold function on all pages
- [x] Scroll indicator visible in 2 places (preloader callback + setTimeout 4000ms)
- [x] collection-grid overflow: visible
- [x] Philosophy grid display:grid
- [x] No hardcoded dark hex in footer (uses var(--bg))
- [x] Hero overlay opacity <= 0.65
- [x] Hero brightness >= 0.55
- [x] SplitText polyfill embedded inline (no CDN)
- [x] GSAP from cdnjs.cloudflare.com only
