/* Début du Script Menu-burger */

const menuBurger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobileNav");
const mobileMenuBackground = document.querySelector("nav");
const pageContainer = document.querySelector(".pageContainer");
const footerContainer = document.querySelector(".footer");

menuBurger.addEventListener("click", function () {
  menuBurger.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
  mobileMenuBackground.classList.toggle("is-active");
  pageContainer.classList.toggle("is-inactive");
  footerContainer.classList.toggle("is-inactive");
});

/* Fin du Script Menu-burger */

//InfoButton

const infoButtons = document.querySelectorAll(".infoButton");
const slideInfos = document.querySelectorAll(".slideInfo");
const slides = document.querySelectorAll(".slide");

infoButtons.forEach((infoButton, index) => {
  infoButton.addEventListener("click", function () {
    slideInfos[index].classList.toggle("is-active");
    slides[index].classList.toggle("is-inactive");
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
