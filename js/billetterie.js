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

// Début du script du formulaire 

const firstNameValue = document.getElementById('firstname').value
const lastNameValue = document.getElementById('lastname').value
const mailValue = document.getElementById('email').value
const selectOptionValue = document.getElementById('option-select').selectedOptions[0].text

// const optionField = document.querySelector('#option-field')
// const firstnameField = document.querySelector('#firstname-field')
// const lastnameField = document.querySelector('#lastname-field')
// const emailField = document.querySelector('#email-field')

const ticketSlide = document.getElementById('ticket');
const optionForm = document.getElementById("option-form")
   
optionForm.addEventListener("submit", function (event) {
//     //window.open('ticket.html', '_blank');
event.preventDefault();

ticketSlide.classList.toggle('is-active');

if(selectOptionValue == "Sélectionne ta formule" ) {
    alert("Oups! Tu n'as pas choisi ta formule!")
}
else {
document.getElementById("firstname-field").innerHTML = firstNameValue;
document.getElementById("lastname-field").innerHTML = lastNameValue;
document.getElementById("email-field").innerHTML = mailValue;
document.getElementById("option-field").innerHTML = selectOptionValue; }
 })
    // if (selectOption == "Sélectionne ta formule") {
    //     alert("Ooops! Tu n'as pas choisi ta formule!")    
    // }

    // else {
    // optionField.appendChild(selectOption);
    // firstnameField.appendChild(firstName);
    // lastnameField.appendChild(lastName);
    // emailField.appendChild(mail);
// });






