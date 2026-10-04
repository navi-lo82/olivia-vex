const map = L.map('map').setView([28.2956, -81.4039], 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: `&copy;
            <a href="https://www.openstreetmap.org/copyright">
            OpenStreetMap
            </a> contributors`
}).addTo(map);

map.addControl(new L.Control.FullScreen());

function setUpMap() {

const navi_oli_hood = L.Icon.extend({
  options: {
    iconUrl: 'assets/navi_oli_hood-pole.webp',
    iconSize: [200, 250],
    iconAnchor: [0, 250],
    popupAnchor: [100.0, -250],
  }
});
L.marker([53.207797736055355, -1.0844425546456038],
  { icon: new navi_oli_hood() })
  .bindPopup(
    '<div class="leaflet-custom-container"><a href=#navi_oli_hood onclick="exitFullscreenFromLeaflet()"class="leaflet-custom-title">Olivia Hood of Sherwood Forest<span class="tooltip-hint">&nbsp;&#x229E;&#x2197;</span></a><p class="leaflet-custom-caption">Legend has it that on Valentine\'s Day, Olivia Hood of Sherwood Forest stalks the woods in secret, marking unsuspecting single men with scented love arrows. Once struck, they are not claimed at once, but patiently savoured for a later time. Sherwood Forest is now a legendary attraction - particularly among the brave, the curious... and the single</p><p class="leaflet-custom-author">Navi</p></div>'
  ).addTo(map);

document.getElementById("navi_oli_hood-title").onclick = function() {map.setView([53.207797736055355, -1.0844425546456038],map.getZoom());};

const navi_ioc = L.Icon.extend({
  options: {
    iconUrl: 'assets/navi_ioc-pole.webp',
    iconSize: [200, 250],
    iconAnchor: [0, 250],
    popupAnchor: [100.0, -250],
  }
});
L.marker([28.33104949708756, -81.43037844934575],
  { icon: new navi_ioc() })
  .bindPopup(
    '<div class="leaflet-custom-container"><a href=#navi_ioc onclick="exitFullscreenFromLeaflet()"class="leaflet-custom-title">International Olivia Committee<span class="tooltip-hint">&nbsp;&#x229E;&#x2197;</span></a><p class="leaflet-custom-caption">Every four years, ballet is the main event at the Olimpics. Officially, this is held at the Olisseum, but some say the grand finals are held in a \"dungeon\" deep underground</p><p class="leaflet-custom-author">Navi</p></div>'
  ).addTo(map);

document.getElementById("navi_ioc-title").onclick = function() {map.setView([28.33104949708756, -81.43037844934575],map.getZoom());};

const OliRSA = L.Icon.extend({
  options: {
    iconUrl: 'assets/OliRSA-pole.webp',
    iconSize: [200, 250],
    iconAnchor: [0, 250],
    popupAnchor: [100.0, -250],
  }
});
L.marker([-33.9221, 18.4231],
  { icon: new OliRSA() })
  .bindPopup(
    '<div class="leaflet-custom-container"><a href=#OliRSA onclick="exitFullscreenFromLeaflet()"class="leaflet-custom-title">Oligarchy of South Africa<span class="tooltip-hint">&nbsp;&#x229E;&#x2197;</span></a><p class="leaflet-custom-caption">The flag of South Africa under the rule of Olivia Monroe and her chosen gal pals; their policies are driven by DFE and increasing birth rates.</p><p class="leaflet-custom-author">LeanFries</p></div>'
  ).addTo(map);

document.getElementById("OliRSA-title").onclick = function() {map.setView([-33.9221, 18.4231],map.getZoom());};

const Flolivia = L.Icon.extend({
  options: {
    iconUrl: 'assets/Flolivia-pole.webp',
    iconSize: [200, 250],
    iconAnchor: [0, 250],
    popupAnchor: [100.0, -250],
  }
});
L.marker([25.7742, -80.1936],
  { icon: new Flolivia() })
  .bindPopup(
    '<div class="leaflet-custom-container"><a href=#Flolivia onclick="exitFullscreenFromLeaflet()"class="leaflet-custom-title">Flag of Flolivia<span class="tooltip-hint">&nbsp;&#x229E;&#x2197;</span></a><p class="leaflet-custom-caption">Olivia gotta be rep\'n all us Flo peeps, yo.</p><p class="leaflet-custom-author">BingoBangoTangoMango</p></div>'
  ).addTo(map);

document.getElementById("Flolivia-title").onclick = function() {map.setView([25.7742, -80.1936],map.getZoom());};

const oliun1v22 = L.Icon.extend({
  options: {
    iconUrl: 'assets/oliun1v22-pole.webp',
    iconSize: [200, 250],
    iconAnchor: [0, 250],
    popupAnchor: [100.0, -250],
  }
});
L.marker([28.28915599430329, -81.46223338275723],
  { icon: new oliun1v22() })
  .bindPopup(
    '<div class="leaflet-custom-container"><a href=#oliun1v22 onclick="exitFullscreenFromLeaflet()"class="leaflet-custom-title">United Olivians<span class="tooltip-hint">&nbsp;&#x229E;&#x2197;</span></a><p class="leaflet-custom-caption">Centre of the world? The North Pole? Paaaah! We know where it is!</p><p class="leaflet-custom-author">Relishes</p></div>'
  ).addTo(map);

document.getElementById("oliun1v22-title").onclick = function() {map.setView([28.28915599430329, -81.46223338275723],map.getZoom());};

const theoliviarampant = L.Icon.extend({
  options: {
    iconUrl: 'assets/theoliviarampant-pole.webp',
    iconSize: [200, 250],
    iconAnchor: [0, 250],
    popupAnchor: [100.0, -250],
  }
});
L.marker([55.066667, -6.0],
  { icon: new theoliviarampant() })
  .bindPopup(
    '<div class="leaflet-custom-container"><a href=#theoliviarampant onclick="exitFullscreenFromLeaflet()"class="leaflet-custom-title">The Olivia Rampant<span class="tooltip-hint">&nbsp;&#x229E;&#x2197;</span></a><p class="leaflet-custom-caption">Our happy girl shows off her feisty side - Rampant, with hot pink stiletto nails, and shreds</p><p class="leaflet-custom-author">Relishes</p></div>'
  ).addTo(map);

document.getElementById("theoliviarampant-title").onclick = function() {map.setView([55.066667, -6.0],map.getZoom());};

const Commonlove = L.Icon.extend({
  options: {
    iconUrl: 'assets/Commonlove-pole.webp',
    iconSize: [200, 250],
    iconAnchor: [0, 250],
    popupAnchor: [100.0, -250],
  }
});
L.marker([28.30157038019501, -81.40872941336619],
  { icon: new Commonlove() })
  .bindPopup(
    '<div class="leaflet-custom-container"><a href=#Commonlove onclick="exitFullscreenFromLeaflet()"class="leaflet-custom-title">Common Love<span class="tooltip-hint">&nbsp;&#x229E;&#x2197;</span></a><p class="leaflet-custom-caption">Flag representing an international association of 56 countries united by their shared history and love for Olivia Monroe</p><p class="leaflet-custom-author">LeanFries</p></div>'
  ).addTo(map);

document.getElementById("Commonlove-title").onclick = function() {map.setView([28.30157038019501, -81.40872941336619],map.getZoom());};

const Pink_USA = L.Icon.extend({
  options: {
    iconUrl: 'assets/Pink_USA-pole.webp',
    iconSize: [200, 250],
    iconAnchor: [0, 250],
    popupAnchor: [100.0, -250],
  }
});
L.marker([28.30491730423824, -81.42263841399797],
  { icon: new Pink_USA() })
  .bindPopup(
    '<div class="leaflet-custom-container"><a href=#Pink_USA onclick="exitFullscreenFromLeaflet()"class="leaflet-custom-title">Stars and Stripes are in girl! 💅<span class="tooltip-hint">&nbsp;&#x229E;&#x2197;</span></a><p class="leaflet-custom-caption">Like States becoming united, we\'re all United by our love of Olivia Monroe</p><p class="leaflet-custom-author">BingoBangoTangoMango</p></div>'
  ).addTo(map);

document.getElementById("Pink_USA-title").onclick = function() {map.setView([28.30491730423824, -81.42263841399797],map.getZoom());};

const ninja_flag = L.Icon.extend({
  options: {
    iconUrl: 'assets/ninja_flag-pole.webp',
    iconSize: [200, 250],
    iconAnchor: [0, 250],
    popupAnchor: [100.0, -250],
  }
});
L.marker([37.887389, 41.132222],
  { icon: new ninja_flag() })
  .bindPopup(
    '<div class="leaflet-custom-container"><a href=#ninja_flag onclick="exitFullscreenFromLeaflet()"class="leaflet-custom-title">The Fertile Crescent<span class="tooltip-hint">&nbsp;&#x229E;&#x2197;</span></a><p class="leaflet-custom-caption">5 kids? There\'s no way you want 8 kids. 11 kids is too many. How are we supposed to take care of 15 kids?</p><p class="leaflet-custom-author">ninjasaurusrexatron</p></div>'
  ).addTo(map);

document.getElementById("ninja_flag-title").onclick = function() {map.setView([37.887389, 41.132222],map.getZoom());};

}
setUpMap();
