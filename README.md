# Leaflet Visualization

This project uses Leaflet.js to visualize earthquake data on a map.


 **The Data**

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. This project uses earthquake data provided in the GeoJSON format from the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) showing all earthquakes for the last day.  The URL of this JSON is used to pull in the data for the visualization.


 **Import & Visualize the Data**

   This visualization features a map created using Leaflet.js that plots all of the earthquakes from the GeoJSON data set based on their longitude and latitude. The magnitude of each earthquake is reflected by the size of the marker, while the depth is shown by color. Earthquakes with higher magnitudes appear larger and earthquakes with greater depth appear darker in color.

   Additionally, popups are included that provide additional information about the earthquake when a marker is clicked. A legend is also included to provide context for map data.


**Further Visualization**

   The visualization in "Step 2" also plots a second data set on the map to illustrate the relationship between tectonic plates and seismic activity. Data on tectonic plates is taken from <https://github.com/fraxen/tectonicplates>.

   Layer controls are also implemented. This tectonic plate layer is added along with the earthquake layer as overlays so they can be toggled on and off. Two seperate base layers are also included. 
