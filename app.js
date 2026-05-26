const map = L.map("map").setView([43.4917, -112.0408], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19
}).addTo(map);

const markerLayers = {};
const activeFilters = new Set(Object.keys(CATEGORIES));

function createMarkerIcon(category) {
  const cat = CATEGORIES[category];
  return L.divIcon({
    className: "custom-marker",
    html: `<div class="marker-pin" style="background-color:${cat.color};">${cat.icon}</div>`,
    iconSize: [36, 44],
    iconAnchor: [18, 44],
    popupAnchor: [0, -44]
  });
}

function buildPopupContent(loc) {
  const cat = CATEGORIES[loc.category];
  return `
    <div class="popup-content">
      <div class="popup-category" style="background-color:${cat.color};">${cat.icon} ${cat.label}</div>
      <h3 class="popup-title">${loc.title}</h3>
      <p class="popup-description">${loc.description}</p>
      <div class="popup-coords">${loc.lat.toFixed(4)}°N, ${Math.abs(loc.lng).toFixed(4)}°W</div>
    </div>
  `;
}

function initMarkers() {
  LOCATIONS.forEach(loc => {
    const marker = L.marker([loc.lat, loc.lng], {
      icon: createMarkerIcon(loc.category),
      title: loc.title
    }).bindPopup(buildPopupContent(loc), { maxWidth: 280 });

    if (!markerLayers[loc.category]) {
      markerLayers[loc.category] = [];
    }
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
  LOCATIONS.forEach(loc => {
    if (activeFilters.has(loc.category)) visible++;
  });
  document.getElementById("marker-count").textContent =
    `Showing ${visible} of ${LOCATIONS.length} locations`;
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

initMarkers();
initFilters();
initLegend();
updateMarkerCount();
