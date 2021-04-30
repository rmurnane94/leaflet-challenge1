var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

// var API_KEY = "pk.eyJ1Ijoid29vb3Q2NjYiLCJhIjoiY2trdTIwc2c4MG92MzJvbjB4Zmlza3ZoZiJ9.xqc3Hp7hUOiqdeQkzXhFLQ";



  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
//   L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/streets-v11",
//     accessToken: API_KEY
//   }).addTo(myMap);


  

var geojsonMarkerOptions = {
    // radius: feature.properties.mag * 10,
    // fillColor: "#ff7800",
    // color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};


function getColor(d) {
    return d > 90  ? '#833ab4' :
           d > 70  ? '#b02f7c' :
           d > 50   ? '#dd2544' :
           d > 30   ? '#fb703a' :
           d > 10   ? '#f8c759' :
                      '#f7fa6b';
};

var allLayers = {'quakes': "", 'faults': ""};
// MAKING CIRCLE LAYER WITH EARTHQUAKE DATA
// Perform a GET request to the query URL
// var earthquakeLayer
d3.json(url, function(data) {
    // Once we get a response, send the data.features object to the createFeatures function
    // console.log(data.features);
    // makeQuakes(data);

// function makeQuakes(quakeData) {
   var earthquakeLayer =  L.geoJSON(data, {
        
    
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, geojsonMarkerOptions);
        },
        
        style: function(feature) {
            // console.log(feature.geometry.coordinates[2]);
            return {
            color: "purple",
            fillColor: getColor(feature.geometry.coordinates[2]),
            radius: feature.properties.mag * 10
            }
        },

        onEachFeature: function (feature, layer) {
          layer.bindPopup("<h4>" + 'Magnitude: ' + feature.properties.mag + "</h4><hr><h4>" + 'Depth: '+ feature.geometry.coordinates[2] + "</h4><hr><h4>" + feature.properties.place +  "</h4>");
        }

    });
    console.log(earthquakeLayer);
    allLayers['quakes'] = earthquakeLayer;
   


    // makePlates(earthquakeLayer);
// }


// console.log(earthquakeLayer);
// function makePlates(quakeLayer)
// MAKING PLATE LAYER
d3.json('PB2002_boundaries.json', function(data) {
    // console.log(data);

    var plateLayer =  L.geoJSON(data);
    console.log(plateLayer);
    allLayers['faults'] = plateLayer;
    // .addTo(myMap);
  


console.log(allLayers);
console.log(allLayers.length);
console.log(allLayers.quakes);
// allLayers.forEach(function (x) {console.log('hi')});



// function createMap(earthquakes) {

    // Define variables for our tile layers
  var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "light-v10",
      accessToken: API_KEY
    })
  
  
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: "mapbox/streets-v11",
      accessToken: API_KEY
    });
  
// console.log(streetmap);
//     // Define a baseMaps object to hold our base layers
    var baseMaps = {
      "Street Map": streetmap,
    //   "Dark Map": darkmap,
      "Light Map": light
    };
  
    // // Create overlay object to hold our overlay layer
    var overlayMaps = {
      "Plates": plateLayer,
      "Earthquakes": earthquakeLayer
      
    };
  
    // Create our map, giving it the streetmap and earthquakes layers to display on load
    var myMap = L.map("mapid", {
      center:  [37.7749, -122.4194],
      zoom: 5,
      layers: [light, plateLayer, earthquakeLayer]
    });
  
    // Create a layer control
    // Pass in our baseMaps and overlayMaps
    // // Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(myMap);
  
    // MAKING LEGEND
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 30, 50, 70, 90],
        labels = [];
        div.innerHTML= '<h1>' + 'Depth' + '<br>'+ '</h1>';
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(myMap);
  

  });
  });
















