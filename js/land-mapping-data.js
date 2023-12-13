// Initialize the map
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: -1.345316594258382, 
            lng:  36.69092174375093
            
        },
        zoom: 14,
    });

    // Create a GeoJSON layer for cadastral data
    const cadastralLayer = new google.maps.Data({
        map: map,
        clickable: true, // Enable default context menu
    });

    // Create a GeoJSON layer for the county cadastral layer
    const cadastralLayerCounty = new google.maps.Data({
        map: map,
    });
    

    // Load external GeoJSON file and add it to the map
    fetch("js/NairobiCadastralSample.json")
        .then((response) => response.json())
        .then((data) => {
            // Add cadastral data from the external file to the map
            cadastralLayer.addGeoJson(data);
            console.log(data.features[1] )
            console.log(data.features[0] )

            // Set up styling for "uncompliant" parcels
            cadastralLayer.setStyle(function (feature) {
                const status = feature.getProperty("Status");
                let styleOptions = {
                    fillColor: "green",
                    fillOpacity: 0.4,
                    strokeColor: "green",
                    strokeWeight: 2,
                };

                if (status && status.toLowerCase() === "uncompliant") {
                    styleOptions = {
                        fillColor: "red",
                        fillOpacity: 0.4,
                        strokeColor: "red",
                        strokeWeight: 2,
                    };
                }

                return styleOptions;
            });

            // Add a click event listener to the cadastralLayer
            cadastralLayer.addListener('mouseover', function (event) {
                const feature = event.feature;
                const Arrears = feature.getProperty("Arrears"); // Change to the actual property name
                //const lrNumber=feat

                if (Arrears) {
                    // Show the Arrears information
                    $("#follow-text").html(`Outstanding Arrears: <strong class='text-danger fw-bold'>KES ` + formatWithCommas(Arrears) + `</strong> <br> <span class="text-capitalize text-info">Click to View More</span>`).removeClass('d-none');
                } else {
                    $("#follow-text").html("No Arrears <br> <span class='text-info'>Click for More Information</span>").removeClass('d-none');
                }
            });

            cadastralLayer.addListener('click', function (event) {
                $("#follow-text").addClass('d-none');

                const feature = event.feature;
                const Arrears = feature.getProperty("Arrears"); // Change to the actual property name
                const lrNumber = feature.getProperty("Parcel_No")
                $('.lr-no').text(lrNumber)
                const lat = event.latLng.lat(); // Get latitude of the clicked point
                const lng = event.latLng.lng(); // Get longitude of the clicked point
                const size = feature.getProperty("Area_Ha")
                const Block_Name = feature.getProperty("plot_no")
                if(Block_Name===""){
                    Block_Name="-"
                }

                $('.blockName').text(Block_Name)
                $('.size').text(size)

                // Fetch the address based on coordinates
                getAddressFromCoordinates(lat, lng, function (address) {
                    $('.lr-no').text(lrNumber);
                    $('.the-clicked-address').text(address);



                    if (Arrears) {
                        // Show the Arrears information
                        $('.arrears').text("KES " + formatWithCommas(Arrears));
                    } else {
                        $('.arrears').text("KES 0.00");
                    }

                    $('#percel-details').removeClass('left-100').siblings().addClass('left-100');
                    $('.main-map-container .ma-backdrop').removeClass('d-none');
                    $(".content, .header").append('<div class="ma-backdrop" data-ma-action="aside-close" data-ma-target=' + e + " />");
                });
            });

            // Add a mouseleave event listener to the cadastralLayer
            cadastralLayer.addListener('mouseout', function (event) {
                // Hide the follow-text div and perform any desired actions
                $("#follow-text").addClass('d-none');
                // alert("Mouse is out of the parcel");
            });
        })
        .catch((error) => {
            console.error("Error loading GeoJSON file:", error);
        });


    
}

// following mouse text
const followText = document.getElementById("follow-text");

document.addEventListener("mousemove", (e) => {
    // Get the current mouse position
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Set the position of the followText div to follow the mouse
    followText.style.left = mouseX + "px";
    followText.style.top = mouseY + "px";
});

function formatWithCommas(number) {
    // Convert the input to a number (if it's not already)
    const num = parseFloat(number);

    // Check if the input is a valid number
    if (isNaN(num)) {
        return "Invalid input";
    }

    // Use the toLocaleString() method to format the number with commas
    return num.toLocaleString();
}



$('.close-aside').on('click', function () {
    $(this).parent().parent().addClass('left-100');
    $('.ma-backdrop').addClass('d-none');
    // marker.setAnimation(null);
    removeMarkers();
});

$('.main-map-container .ma-backdrop').on('click', function () {
    $('.main-map-container aside').addClass('left-100');
    $(this).addClass('d-none');
});



// Function to fetch the address based on coordinates
function getAddressFromCoordinates(lat, lng, callback) {
    const geocoder = new google.maps.Geocoder();
    const latLng = new google.maps.LatLng(lat, lng);

    geocoder.geocode({
        'location': latLng
    }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                const formattedAddress = results[0].formatted_address;
                callback(formattedAddress);
            } else {
                callback("Address not found");
            }
        } else {
            callback("Geocoder failed due to: " + status);
        }
    });
}