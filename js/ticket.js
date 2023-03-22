
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

// Début du Script pour générer le ticket

const firstName = document.querySelector('#firstname')
const lastName = document.querySelector('#lastname')
const mail = document.querySelector('#email')
const selectOption = document.querySelector('#choix_de_la_formule').selectedOptions[0].text

const optionField = document.querySelector('#option-field')
const firstnameField = document.querySelector('#firstname-field')
const lastnameField = document.querySelector('#lastname-field')
const emailField = document.querySelector('#email-field')

optionField.appendChild(selectOption)
firstnameField.appendChild(firstName)
lastnameField.appendChild(lastName)
emailField.appendChild(mail)

