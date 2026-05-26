# GIS Mapping Demonstration Application – Specification

## 1. Overview

This project is a single-page **web** application that demonstrates core GIS mapping concepts using a modern mapping library such as Leaflet, ArcGIS JS, or Google Maps.[page:1] The application displays an interactive map of the Idaho Falls area (or another chosen region) with at least 20 markers, rich popups, and optional advanced features selected from the stretch challenges.[page:1]

The goal of this module is to learn and practice GIS fundamentals (coordinates, projections, layers, markers, and user interaction) while building a working demonstration that can be deployed and shared via a public GitHub repository.[page:1]

---

## 2. Objectives and Learning Goals

- Understand and apply basic GIS concepts: latitude/longitude, coordinate systems, projections, and GeoJSON or equivalent data structures.[page:1]  
- Learn to use a mapping library (Leaflet, ArcGIS JS, or Google Maps) to initialize maps, add basemaps, and handle interactions like zoom, pan, and clicks.[page:1]  
- Load and visualize real geospatial data (points and, optionally, polygons/lines) on a web map.[page:1]  
- Implement the 5 required mapping features plus at least one stretch challenge.[page:1]  
- Practice incremental development, version control, and professional documentation (`README.md`, `spec.md`, and sprint time log).[page:1]  

---

## 3. Functional Requirements

### 3.1 Basemap

- The application shall display a basemap when the page loads, using one of the map styles provided by the chosen mapping library (e.g., roads, satellite, topographic, or hybrid).[page:1]  
- The user shall be able to zoom and pan the basemap using built-in map controls and gestures.[page:1]  

### 3.2 Markers

- The application shall place at least 20 markers on the map within the region of interest.[page:1]  
- Marker locations shall be defined by latitude and longitude coordinates from a data source (static JSON, embedded data, or remote API).[page:1]  
- Markers shall be visible at typical zoom levels and not all stacked at the same location.[page:1]  

### 3.3 Marker Data Storage

- The application shall store structured information for each marker, including at least:  
  - A title (name of the location)  
  - A short description or category  
  - The latitude and longitude coordinates[page:1]  
- This information shall be stored separately from the visual map layer (e.g., in a JavaScript array, JSON file, or API response) and then rendered onto the map.[page:1]  

### 3.4 Marker Interaction

- The application shall allow the user to click on a marker and display a popup or info window.[page:1]  
- The popup/info window shall display the stored information about that marker, including its title and description.[page:1]  
- Popups should appear near the marker and be easy to dismiss or replace by clicking elsewhere.[page:1]  

### 3.5 Application Title

- The website or app shall display a clear title in the UI, such as “Idaho Falls Points of Interest Map” or another descriptive project name.[page:1]  
- The title shall be visible without requiring the user to interact with the map (e.g., in a header above or beside the map).[page:1]  

---

## 4. Stretch Requirements

The project will implement at least one of the following stretch challenges; more than one may be implemented if time allows.[page:1]

### 4.1 Live Data from a Public Server (Stretch Option A)

- The application shall request marker data from a publicly available server or API (e.g., a city open data portal, a public GeoJSON feed, or another REST endpoint).[page:1]  
- On page load, the app shall fetch the data, parse it, and create markers dynamically so that the map content stays up to date with the source.[page:1]  
- If the API request fails, the application shall handle the error gracefully (e.g., display a message and/or fall back to a small local dataset).[page:1]  

### 4.2 Marker Filtering (Stretch Option B)

- The application shall provide at least one filter control (e.g., checkboxes, dropdown, or buttons) that allows the user to show or hide subsets of markers.[page:1]  
- Marker data shall include a property that indicates its type or category (e.g., “park”, “restaurant”, “trail”, etc.).[page:1]  
- When the user changes the filter, the map shall update to display only markers that match the selected criteria.[page:1]  

### 4.3 Multiple Data Types and Marker Graphics (Stretch Option C)

- The application shall include more than one type of data on the map (e.g., restaurants vs. parks, or sensors vs. landmarks).[page:1]  
- Each data type shall use a visually distinct marker graphic or icon (e.g., different colors or shapes) so users can tell them apart.[page:1]  
- The legend, title, or popups should make it clear what each marker style represents.[page:1]  

---

## 5. Data and Content

### 5.1 Geospatial Data

- For the required features, the app will use at least 20 point locations with:  
  - Coordinates (lat, lon)  
  - Title  
  - Description or category[page:1]  

- For stretch options A or C, data may come from:  
  - A public API that returns JSON/GeoJSON.  
  - A local JSON/GeoJSON file that simulates or complements remote data.[page:1]  

### 5.2 Static Assets and Styling

- The app will include CSS to ensure the map container fills the desired portion of the page and looks good on common screen sizes.[page:1]  
- If Option C is chosen, at least two marker styles (icons or colors) will be defined and applied based on marker type.[page:1]  

---

## 6. Technology and Architecture

- Frontend: HTML, CSS, JavaScript.[page:1]  
- Mapping library: Leaflet, ArcGIS JS API, or Google Maps JavaScript API (one will be selected and documented in the README).[page:1]  
- Optional: Fetch API or a similar HTTP client to obtain data from a public server (required for Stretch Option A).[page:1]  
- Development tools: Node.js for running a local development server, VS Code as primary editor, Git + GitHub for version control and deployment.[page:1]  

---

## 7. Practice and Development Plan

- Start with simple examples from the chosen mapping library showing:  
  - Basemap initialization  
  - Adding a few markers  
  - Showing a popup when a marker is clicked[page:1]  
- Expand those examples to:  
  - Load at least 20 markers from a structured data source  
  - Style markers and popups  
  - Implement the chosen stretch challenge (API fetch, filtering, or multiple marker types)[page:1]  

Time will be logged in `sprint_time_log.md` targeting at least 10 hours devoted to this mapping module over the sprint.[page:1]  

---

## 8. Risks and Mitigations

- Risk: Difficulty integrating with a public API (for Stretch Option A).  
  - Mitigation: Start with a static JSON file and switch to live data once the basic map is working.[page:1]  

- Risk: Complexity of filtering logic or multiple marker types.  
  - Mitigation: Implement a minimal working filter or two clear marker types first, then iterate.[page:1]  

- Risk: Time constraints.  
  - Mitigation: Complete the 5 core requirements before starting any stretch challenge.[page:1]  

---

## 9. Deliverables

- Working web application that:  
  - Displays a basemap  
  - Shows at least 20 markers  
  - Stores information for each marker  
  - Shows marker details when clicked  
  - Displays a clear title in the UI  
  - Implements at least one stretch challenge[page:1]  
- Public GitHub repository containing source code, `README.md`, `spec.md`, and `sprint_time_log.md`.[page:1]  
- (If required by the course) Short demonstration or walkthrough explaining how the requirements and chosen stretch challenge(s) are implemented.[page:1]  
