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

    const parcel3= {
        "type": "Feature",
        "properties": {
            "Parcel_No": "299",
            "Area_Ha": "3.10206e-01",
            "Block_Name": "Kisumu Municipality",
           
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [
                        34.757298189144251,
                        -0.102352067210745
                    ],
                    [
                        34.757226805314019,
                        -0.102780370191795
                    ],
                    [
                        34.757033672395607,
                        -0.102965571573407
                    ],
                    [
                        34.756670804592432,
                        -0.102549165897358
                    ],
                    [
                        34.756860637169666,
                        -0.102372969091391
                    ],
                    [
                        34.756962288565603,
                        -0.102305271144303
                    ],
                    [
                        34.757027723743192,
                        -0.102311219796718
                    ],
                    [
                        34.757298189144251,
                        -0.102352067210745
                    ]
                ]
            ]
        }
    }

    const cadastralData = {
        type: "FeatureCollection",
        features: [parcel1, parcel2,parcel3],
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


     // Load external GeoJSON file and add it to the map
     fetch("js/KisumuCadastralSample.json")
     .then((response) => response.json())
     .then((data) => {
         // Add cadastral data from the external file to the map
         cadastralLayer.addGeoJson(data);
         console.log(data)
     })
     .catch((error) => {
         console.error("Error loading GeoJSON file:", error);
     });
}
