const cat = document.querySelector("#cat");
const explosion = document.querySelector("#explosion");

cat.addEventListener("click", function () {
  console.log("explosion");
  explosion.style.visibility = "visible";
  cat.style.visibility = "hidden";
});

explosion.addEventListener("click", function () {
  console.log("cat");
  explosion.style.visibility = "hidden";
  cat.style.visibility = "visible";
});

explosion.style.visibility = "hidden";
