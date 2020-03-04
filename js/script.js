var togBtn = document.querySelector(".search");
var modal = document.querySelector(".modal-container");

togBtn.onclick = function() {
  modal.classList.toggle("modal-hide");
}