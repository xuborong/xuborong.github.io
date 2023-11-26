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
            content: '<h3>Charlotte</h3><p>High School</p>'
        },
        {
            coords: {lat: 38.6270, lng: -90.1994},
            content: '<h3>St. Louis</h3><p>Undergraduate</p>'
        },
        {
            coords: {lat: 46.6532, lng: -79.3832},
            content: '<h3>Toronto</h3><p>Graduate</p>'
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