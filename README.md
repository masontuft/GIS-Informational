# Idaho Falls Points of Interest Map

An interactive GIS web application demonstrating core mapping concepts using Leaflet.js, centered on the Idaho Falls, Idaho region.

## Live Demo

Open `index.html` in a browser (or serve with any static file server) — no build step required.

```bash
npx serve .
# then open http://localhost:3000
```

## Features

### Core Requirements
- **Basemap** – OpenStreetMap tile layer via Leaflet.js with zoom/pan controls
- **25 Markers** – Real Idaho Falls points of interest spread across the city
- **Structured Data** – Each marker stores title, description, category, and lat/lng in `data.js`
- **Interactive Popups** – Click any marker to see its name, description, category badge, and coordinates
- **Application Title** – Prominent header visible at all times without map interaction

### Stretch Challenges
- **Stretch B – Marker Filtering** – Sidebar buttons let users show/hide markers by category; "Show All" / "Hide All" quick actions; live count of visible markers
- **Stretch C – Multiple Marker Types** – Each of the 5 categories uses a distinct color and emoji icon; a color-coded legend explains marker styles

## Marker Categories

| Category   | Color  | Count |
|------------|--------|-------|
| Parks       | Green  | 5     |
| Restaurants | Red    | 5     |
| Landmarks   | Blue   | 5     |
| Shopping    | Purple | 5     |
| Government  | Gold   | 5     |

## Technology

- **Mapping Library:** [Leaflet.js](https://leafletjs.com/) v1.9.4 (via CDN, no API key needed)
- **Basemap Tiles:** OpenStreetMap
- **Frontend:** Plain HTML, CSS, JavaScript — no framework or build tools required
- **Data:** Static `data.js` array of 25 real Idaho Falls locations

## File Structure

```
├── index.html          # Application shell
├── style.css           # Dark-theme UI + marker/popup styles
├── app.js              # Map initialization, marker rendering, filter logic
├── data.js             # 25 POI records + category config
├── Spec.md             # Project specification
├── sprint_time_log.md  # Hours log (11 hours total)
└── README.md           # This file
```
