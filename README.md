# Leaflet Visualization




1. **The Data**

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. This project uses earthquake data provided in the GeoJSON format from the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) showing all earthquakes for the last day.  The URL of this JSON is used to pull in the data for the visualization.


2. **Import & Visualize the Data**

   This visualization features a map created using Leaflet.js that plots all of the earthquakes from the GeoJSON data set based on their longitude and latitude. The magnitude of each earthquake is reflected by the size of the marker, while the depth is shown by color. Earthquakes with higher magnitudes appear larger and earthquakes with greater depth appear darker in color.

   Additionally, popups are included that provide additional information about the earthquake when a marker is clicked. A legend is also included to provide context for map data.



The USGS wants you to plot a second data set on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in a second data set and visualize it along side your original set of data. Data on tectonic plates can be found at <https://github.com/fraxen/tectonicplates>.

In this step we are going to..

* Plot a second data set on our map.

* Add a number of base maps to choose from as well as separate out our two different data sets into overlays that can be turned on and off independently.

* Add layer controls to our map.
