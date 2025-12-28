const map = L.map('map').setView([28.2956, -81.4039], 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: `&copy;
            <a href="https://www.openstreetmap.org/copyright">
            OpenStreetMap
            </a> contributors`
}).addTo(map);

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
    'Olivia Hood of Sherwood Forest - Legend has it that on Valentine\'s Day, Olivia Hood of Sherwood Forest stalks the woods in secret, marking unsuspecting single men with scented love arrows. Once struck, they are not claimed at once, but patiently savoured for a later time. Sherwood Forest is now a legendary attraction - particularly among the brave, the curious... and the single - Navi'
  ).addTo(map);

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
    'NASA - NASA is looked after by owoClap - Place-holder'
  ).addTo(map);

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
    'Oligarchy of South Africa - The flag of South Africa under the rule of Olivia Monroe and her chosen gal pals; their policies are driven by DFE and increasing birth rates. - LeanFries'
  ).addTo(map);

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
    'Common Love - Flag representing an international association of 56 countries united by their shared history and love for Olivia Monroe - LeanFries'
  ).addTo(map);

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
    'Denmark for the lols - Denmark and Sweden are still at it again - Place-holder'
  ).addTo(map);

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
    'The Fertile Crescent - 5 kids? There\'s no way you want 8 kids. 11 kids is too many. How are we supposed to take care of 15 kids? - ninjasaurusrexatron'
  ).addTo(map);

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
    'The Olivia Rampant - Our happy girl shows off her feisty side - Rampant, with hot pink stiletto nails, and shreds - Relishes'
  ).addTo(map);

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
    'Queen Saotome VI - Queen Saotome VI has been in war for 5 years with the United States. Legends has it she mounts on a Shibe. - Place-holder'
  ).addTo(map);

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
    'United Nations of Monroe - Olivia Monroe united the nations - Place-holder'
  ).addTo(map);

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
    'United Olivians - Centre of the world? The North Pole? Paaaah! We know where it is! - Relishes'
  ).addTo(map);

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
    'Queen Monroe II - Queen Monroe II ruled the country of Great Britain from 1946 to 1953 - Place-holder'
  ).addTo(map);

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
    'United States of Socks - Each state is governed by a sock - Place-holder'
  ).addTo(map);

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
    'International Olivia Committee - Every four years, ballet is the main event at the Olimpics. Officially, this is held at the Olisseum, but some say the grand finals are held in a \"dungeon\" deep underground - Navi'
  ).addTo(map);

