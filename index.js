let images = [
  {
    src: "./images/here_maps.webp",
    description: "Software Engineer 3 - Chicago, Illinois 2008-2012"
  },
  {
    src: "./images/vittorio_at_work.jpg",
    description: "Lead Software Engineer - Chicago, Illinois 2012-2016"
  },
  {
    src: "./images/ge_transportation.jpg",
    description: "Senior Software Engineer - Melbourne, Florida 2017-2018"
  }
];

const numImages = images.length;
let initialPicIndex = 1;
let index = initialPicIndex;
const imageElement = document.querySelector(".image");
const descriptionElement = document.querySelector(".description");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener("click", function () {
  if (index > 0) {
    index--;
    updateImage(index);
  }
});

nextButton.addEventListener("click", function () {
  if (index < numImages - 1) {
    index++;
    updateImage(index);
  }
});

function updateImage(n) {
  imageElement.src = images[n].src;
  imageElement.alt = images[n].description;
  descriptionElement.textContent = images[n].description;
  prevButton.style.visibility = n > 0 ? "visible" : "hidden";
  nextButton.style.visibility = n < numImages - 1 ? "visible" : "hidden";
}

updateImage(initialPicIndex);
