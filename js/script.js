// Script menu-burger

const menuBurger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobileNav");
const mobileMenuBackground = document.querySelector("nav");
const welcomePage = document.querySelector(".welcomePage");
const downArrow = document.querySelector(".down-arrow");

menuBurger.addEventListener("click", function () {
  menuBurger.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
  mobileMenuBackground.classList.toggle("is-active");
  welcomePage.classList.toggle("is-inactive");
  downArrow.classList.toggle("is-inactive");
});

// Script Slider

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
