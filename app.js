const map = L.map("map").setView([43.4917, -112.0408], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19
}).addTo(map);

const markerLayers = {};
const activeFilters = new Set(Object.keys(CATEGORIES));
let activeLocations = [];

// ── Live data (Overpass / OpenStreetMap) ──

const OVERPASS_URL = "https://overpass-api.de/api/interpreter";
const OVERPASS_QUERY = `[out:json][timeout:20];
(
  node["amenity"~"restaurant|cafe|fast_food|bar"]["name"](43.45,-112.15,43.55,-111.95);
  node["leisure"="park"]["name"](43.45,-112.15,43.55,-111.95);
  node["amenity"~"library|post_office|townhall|courthouse"]["name"](43.45,-112.15,43.55,-111.95);
  node["shop"]["name"](43.45,-112.15,43.55,-111.95);
  node["tourism"~"attraction|museum|viewpoint"]["name"](43.45,-112.15,43.55,-111.95);
  node["historic"]["name"](43.45,-112.15,43.55,-111.95);
);
out body;`;

function osmTagToCategory(tags) {
  if (/restaurant|cafe|fast_food|bar|pub/.test(tags.amenity || "")) return "restaurant";
  if (tags.leisure === "park" || tags.amenity === "park") return "park";
  if (/library|post_office|townhall|courthouse/.test(tags.amenity || "") || tags.office === "government") return "government";
  if (tags.shop) return "shopping";
  return "landmark";
}

function osmToLocation(el, index) {
  const tags = el.tags || {};
  const descParts = [];
  if (tags.amenity) descParts.push(tags.amenity.replace(/_/g, " "));
  if (tags.cuisine) descParts.push(`cuisine: ${tags.cuisine.replace(/[;_]/g, " ").trim()}`);
  if (tags["addr:street"]) descParts.push(`${tags["addr:housenumber"] || ""} ${tags["addr:street"]}`.trim());
  return {
    id: `osm-${el.id}`,
    title: tags.name,
    category: osmTagToCategory(tags),
    description: descParts.join(" · ") || "OpenStreetMap point of interest",
    lat: el.lat,
    lng: el.lon
  };
}

async function fetchLiveData() {
  const resp = await fetch(OVERPASS_URL, {
    method: "POST",
    body: `data=${encodeURIComponent(OVERPASS_QUERY)}`,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  const json = await resp.json();
  return json.elements
    .filter(el => el.type === "node" && el.tags && el.tags.name)
    .map((el, i) => osmToLocation(el, i));
}

// ── UI helpers ──

function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function setDataStatus(message, isError) {
  const el = document.getElementById("data-source");
  el.textContent = message;
  el.className = "data-source " + (isError ? "error" : "live");
}

// ── Marker rendering ──

function createMarkerIcon(category) {
  const cat = CATEGORIES[category] || CATEGORIES.landmark;
  return L.divIcon({
    className: "custom-marker",
    html: `<div class="marker-pin" style="background-color:${cat.color};">${cat.icon}</div>`,
    iconSize: [36, 44],
    iconAnchor: [18, 44],
    popupAnchor: [0, -44]
  });
}

function buildPopupContent(loc) {
  const cat = CATEGORIES[loc.category] || CATEGORIES.landmark;
  return `
    <div class="popup-content">
      <div class="popup-category" style="background-color:${cat.color};">${cat.icon} ${cat.label}</div>
      <h3 class="popup-title">${escHtml(loc.title)}</h3>
      <p class="popup-description">${escHtml(loc.description)}</p>
      <div class="popup-coords">${loc.lat.toFixed(4)}°N, ${Math.abs(loc.lng).toFixed(4)}°W</div>
    </div>
  `;
}

function initMarkers(locations) {
  locations.forEach(loc => {
    if (!CATEGORIES[loc.category]) loc.category = "landmark";
    const marker = L.marker([loc.lat, loc.lng], {
      icon: createMarkerIcon(loc.category),
      title: loc.title
    }).bindPopup(buildPopupContent(loc), { maxWidth: 280 });

    if (!markerLayers[loc.category]) markerLayers[loc.category] = [];
    markerLayers[loc.category].push(marker);
    marker.addTo(map);
  });
}

function updateMarkers() {
  Object.entries(markerLayers).forEach(([category, markers]) => {
    markers.forEach(marker => {
      if (activeFilters.has(category)) {
        marker.addTo(map);
      } else {
        marker.remove();
      }
    });
  });
  updateMarkerCount();
}

function updateMarkerCount() {
  let visible = 0;
  activeLocations.forEach(loc => {
    if (activeFilters.has(loc.category)) visible++;
  });
  document.getElementById("marker-count").textContent =
    `Showing ${visible} of ${activeLocations.length} locations`;
}

function initFilters() {
  const container = document.getElementById("filter-buttons");

  Object.entries(CATEGORIES).forEach(([key, cat]) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn active";
    btn.dataset.category = key;
    btn.style.setProperty("--cat-color", cat.color);
    btn.innerHTML = `<span class="filter-icon">${cat.icon}</span>${cat.label}`;

    btn.addEventListener("click", () => {
      if (activeFilters.has(key)) {
        activeFilters.delete(key);
        btn.classList.remove("active");
      } else {
        activeFilters.add(key);
        btn.classList.add("active");
      }
      updateMarkers();
    });

    container.appendChild(btn);
  });

  document.getElementById("btn-show-all").addEventListener("click", () => {
    Object.keys(CATEGORIES).forEach(key => activeFilters.add(key));
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.add("active"));
    updateMarkers();
  });

  document.getElementById("btn-hide-all").addEventListener("click", () => {
    activeFilters.clear();
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    updateMarkers();
  });
}

function initLegend() {
  const container = document.getElementById("legend-items");
  Object.entries(CATEGORIES).forEach(([, cat]) => {
    const item = document.createElement("div");
    item.className = "legend-item";
    item.innerHTML = `
      <span class="legend-dot" style="background-color:${cat.color};"></span>
      <span>${cat.icon} ${cat.label}</span>
    `;
    container.appendChild(item);
  });
}

// ── Bootstrap ──

async function init() {
  setDataStatus("Loading live data…", false);
  try {
    const live = await fetchLiveData();
    if (live.length >= 20) {
      activeLocations = live;
      setDataStatus(`Live: ${live.length} locations from OpenStreetMap`, false);
    } else {
      // supplement with local fallback records to reach at least 20
      const seenTitles = new Set(live.map(l => l.title));
      const extras = LOCATIONS.filter(l => !seenTitles.has(l.title));
      activeLocations = [...live, ...extras];
      setDataStatus(`Live: ${live.length} from API + ${extras.length} local (${activeLocations.length} total)`, false);
    }
  } catch (e) {
    activeLocations = LOCATIONS;
    setDataStatus(`Local data only — API unavailable (${e.message})`, true);
  }

  initMarkers(activeLocations);
  initFilters();
  initLegend();
  updateMarkerCount();
}

init();
