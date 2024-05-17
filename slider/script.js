let images = [
  { src: "i1.jpg", description: "i1.jpg" },
  { src: "i2.jpg", description: "i2.jpg" },
  { src: "i3.jpg", description: "i3.jpg" }
];
let currentIndex = 0;

const imageElement = document.querySelector(".image");
const descriptionElement = document.querySelector(".description");

document.querySelector(".prev").addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

document.querySelector(".next").addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

function updateImage() {
  imageElement.src = images[currentIndex].src;
  imageElement.alt = images[currentIndex].description;
  descriptionElement.textContent = images[currentIndex].description;
}

updateImage();
