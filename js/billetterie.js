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

// Début du Script Billeterie (flip card)

const card1Night = document.getElementById("card1night")
const card2Night = document.getElementById("card2night")
const cardAllInclusive = document.getElementById("card-all-inclusive")

const cardClassName = "card"

let cards = document.getElementsByClassName(cardClassName)
for (let i = 0; i < cards.length; i++) {
    let item = cards[i]
    item.addEventListener('click', flipCard)
}

function flipCard(e) {
    let card = e.currentTarget

    console.log(card.id)
    let class_name = "flipCardRight"
    switch (card.id) {
        case "":
            class_name = "flipCardLeft"
            break
    }

    card.classList.toggle("flipCard")
}

// Fin du script billeterie Flip Card