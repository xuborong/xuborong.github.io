---
layout: single
title: Journey
permalink: /about/
---

This is Alex's about section.

Go Warriors!

<div id="map" style="height: 400px; width: 100%;"></div>

<script>
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {lat: 29.9853899, lng: 122.2077800}
    });

    var markers = [
        {
            coords: {lat: 29.9853899, lng: 122.2077800},
            content: '<h3>Zhoushan</h3><p>Hometown</p>'
        },
        {
            coords: {lat: 35.227085, lng: -80.843124},
            content: '<h3>Charlotte, NC</h3><p>High School</p>'
        },
        {
            coords: {lat: 38.6270, lng: -90.1994},
            content: '<h3>St. Louis, MO</h3><p>Undergraduate</p>'
        },
        {
            coords: {lat: 43.6532, lng: -79.3832},
            content: '<h3>Toronto, ON</h3><p>Graduate</p>'
        },
        {
            coords: {lat: 40.440624, lng: -79.995888},
            content: '<h3>Pittsburgh, PA</h3><p>9/2023</p>'
        },
        {
            coords: {lat: 39.0840, lng: -77.1528},
            content: '<h3>Rockville, MD</h3><p>3/2023</p>'
        },
        {
            coords: {lat: 40.7128, lng: -74.0060},
            content: '<h3>New York, NY</h3><p>1/2019, 11/2022, 2/2023</p>'
        },
        {
            coords: {lat: 38.9072, lng: -77.0369},
            content: '<h3>Washington DC</h3><p>3/2023</p>'
        },
        {
            coords: {lat: 41.8240, lng: -71.4128},
            content: '<h3>Providence, RI</h3><p>5/2022</p>'
        },
        {
            coords: {lat: 42.3601, lng: -71.0589},
            content: '<h3>Boston, MA</h3><p>5/2022</p>'
        },
        {
            coords: {lat: 41.8781, lng: -87.6298},
            content: '<h3>Chicago, IL</h3><p>1/2020</p>'
        },
        {
            coords: {lat: 40.1106, lng: -88.2073},
            content: '<h3>Urbana, IL</h3><p>8/2022</p>'
        },
        {
            coords: {lat: 45.4309, lng: -89.9052},
            content: '<h3>Tomahawk, WI</h3><p>1/2021</p>'
        },
        {
            coords: {lat: 36.0726, lng: -79.7920},
            content: '<h3>Greensboro, NC</h3><p>Stopby</p>'
        },
        {
            coords: {lat: 39.7817, lng: -89.6501},
            content: '<h3>Springfield, IL</h3><p>10/2019</p>'
        },
        {
            coords: {lat: 36.1627, lng: -86.7816},
            content: '<h3>Nashville, TN</h3><p>5/2022</p>'
        },
        {
            coords: {lat: 38.5767, lng: -92.1735},
            content: '<h3>Jefferson City, MO</h3><p>3/2020</p>'
        },
        {
            coords: {lat: 32.7767, lng: -96.7970},
            content: '<h3>Dallas, TX</h3><p>5/2021</p>'
        },
        {
            coords: {lat: 25.7617, lng: -80.1918},
            content: '<h3>Miami, FL</h3><p>3/2023</p>'
        },
        {
            coords: {lat: 25.0443, lng: -77.3504},
            content: '<h3>Nassau, Bahamas</h3><p>3/2023</p>'
        },
        {
            coords: {lat: 29.7604, lng: -95.3698},
            content: '<h3>Houston, TX</h3><p>5/2021</p>'
        },
        {
            coords: {lat: 21.1619, lng: -86.8515},
            content: '<h3>Cancun, Mexico</h3><p>1/2022</p>'
        },
        {
            coords: {lat: 36.9147, lng: -111.4558},
            content: '<h3>Page, AZ</h3><p>3/2022</p>'
        },
        {
            coords: {lat: 36.1716, lng: -115.1391},
            content: '<h3>Las Vegas, NV</h3><p>3/2022</p>'
        },
        {
            coords: {lat: 33.6846, lng: -117.8265},
            content: '<h3>Irvine, CA</h3><p>3/2016</p>'
        },
        {
            coords: {lat: 32.7157, lng: -117.1611},
            content: '<h3>San Diego, CA</h3><p>3/2016</p>'
        },
        {
            coords: {lat: 34.0549, lng: -118.2426},
            content: '<h3>Los Angeles, CA</h3><p>3/2016, 3/2022, 5/2023</p>'
        },
        {
            coords: {lat: 37.7749, lng: -122.4194},
            content: '<h3>San Francisco, CA</h3><p>5/2023</p>'
        },
        {
            coords: {lat: 47.3769, lng: 8.5417},
            content: '<h3>Zurich, Switzerland</h3><p>12/2022</p>'
        },
        {
            coords: {lat: 47.0502, lng: 8.3093},
            content: '<h3>Lucerne, Switzerland</h3><p>12/2022</p>'
        },
        {
            coords: {lat: 46.0037, lng: 8.9511},
            content: '<h3>Lugano, Switzerland</h3><p>12/2022</p>'
        },
        {
            coords: {lat: 45.8081, lng: 9.0852},
            content: '<h3>Como, Italy</h3><p>12/2022</p>'
        },
        {
            coords: {lat: 45.4642, lng: 9.1900},
            content: '<h3>Milan, Italy</h3><p>12/2022</p>'
        },
        {
            coords: {lat: 46.4102, lng: 11.8440},
            content: '<h3>Dolomites, Italy</h3><p>12/2022</p>'
        },
        {
            coords: {lat: 43.7228, lng: 10.4017},
            content: '<h3>Pisa, Italy</h3><p>12/2022</p>'
        },
        {
            coords: {lat: 45.4408, lng: 12.3155},
            content: '<h3>Venice, Italy</h3><p>12/2022</p>'
        }, 
        {
            coords: {lat: 43.7696, lng: 11.2558},
            content: '<h3>Florence, Italy</h3><p>12/2022</p>'
        },
        {
            coords: {lat: 41.9028, lng: 12.4964},
            content: '<h3>Rome, Italy</h3><p>12/2022</p>'
        }
    ];

    markers.forEach(function(marker) {
        addMarker(marker);
    });

    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map
        });

        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }
    }
}
</script>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_thv3syAoH-NbYLtuBpdA8XFN0KJ0dOk&callback=initMap"></script>