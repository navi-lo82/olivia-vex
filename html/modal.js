// Set each flag image to be clickable and show modal
// Modal, ie show flag image in full screen
function setModal() {
  let modal = document.getElementById("modal");
  let modalImg = document.getElementById("modal-content");
  let modalCaption = document.getElementById("modal-caption");
  let mapDiv = document.getElementById("map");

  let figures = document.getElementsByTagName("figure");

  // for each image, make it clickable and activate the modal
  for (let i = 0; i < figures.length; i++) {
    let img = figures[i].getElementsByTagName("img")[0]
    let caption = figures[i].getElementsByClassName("figure-title")[0].innerHTML;
    img.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      modalCaption.innerHTML = caption;
      mapDiv.style.display = "none";
    }
  }

  // close button on click
  let span = document.getElementById("modal-close");
  span.onclick = function () {
    modal.style.display = "none";
    mapDiv.style.display = "block";
  }
}

setModal();
