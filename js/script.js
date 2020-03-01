var x = document.querySelector(".search");
var m = document.querySelector(".modal-container");
x.onclick = function(disp){
  if (m.style.display === "none") {
    m.style.display = "block";
  } else {
    m.style.display = "none";
  }
}
