/* Début du Script Menu-burger */

const menuBurger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobileNav');
const mobileMenuBackground = document.querySelector('nav');
const pageContainer = document.querySelector('.pageContainer');

menuBurger.addEventListener('click', function () {
    menuBurger.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
    mobileMenuBackground.classList.toggle('is-active');
    pageContainer.classList.toggle('is-inactive');
});

/* Fin du Script Menu-burger */

/* Debut du Script Countdown */

function findDate() {
    //Date parameters
    const countDate = new Date('July 29, 2023 20:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //Time setting
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Calculate Time remaining
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    //Funtion Number under ten
    function underTen(number) {
        if (number < 10) {
            return `0${number}`
        } else {
            return `${number}`
        }
    }

    document.querySelector('.day').innerHTML = underTen(textDay) + "J"
    document.querySelector('.hour').innerHTML = underTen(textHour)
    document.querySelector('.minute').innerHTML = underTen(textMinute)
    document.querySelector('.second').innerHTML = underTen(textSecond)
};

const countdown = findDate();
setInterval(findDate, 1000);

/* Fin du Script Countdown */

/* Début du Script Slider */

//Slider 1
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

//Slider 2
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