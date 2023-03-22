/* Script InfoButton */

const infoButtons = document.querySelectorAll(".infoButton");
const slideInfos = document.querySelectorAll(".slideInfo");
const slides = document.querySelectorAll(".slide");
const footerProgs = document.querySelectorAll(".footerProg");

infoButtons.forEach((infoButton, index) => {
  infoButton.addEventListener("click", function () {
    slideInfos[index].classList.toggle("is-active");
    slides[index].classList.toggle("is-inactive");
    footerProgs[index].classList.toggle("is-active");
  });
});

const infoButtons2 = document.querySelectorAll(".infoButton2");
const slideInfos2 = document.querySelectorAll(".slideInfo2");
const slides2 = document.querySelectorAll(".slide2");
const footerProgs2 = document.querySelectorAll(".footerProg2");

infoButtons2.forEach((infoButton, index) => {
  infoButton.addEventListener("click", function () {
    slideInfos2[index].classList.toggle("is-active");
    slides2[index].classList.toggle("is-inactive");
    footerProgs2[index].classList.toggle("is-active");
  });
});

/* Début du Script Slider */

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

//slider 2

const slidesContainer2 = document.getElementById("slides-container2");
const slide2 = document.querySelector(".slide2");
const prevButton2 = document.getElementById("slide-arrow-prev2");
const nextButton2 = document.getElementById("slide-arrow-next2");

nextButton2.addEventListener("click", () => {
  const slideWidth = slide2.clientWidth;
  slidesContainer2.scrollLeft += slideWidth;
});

prevButton2.addEventListener("click", () => {
  const slideWidth = slide2.clientWidth;
  slidesContainer2.scrollLeft -= slideWidth;
});

/* Fin du Script Slider */
