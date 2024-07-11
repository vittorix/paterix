const cat = document.querySelector("#cat");
const explosion = document.querySelector("#explosion");
var explosionSound = document.getElementById("explosionSound");

cat.addEventListener("click", function () {
  explosionSound.play();
  explosion.style.visibility = "visible";
  cat.style.visibility = "hidden";
});

explosion.addEventListener("click", function () {
  explosion.style.visibility = "hidden";
  cat.style.visibility = "visible";
});

explosion.style.visibility = "hidden";
