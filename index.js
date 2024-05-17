let images = [
  {
    src: "./images/here_maps.webp",
    role: "Software Engineer III",
    company: "Nokia",
    description: "Software Engineer III - Chicago, Illinois 2008-2012"
  },
  {
    src: "./images/vittorio_at_work.jpg",
    role: "Lead Software Engineer",
    company: "Epsilon Data Management",
    description: "Lead Software Engineer - Chicago, Illinois 2012-2016"
  },
  {
    src: "./images/ge_transportation.jpg",
    role: "Sr Software Engineer",
    company: "General Electric",
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
const sliderRole = document.getElementById("my-pic-text-role");
const sliderCompany = document.getElementById("my-pic-text-company");

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
  sliderRole.textContent = images[n].role;
  sliderCompany.textContent = images[n].company;
}

updateImage(initialPicIndex);
