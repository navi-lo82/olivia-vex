const map = L.map('map').setView([28.2956, -81.4039], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const International0 = L.Icon.extend({
  options: {
    iconUrl: 'assets/INT0-pole.webp',
    iconSize: [210, 300],
    iconAnchor: [0, 300],
    popupAnchor: [105, -300]
  }
});

const International1 = L.Icon.extend({
  options: {
    iconUrl: 'assets/INT1-pole.webp',
    iconSize: [210, 300],
    iconAnchor: [0, 300],
    popupAnchor: [105, -300]
  }
});

const International2 = L.Icon.extend({
  options: {
    iconUrl: 'assets/INT2-pole.webp',
    iconSize: [210, 300],
    iconAnchor: [0, 300],
    popupAnchor: [105, -300]
  }
});

const Gbr0 = L.Icon.extend({
  options: {
    iconUrl: 'assets/GBR0-pole.webp',
    iconSize: [220, 300],
    iconAnchor: [0, 300],
    popupAnchor: [105, -300]
  }
});

const Den0 = L.Icon.extend({
  options: {
    iconUrl: 'assets/DEN0-pole.webp',
    iconSize: [220, 300],
    iconAnchor: [0, 300],
    popupAnchor: [105, -300]
  }
});

const Ned0 = L.Icon.extend({
  options: {
    iconUrl: 'assets/NED0-pole.webp',
    iconSize: [220, 300],
    iconAnchor: [0, 300],
    popupAnchor: [105, -300]
  }
});

const international0_txt = "Olivia Monroe on the UN flag \n\n\n - Fortnitegamer98"
L.marker([28.2956, -81.40399], { icon: new International0() }).bindPopup(international0_txt).addTo(map);

const international1_txt = "Socko- Fortnitegamer99"
L.marker([28.4, -81.0399], { icon: new International1() }).bindPopup(international1_txt).addTo(map);

const international2_txt = "NASA owositti- Fortnitegamer97"
L.marker([28.2900, -81.3000], { icon: new International2() }).bindPopup(international2_txt).addTo(map);

const gbr0_txt = "Olivia Monroe on Union Jack \n\n\n - navi_lo82"
L.marker([51.5072, -0.1276], { icon: new Gbr0() }).bindPopup(gbr0_txt).addTo(map);

const den0_txt = "Typical Danish flag \n\n\n - danish_one"
L.marker([56.2639, 9.5018], { icon: new Den0() }).bindPopup(den0_txt).addTo(map);

const ned0_txt = "Shibe flag \n\n\n - a Shibe"
L.marker([52.1326, 5.2913], { icon: new Ned0() }).bindPopup(ned0_txt).addTo(map);
