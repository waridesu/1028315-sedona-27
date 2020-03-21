var togBtn = document.querySelector(".search");
var modal = document.querySelector(".modal-container");
modal.classList.add("modal-hide");
togBtn.addEventListener("click", function() {
  modal.classList.toggle("modal-hide");
});

var form = modal.querySelector("form");
var dateIn = document.querySelector(".date-in");
var dateOut = document.querySelector(".date-out");
var sumAdults = document.querySelector(".sum-adults");
var sumChild = document.querySelector(".sum-child");

from.addEventListener("submit", function() {
  if (!dateIn.value || !dateOut.value || !sumAdults.value || !sumChild.value) {
    evt.preventDefault();
    modal.classList.add("modal-error");
    modal.offsetWidht = modal.offsetWidht;
    modal.classList.add("modal-error");
  }
  else {
    if (isstorageSupport) {
      localStorage.setItem("dateIn", dateIn.value);
      localStorage.setItem("dateOut", dateOut.value);
      localStorage.setItem("sumAdults", sumAdults.value);
      localStorage.setItem("sumChild", sumChild.value);
    }
  }
});