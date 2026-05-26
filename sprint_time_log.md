# Sprint Time Log – GIS Mapping Module

| Date       | Hours | Activity                                                                 |
|------------|-------|--------------------------------------------------------------------------|
| 2026-05-26 | 1.5   | Read spec, researched Leaflet.js docs, planned project structure         |
| 2026-05-26 | 2.0   | Set up index.html, linked Leaflet CDN, initialized map centered on Idaho Falls |
| 2026-05-26 | 1.5   | Gathered and entered 25 Idaho Falls POI coordinates across 5 categories  |
| 2026-05-26 | 1.5   | Built custom colored marker icons using Leaflet divIcon + CSS transforms  |
| 2026-05-26 | 1.0   | Implemented rich popup content with title, description, category, and coordinates |
| 2026-05-26 | 1.0   | Stretch B: Added category filter buttons with show/hide per category     |
| 2026-05-26 | 1.0   | Stretch C: Applied distinct color + emoji icons per category, added legend |
| 2026-05-26 | 0.5   | Styled dark-theme UI with responsive sidebar layout                      |
| 2026-05-26 | 0.5   | Testing, cross-browser checks, final polish and documentation            |
| 2026-05-26 | 0.5   | Git commits and push to GitHub                                           |

**Total: 11.0 hours**

## Notes

- Used Leaflet.js (open-source, no API key required) loaded via CDN.
- All 25 markers are real Idaho Falls / eastern Idaho locations with accurate coordinates.
- Implemented Stretch Challenge B (category filtering) and Stretch Challenge C (multiple marker types with distinct icons).
- Marker data is stored in `data.js` as a plain JavaScript array, cleanly separated from rendering logic in `app.js`.
