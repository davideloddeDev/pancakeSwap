// Get the button:
let mybutton = document.getElementById("btn-up");

// Quando l'utente scrolla oltre gli 800 px il pulsante scompare
window.onscroll = function() {scrollFunction()};
mybutton.style.display = "none"; // inizializzo il pulsante a none

function scrollFunction() {  
  
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// al click scrolla "dolcemente" fino a top pagina
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Effetto di scorrimento fluido
  });
}