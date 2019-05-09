// ### Level 1: Basic Visualization

// ![2-BasicMap](Images/2-BasicMap.png)

// Your first task is to visualize an earthquake data set. 

// 1. **Get your data set**

//    ![3-Data](Images/3-Data.png)

//    The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and pick a data set to visualize. When you click on a data set, for example 'All Earthquakes from the Past 7 Days', you will be given a JSON representation of that data. You will be using the URL of this JSON to pull in the data for our visualization.

//    ![4-JSON](Images/4-JSON.png)

// 2. **Import & Visualize the Data**

//    Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.

//    * Your data markers should reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes should appear larger and darker in color.

//    * Include popups that provide additional information about the earthquake when a marker is clicked.

//    * Create a legend that will provide context for your map data.

//    * Your visualization should look something like the map above.



//base = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php"
var url = https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson

d3.json(url, function(data) {
    console.log(data)
    cr_Features(data.features);
});

function cr_Features (significantearthquake) {


    function onEachFeature(feature, layer)


var earthquakes = L.geoJson(significatntearthquake,{
    pointToLayer: function(feature)
    center: [20.20, 47]
    color: "blue"
    zoom: 43
})  

function createMarkers

var stations


createMap(L.layergroup(significantearthquakes));
    
