
// Show or hide content depending if this device can hover or not
// Set the body class to "is-mobile" if so
function setMobileHint() {
  const canHover = window.matchMedia("(hover: hover)").matches;
  if (!canHover) {
    document.body.classList.add("is-mobile");
  }
}

setMobileHint();
