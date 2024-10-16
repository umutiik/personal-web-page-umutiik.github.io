// Step 1: Initialize the OpenLayers map
var map = new ol.Map({
    target: 'map', // Step 2: Target the HTML div where the map will be rendered
    layers: [
        new ol.layer.Tile({ // Step 3: Define the layers for the map
            source: new ol.source.OSM() // Step 4: Use OpenStreetMap (OSM) as the tile source
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([0, 0]), // Step 5: Set the initial center (longitude, latitude) and convert to map projection
        zoom: 2 // Step 6: Set the initial zoom level (higher values = closer view)
    })
});
