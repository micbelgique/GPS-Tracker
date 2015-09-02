
map = new OpenLayers.Map("mapdiv");
map.addLayer(new OpenLayers.Layer.OSM());

epsg4326 =  new OpenLayers.Projection("EPSG:4326"); //WGS 1984 projection
projectTo = map.getProjectionObject(); //The map projection (Spherical Mercator)

var lonLat = new
  OpenLayers.LonLat( -0.1279688 ,51.5077286 ).transform(epsg4326, projectTo);

var zoom=15;
map.setCenter (lonLat, zoom);

var vectorLayer = new OpenLayers.Layer.Vector("Overlay");

// Define an array. This could be done in a seperate js file.
// This tidy formatted section could even be generated by a server-side
// script (jsonp)

var markers = [
  [ -0.1279688, 51.5077286 ],
  [ -0.1244324, 51.5006728 ],
  [ -0.119623, 51.503308 ]
  ];

//Loop through the markers array
for (var i=0; i<markers.length; i++) {

var lon = markers[i][0];
var lat = markers[i][1];

var feature = new OpenLayers.Feature.Vector(
  new OpenLayers.Geometry.Point( lon, lat ).transform(epsg4326, projectTo),
    {description: "marker number " + i} ,
    {externalGraphic: 'img/marker.png', graphicHeight: 37, graphicWidth: 31,
     graphicXOffset:-12, graphicYOffset:-25  }
  );
  vectorLayer.addFeatures(feature);
  }

map.addLayer(vectorLayer);
