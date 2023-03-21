/* Début du Script Menu-burger */

const menuBurger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobileNav');
const mobileMenuBackground = document.querySelector('nav');
const pageContainer = document.querySelector('.pageContainer');
const footerContainer = document.querySelector('.footer');

menuBurger.addEventListener('click', function () {
  menuBurger.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
  mobileMenuBackground.classList.toggle('is-active');
  pageContainer.classList.toggle('is-inactive');
  footerContainer.classList.toggle('is-inactive');
});

/* Fin du Script Menu-burger */

// Début du script formulaire de contact

const message =
  "Merci d'avoir pris le temps d'écrire ce message. On reviens vers toi ASAP!";

const form = document.getElementById("contact-form")

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});

//   Fin du script formulaire de contact