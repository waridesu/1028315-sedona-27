var togBtn = document.querySelector(".search");
var modal = document.querySelector(".modal-container");
modal.classList.add("modal-hide");
togBtn.addEventListener("click", function() {
  modal.classList.toggle("modal-hide");
});