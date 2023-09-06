// Initialize the map
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -0.09275130113487509, lng: 34.7716000799302 },
        zoom: 14,
    });

    // Generate two random cadastral parcels (simplified)
    const parcel1 = {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [34.771, -0.092],
                    [34.772, -0.092],
                    [34.772, -0.093],
                    [34.771, -0.093],
                    [34.771, -0.092],
                ],
            ],
        },
        properties: {
            parcel_id: "Parcel A",
            owner: "John Doe",
        },
    };

    const parcel2 = {
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [34.770, -0.092],
                    [34.770, -0.091],
                    [34.771, -0.091],
                    [34.771, -0.092],
                    [34.770, -0.092],
                ],
            ],
        },
        properties: {
            parcel_id: "Parcel B",
            owner: "Jane Smith",
        },
    };

    const cadastralData = {
        type: "FeatureCollection",
        features: [parcel1, parcel2],
    };

    // Create a GeoJSON layer for cadastral data
    const cadastralLayer = new google.maps.Data({
        map: map,
    });

    // Add cadastral data to the map
    cadastralLayer.addGeoJson(cadastralData);

    // Style cadastral parcels
    cadastralLayer.setStyle({
        fillColor: "blue",
        fillOpacity: 0.4,
        strokeColor: "blue",
        strokeWeight: 2,
    });
}
