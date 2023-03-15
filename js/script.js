/* Début du Script menu-burger */

const menuBurger = document.querySelector('.hamburger');

menuBurger.addEventListener('click', function () {
    menuBurger.classList.toggle('is-active');
});