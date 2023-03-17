/* Début du Script menu-burger */

const menuBurger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobileNav');
const mobileMenuBackground = document.querySelector('nav');
const welcomePage = document.querySelector('.welcomePage');
const downArrow = document.querySelector('.down-arrow');

menuBurger.addEventListener('click', function () {
    menuBurger.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
    mobileMenuBackground.classList.toggle('is-active');
    welcomePage.classList.toggle('is-inactive');
    downArrow.classList.toggle('is-inactive');
});

/* Fin du Script menu-burger */

/* Debut du Script countdown */

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

/* Fin du Script countdown */