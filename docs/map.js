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

const INT2 = L.Icon.extend({
  options: {
    iconUrl: 'assets/INT2-pole.webp',
    iconSize: [200, 250],
    iconAnchor: [0, 250],
    popupAnchor: [100.0, -250],
  }
});
L.marker([28.33104949708756, -81.43037844934575],
  { icon: new INT2() })
  .bindPopup(
    '<div class="leaflet-custom-container"><a href=#INT2 onclick="exitFullscreenFromLeaflet()"class="leaflet-custom-title">NASA<span class="tooltip-hint">&nbsp;&#x229E;&#x2197;</span></a><p class="leaflet-custom-caption">NASA is looked after by owoClap</p><p class="leaflet-custom-author">Place-holder</p></div>'
  ).addTo(map);

document.getElementById("INT2-title").onclick = function() {map.setView([28.33104949708756, -81.43037844934575],map.getZoom());};

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

const Commonlove = L.Icon.extend({
  options: {
    iconUrl: 'assets/Commonlove-pole.webp',
    iconSize: [200, 250],
    iconAnchor: [0, 250],
    popupAnchor: [100.0, -250],
  }
});
L.marker([28.30491730423824, -81.42263841399797],
  { icon: new Commonlove() })
  .bindPopup(
    '<div class="leaflet-custom-container"><a href=#Commonlove onclick="exitFullscreenFromLeaflet()"class="leaflet-custom-title">Common Love<span class="tooltip-hint">&nbsp;&#x229E;&#x2197;</span></a><p class="leaflet-custom-caption">Flag representing an international association of 56 countries united by their shared history and love for Olivia Monroe</p><p class="leaflet-custom-author">LeanFries</p></div>'
  ).addTo(map);

document.getElementById("Commonlove-title").onclick = function() {map.setView([28.30491730423824, -81.42263841399797],map.getZoom());};

const DEN0 = L.Icon.extend({
  options: {
    iconUrl: 'assets/DEN0-pole.webp',
    iconSize: [200, 250],
    iconAnchor: [0, 250],
    popupAnchor: [100.0, -250],
  }
});
L.marker([56.2639, 9.5018],
  { icon: new DEN0() })
  .bindPopup(
    '<div class="leaflet-custom-container"><a href=#DEN0 onclick="exitFullscreenFromLeaflet()"class="leaflet-custom-title">Denmark for the lols<span class="tooltip-hint">&nbsp;&#x229E;&#x2197;</span></a><p class="leaflet-custom-caption">Denmark and Sweden are still at it again</p><p class="leaflet-custom-author">Place-holder</p></div>'
  ).addTo(map);

document.getElementById("DEN0-title").onclick = function() {map.setView([56.2639, 9.5018],map.getZoom());};

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

const NED0 = L.Icon.extend({
  options: {
    iconUrl: 'assets/NED0-pole.webp',
    iconSize: [200, 250],
    iconAnchor: [0, 250],
    popupAnchor: [100.0, -250],
  }
});
L.marker([52.1326, 5.2913],
  { icon: new NED0() })
  .bindPopup(
    '<div class="leaflet-custom-container"><a href=#NED0 onclick="exitFullscreenFromLeaflet()"class="leaflet-custom-title">Queen Saotome VI<span class="tooltip-hint">&nbsp;&#x229E;&#x2197;</span></a><p class="leaflet-custom-caption">Queen Saotome VI has been in war for 5 years with the United States. Legends has it she mounts on a Shibe.</p><p class="leaflet-custom-author">Place-holder</p></div>'
  ).addTo(map);

document.getElementById("NED0-title").onclick = function() {map.setView([52.1326, 5.2913],map.getZoom());};

const INT0 = L.Icon.extend({
  options: {
    iconUrl: 'assets/INT0-pole.webp',
    iconSize: [200, 250],
    iconAnchor: [0, 250],
    popupAnchor: [100.0, -250],
  }
});
L.marker([28.30157038019501, -81.40872941336619],
  { icon: new INT0() })
  .bindPopup(
    '<div class="leaflet-custom-container"><a href=#INT0 onclick="exitFullscreenFromLeaflet()"class="leaflet-custom-title">United Nations of Monroe<span class="tooltip-hint">&nbsp;&#x229E;&#x2197;</span></a><p class="leaflet-custom-caption">Olivia Monroe united the nations</p><p class="leaflet-custom-author">Place-holder</p></div>'
  ).addTo(map);

document.getElementById("INT0-title").onclick = function() {map.setView([28.30157038019501, -81.40872941336619],map.getZoom());};

const oliun1v22 = L.Icon.extend({
  options: {
    iconUrl: 'assets/oliun1v22-pole.webp',
    iconSize: [200, 250],
    iconAnchor: [0, 250],
    popupAnchor: [100.0, -250],
  }
});
L.marker([28.3379226928689, -81.44047827239685],
  { icon: new oliun1v22() })
  .bindPopup(
    '<div class="leaflet-custom-container"><a href=#oliun1v22 onclick="exitFullscreenFromLeaflet()"class="leaflet-custom-title">United Olivians<span class="tooltip-hint">&nbsp;&#x229E;&#x2197;</span></a><p class="leaflet-custom-caption">Centre of the world? The North Pole? Paaaah! We know where it is!</p><p class="leaflet-custom-author">Relishes</p></div>'
  ).addTo(map);

document.getElementById("oliun1v22-title").onclick = function() {map.setView([28.3379226928689, -81.44047827239685],map.getZoom());};

const GBR0 = L.Icon.extend({
  options: {
    iconUrl: 'assets/GBR0-pole.webp',
    iconSize: [200, 250],
    iconAnchor: [0, 250],
    popupAnchor: [100.0, -250],
  }
});
L.marker([51.5072, -0.1276],
  { icon: new GBR0() })
  .bindPopup(
    '<div class="leaflet-custom-container"><a href=#GBR0 onclick="exitFullscreenFromLeaflet()"class="leaflet-custom-title">Queen Monroe II<span class="tooltip-hint">&nbsp;&#x229E;&#x2197;</span></a><p class="leaflet-custom-caption">Queen Monroe II ruled the country of Great Britain from 1946 to 1953</p><p class="leaflet-custom-author">McPlace McHolder</p></div>'
  ).addTo(map);

document.getElementById("GBR0-title").onclick = function() {map.setView([51.5072, -0.1276],map.getZoom());};

const INT1 = L.Icon.extend({
  options: {
    iconUrl: 'assets/INT1-pole.webp',
    iconSize: [200, 250],
    iconAnchor: [0, 250],
    popupAnchor: [100.0, -250],
  }
});
L.marker([28.28915599430329, -81.46223338275723],
  { icon: new INT1() })
  .bindPopup(
    '<div class="leaflet-custom-container"><a href=#INT1 onclick="exitFullscreenFromLeaflet()"class="leaflet-custom-title">United States of Socks<span class="tooltip-hint">&nbsp;&#x229E;&#x2197;</span></a><p class="leaflet-custom-caption">Each state is governed by a sock</p><p class="leaflet-custom-author">Place-holder</p></div>'
  ).addTo(map);

document.getElementById("INT1-title").onclick = function() {map.setView([28.28915599430329, -81.46223338275723],map.getZoom());};

const navi_ioc = L.Icon.extend({
  options: {
    iconUrl: 'assets/navi_ioc-pole.webp',
    iconSize: [200, 250],
    iconAnchor: [0, 250],
    popupAnchor: [100.0, -250],
  }
});
L.marker([28.292568632166876, -81.41640330504649],
  { icon: new navi_ioc() })
  .bindPopup(
    '<div class="leaflet-custom-container"><a href=#navi_ioc onclick="exitFullscreenFromLeaflet()"class="leaflet-custom-title">International Olivia Committee<span class="tooltip-hint">&nbsp;&#x229E;&#x2197;</span></a><p class="leaflet-custom-caption">Every four years, ballet is the main event at the Olimpics. Officially, this is held at the Olisseum, but some say the grand finals are held in a \"dungeon\" deep underground</p><p class="leaflet-custom-author">Navi</p></div>'
  ).addTo(map);

document.getElementById("navi_ioc-title").onclick = function() {map.setView([28.292568632166876, -81.41640330504649],map.getZoom());};

}
setUpMap();
