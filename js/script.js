var togBtn = document.querySelector(".search");
var modal = document.querySelector(".modal-container");

togBtn.addEventListener("click", function() {
  modal.classList.toggle("modal-show");
});