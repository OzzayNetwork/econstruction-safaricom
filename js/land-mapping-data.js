// Initialize the map
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -0.09275130113487509, lng: 34.7716000799302 },
        zoom: 14,
    });

    // Create a GeoJSON layer for cadastral data
    const cadastralLayer = new google.maps.Data({
        map: map,
    });

    // Style cadastral parcels
    cadastralLayer.setStyle({
        fillColor: "blue",
        fillOpacity: 0.4,
        strokeColor: "blue",
        strokeWeight: 2,
    });

    // Load external GeoJSON file and add it to the map
    fetch("js/KisumuCadastralSample.geojson")
        .then((response) => response.json())
        .then((data) => {
            // Add cadastral data from the external file to the map
            cadastralLayer.addGeoJson(data);
        })
        .catch((error) => {
            console.error("Error loading GeoJSON file:", error);
        });
}
