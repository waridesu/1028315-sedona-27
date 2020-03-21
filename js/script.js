var togBtn = document.querySelector(".search");
var modal = document.querySelector(".modal-container");
modal.classList.add("modal-hide");
togBtn.addEventListener("click", function() {
  modal.classList.toggle("modal-hide");
  modal.classList.remove("modal-error");/*нужно т.к. срабатывали две анимации*/
});

var form = modal.querySelector("form");
var dateIn = document.querySelector(".date-in");
var dateOut = document.querySelector(".date-out");
var sumAdults = document.querySelector(".sum-adults");
var sumChild = document.querySelector(".sum-child");

form.addEventListener("submit", function(evt) {
  if (!dateIn.value || !dateOut.value || !sumAdults.value || !sumChild.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
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