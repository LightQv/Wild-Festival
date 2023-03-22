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