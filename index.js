let images = [
  {
    src: "./images/informatix.jpg",
    role: "IT Business Owner",
    company: "Informatix SRL",
    city: "Palermo, Italy",
    additional: "",
    description:
      "IT Services - Software, Computers, Networks, Web Sites, Styling, Teaching 1995-1998, 2002-2004"
  },
  {
    src: "./images/ericsson.jpg",
    role: "Devops, Developer",
    company: "Ericsson Telecommunications",
    city: "Rome, Italy",
    additional: "",
    description:
      "Devops Engineer Lead and Software Developer Rome (Italy) 2001-2002"
  },
  {
    src: "./images/vittorio_depaul.jpg",
    role: "Computer Science",
    company: "Depaul University",
    city: "Chicago, Illinois",
    additional: "GPA 3.9",
    description:
      "Computer Science - Highest Honors (Summa Cum Laude) - Chicago, Illinois 2008"
  },
  {
    src: "./images/here_maps.webp",
    role: "Software Engineer III",
    company: "Nokia",
    city: "Chicago, Illinois",
    additional: "",
    description: "Software Engineer III - Chicago, Illinois 2008-2012"
  },
  {
    src: "./images/vittorio_at_work.jpg",
    role: "Lead Software Engineer",
    company: "Epsilon Data Management",
    city: "Chicago, Illinois",
    additional: "",
    description: "Lead Software Engineer - Chicago, Illinois 2012-2016"
  },
  {
    src: "./images/ge_transportation.jpg",
    role: "Sr Software Engineer",
    company: "General Electric",
    city: "Melbourne FL",
    additional: "",
    description: "Senior Software Engineer - Melbourne, Florida 2017-2018"
  }
];

let initialPicIndex = 4;
const numImages = images.length;
let index = initialPicIndex;
const imageElement = document.querySelector(".image");
const descriptionElement = document.querySelector(".description");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const sliderRole = document.getElementById("my-pic-text-role");
const sliderCompany = document.getElementById("my-pic-text-company");
const sliderCity = document.getElementById("my-pic-text-city");
const sliderAdditional = document.getElementById("my-pic-text-additional");

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
  prevButton.style.visibility = n > 0 ? "visible" : "hidden";
  nextButton.style.visibility = n < numImages - 1 ? "visible" : "hidden";
  sliderRole.innerHTML = images[n].role;
  sliderCompany.innerHTML = images[n].company;
  sliderCity.innerHTML = images[n].city;
  sliderAdditional.innerHTML = images[n].additional;
  descriptionElement.textContent = images[n].description;
}

updateImage(initialPicIndex);
