/* Début du Script menu-burger */

const menuBurger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobileNav');
const mobileMenuBackground = document.querySelector('nav');
const welcomePage = document.querySelector('.welcomePage');

menuBurger.addEventListener('click', function () {
    menuBurger.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
    mobileMenuBackground.classList.toggle('is-active');
    welcomePage.classList.toggle('is-inactive');
});