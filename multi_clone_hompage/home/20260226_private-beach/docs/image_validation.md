# AZURA — Image Validation Log

Validation date: 2026-02-26
Method: curl -I (HTTP status check)

---

## Primary Hero Image
| URL | Status | Used In |
|---|---|---|
| photo-1507525428034-b723cf961d3e | 200 OK ✓ | index hero, experiences/beach, membership intro, island section |

## Pre-Validated Fallback
| URL | Status | Used In |
|---|---|---|
| photo-1529958030586-3aae4ca485ff | 200 OK ✓ | membership hero bg |

---

## Secondary Images (Confirmed In Use)

### Landscape / Beach
| Unsplash ID | Description | Pages |
|---|---|---|
| photo-1544551763-46a013bb70d5 | Turquoise cove aerial | index cove, about island, experiences beach-f2 |
| photo-1519046904884-53103b34b206 | Mediterranean coastline | about origin |
| photo-1484821582734-6692f16d0eef | Ocean horizon | about hero, contact hero |

### Dining
| Unsplash ID | Description | Pages |
|---|---|---|
| photo-1414235077428-338989a2e8c0 | Restaurant fine dining | index dining, experiences dining |
| photo-1504674900247-0877df9cc836 | Mediterranean food plating | experiences dining panel |
| photo-1543352634-a1c51d9f1fa7 | Casual beach dining | experiences dining panel |

### Accommodation / Cabanas
| Unsplash ID | Description | Pages |
|---|---|---|
| photo-1520250497591-112f2f40a3f4 | Beach pool terrace | index cabanas (shoreline) |
| photo-1551882547-ff40c63fe5fa | Hotel terrace pavilion | index cabanas (horizon) |
| photo-1582719508461-905c673771fd | Luxury beach suite | index cabanas (estate) |

### Watersports / Water
| Unsplash ID | Description | Pages |
|---|---|---|
| photo-1559827260-dc66d52bef19 | Sea kayaking | index exp grid, experiences |
| photo-1472745942893-4b9f730c7668 | Sailing yacht | experiences watersports |
| photo-1530053969600-caed2596d242 | Freediving underwater | experiences watersports |
| photo-1544551763-77ef2d0cfc6c | Paddleboarding | experiences watersports |
| photo-1532289608746-5a76c5f87b27 | Snorkelling | experiences watersports |
| photo-1498654200943-1088dd4438ae | Superyacht | experiences watersports |

### Spa / Wellness
| Unsplash ID | Description | Pages |
|---|---|---|
| photo-1554244933-d876deb6b2ff | Spa treatment room | experiences spa |

---

## Notes
- All images use `?w=N&q=75–85&auto=format&fit=crop` Unsplash CDN parameters
- No local image copies are stored (CDN-only references)
- thumbnail.webp was generated from photo-1507525428034-b723cf961d3e (200 OK confirmed)
- No photographer attribution required under Unsplash license
- Images are decorative / illustrative — no identifiable individuals photographed in close-up
