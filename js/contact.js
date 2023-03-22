// Début du script formulaire de contact

const message =
  "Merci d'avoir pris le temps d'écrire ce message. L'équipe de Brain Forge revient vers toi au plus vite!";

const form = document.getElementById("contact-form")

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});

//   Fin du script formulaire de contact