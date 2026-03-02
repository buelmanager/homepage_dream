# Image Validation — Bushido Martial Arts School

## Validation Date
2026-03-02

## Method
All URLs validated with `curl -sI` — HTTP 200 confirmed before use.

## Validated Images

| ID | URL | Status | Used In |
|----|-----|--------|---------|
| 1549060279-7e168fcee0c2 | https://images.unsplash.com/photo-1549060279-7e168fcee0c2 | 200 OK | Hero, About |
| 1571019614242-c5c5dee9f50b | https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b | 200 OK | Programs: Kendo |
| 1574680178050-55c6a6a96e0a | https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a | 200 OK | Programs: Judo |
| 1521537634581-0dced2fee2ef | https://images.unsplash.com/photo-1521537634581-0dced2fee2ef | 200 OK | Programs: Taekwondo |
| 1540573133985-87b6da6d54a9 | https://images.unsplash.com/photo-1540573133985-87b6da6d54a9 | 200 OK | Programs: Combat Philosophy |
| 1554284126-aa88f22d8b74 | https://images.unsplash.com/photo-1554284126-aa88f22d8b74 | 200 OK | Dojo section |

## Image Treatment
All images use `filter: brightness(0.65-0.75) saturate(0.5-0.6)` to maintain the desaturated Onyx Stone aesthetic.

## Notes
- No face closeups or individual profile photos used
- All images use standard Unsplash free license
- Parameters: `?w=800&auto=format&fit=crop&q=80` for standard images
- Hero: `?w=1400&auto=format&fit=crop&q=85` for full-screen background
