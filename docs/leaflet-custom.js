// for exiting full screen from leaflet
function exitFullscreenFromLeaflet() {
  if (document.fullscreenElement) {
    map.toggleFullscreen();
  }
}
