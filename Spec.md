# GIS Mapping Demonstration Application – Specification

## 1. Overview

This project is a single-page **web** application that demonstrates core GIS mapping concepts using a modern mapping library such as Leaflet, ArcGIS JS, or Google Maps.[page:1] The application displays an interactive map of a chosen region (e.g., Idaho Falls) with at least 20 markers, rich popups, and advanced features including live data from a public server, marker filtering, and multiple marker types.[page:1]

The goal is to learn and practice GIS fundamentals (coordinates, projections, layers, markers, and user interaction) while building a deployable demonstration hosted in a public GitHub repository.[page:1]

---

## 2. Objectives and Learning Goals

- Understand and apply basic GIS concepts: latitude/longitude, coordinate systems, projections, and JSON/GeoJSON data structures.[page:1]  
- Learn to use a mapping library (Leaflet, ArcGIS JS, or Google Maps) to initialize maps, add basemaps, and handle interactions like zoom, pan, and clicks.[page:1]  
- Load and visualize real geospatial data (points and, optionally, polygons/lines) on a web map.[page:1]  
- Implement the 5 core mapping requirements plus all 3 stretch challenges: live data from a public server, marker filtering, and multiple marker types.[page:1]  
- Practice incremental development, version control, and professional documentation (`README.md`, `spec.md`, and sprint time log).[page:1]  

---

## 3. Core Functional Requirements

### 3.1 Basemap

- The application shall display a basemap when the page loads, using one of the map styles provided by the chosen mapping library (e.g., roads, satellite, topographic, or hybrid).[page:1]  
- The user shall be able to zoom and pan the basemap using built-in map controls and gestures.[page:1]  

### 3.2 Markers

- The application shall place at least 20 markers on the map within the region of interest.[page:1]  
- Marker locations shall be defined by latitude and longitude coordinates from a data source (static JSON, embedded data, or remote API).[page:1]  
- Markers shall be visible at typical zoom levels and not all stacked at the same location.[page:1]  

### 3.3 Marker Data Storage

- The application shall store structured information for each marker, including at least:  
  - A title (location name)  
  - A short description or category  
  - Latitude and longitude coordinates[page:1]  
- This information shall be stored separately from the visual map layer (e.g., in a JavaScript array, JSON/GeoJSON file, or API response) and then rendered onto the map.[page:1]  

### 3.4 Marker Interaction

- The application shall allow the user to click on a marker and display a popup or info window.[page:1]  
- The popup/info window shall display the stored information about that marker, including its title and description.[page:1]  
- Popups shall appear near the marker and be easy to dismiss or replace by clicking elsewhere.[page:1]  

### 3.5 Application Title

- The website or app shall display a clear title in the UI, such as “Idaho Falls Points of Interest Map” or another descriptive project name.[page:1]  
- The title shall be visible without user interaction (e.g., in a header above or beside the map).[page:1]  

---

## 4. Stretch Features (Planned)

The project plans to implement all three stretch challenges, with priority given to live data from a public server.[page:1]

### 4.1 Live Data from a Public Server (Primary Stretch)

- The application shall request marker data from a publicly available server or API (e.g., city open data portal, public GeoJSON feed, or other REST endpoint).[page:1]  
- On page load, the app shall fetch the data, parse it, and create markers dynamically so the map content stays up to date with the source.[page:1]  
- The app shall reconcile the “at least 20 markers” requirement with the live data; if the remote source returns fewer than 20 items, a small local dataset may be merged in to reach 20.[page:1]  
- If the API request fails (network error, CORS, bad response), the application shall handle it gracefully by:  
  - Displaying a brief error message in the UI, and  
  - Falling back to a local static dataset so the map still functions.[page:1]  

### 4.2 Marker Filtering

- Marker data shall include a categorical property (e.g., `type: "park" | "restaurant" | "trail"` or similar).[page:1]  
- The application shall provide at least one filter control (e.g., checkboxes, dropdown, or toggle buttons) that allows the user to show or hide subsets of markers based on this category.[page:1]  
- When the user changes the filter selection, the map shall update to display only markers that match the chosen criteria, without requiring a page reload.[page:1]  
- If live data is used, filtering shall work on the fetched dataset without needing a second API request.[page:1]  

### 4.3 Multiple Data Types and Marker Graphics

- The application shall include more than one type of data on the map (e.g., multiple categories of places, or conceptually different entities like landmarks vs. sensors).[page:1]  
- Each data type shall use a visually distinct marker graphic or icon (e.g., different colors or shapes) so users can easily differentiate them.[page:1]  
- The UI shall clearly communicate what each marker style represents, either via:  
  - A legend on the map, or  
  - A short explanation in the sidebar/header.[page:1]  

---

## 5. Data and Content

### 5.1 Geospatial Data Sources

- Required: at least 20 point locations with:  
  - Coordinates (lat, lon)  
  - Title  
  - Description and/or category[page:1]  

- Live source (primary plan):  
  - A public API or data feed that returns JSON or GeoJSON with at least the fields necessary to derive coordinates and categories.[page:1]  
  - The spec assumes the data may need light transformation (e.g., renaming fields, converting types) before being used to create markers.[page:1]  

- Fallback/local data:  
  - A local JSON/GeoJSON file stored in the repo that mirrors the structure of the live data to simplify swapping between them.[page:1]  

### 5.2 Static Assets and Styling

- The app shall include CSS to ensure the map container fills the intended portion of the page and is usable on common laptop and tablet screen sizes.[page:1]  
- For multiple marker types, at least two icon or color styles shall be defined and applied based on each marker’s category.[page:1]  

---

## 6. Technology and Architecture

- Frontend: HTML, CSS, JavaScript.[page:1]  
- Mapping library: one of  
  - Leaflet.js,  
  - ArcGIS JS API, or  
  - Google Maps JavaScript API (final choice documented in `README.md`).[page:1]  
- Data access:  
  - Fetch API (or similar) to obtain data from a public server.  
  - Local JSON/GeoJSON file(s) for fallback and development.[page:1]  
- Development tools:  
  - Node.js-based local web server for development.  
  - VS Code as the primary editor.  
  - Git and GitHub for source control and deployment.[page:1]  

---

## 7. Practice and Development Plan

- Phase 1 – Basics:  
  - Initialize a simple “Hello World” map with a basemap.  
  - Hard-code a few markers and popups to verify interaction.[page:1]  

- Phase 2 – Core Requirements:  
  - Load at least 20 markers from a static dataset.  
  - Confirm popups show title and description correctly.  
  - Add a clear application title and basic styling.[page:1]  

- Phase 3 – Live Data (Primary Stretch):  
  - Integrate a public API or data feed.  
  - Map the remote data fields into the internal marker model.  
  - Implement fallback behavior if the API fails.[page:1]  

- Phase 4 – Filtering and Marker Types:  
  - Add category fields to marker data.  
  - Implement UI controls for filtering markers by category.  
  - Define multiple marker styles and a corresponding legend.[page:1]  

Time will be logged in `sprint_time_log.md`, targeting at least 10 hours devoted to this mapping module over the sprint.[page:1]  

---

## 8. Risks and Mitigations

- Risk: Public API issues (CORS, rate limits, schema changes).  
  - Mitigation: Choose a stable public data source, cache sample responses locally, and maintain a static fallback dataset.[page:1]  

- Risk: Complexity of filtering logic and multiple marker styles.  
  - Mitigation: Start with a minimal filter (e.g., two categories) and two marker styles, then iterate if there is extra time.[page:1]  

- Risk: Time constraints with all three stretch features.  
  - Mitigation: Complete core requirements, then live data, then filtering, and finally multiple marker types/legend if time permits.[page:1]  

---

## 9. Deliverables

- Working web application that:  
  - Displays a basemap.  
  - Shows at least 20 markers.  
  - Stores information for each marker.  
  - Shows marker details when clicked.  
  - Displays a clear title in the UI.  
  - Uses live data from a public server (with fallback).  
  - Allows filtering of markers.  
  - Displays more than one data type with distinct marker graphics.[page:1]  

- Public GitHub repository containing:  
  - All source code.  
  - `README.md` with overview, setup, and usage.  
  - This `spec.md`.  
  - `sprint_time_log.md` showing at least 10 hours for this module.[page:1]  

- (If required by the course) Short demonstration or walkthrough explaining:  
  - Data flow from public server/local dataset into the map.  
  - Filtering behavior and marker categorization.  
  - Visual legend and marker type meanings.[page:1]  