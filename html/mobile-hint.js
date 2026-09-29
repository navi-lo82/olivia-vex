
setMobileHint = function () {
  const canHover = window.matchMedia("(hover: hover)").matches;
  if (!canHover) {
    document.body.classList.add("is-mobile");
  }
};
setMobileHint();
