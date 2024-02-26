document.querySelector(".switch-label").addEventListener("click", darkMode); 
//punto all div .slider dicendo che all evento "click" si esegua la funzione 'darkMode'
let lightMode = true; // dichiaro variabile globale booleana inizializzata a true perchè il sito starta in ligth mode 

function darkMode () { //funzione che mi cambia l'attributo 'data-theme' in dark e viceversa
  let coinLightMedia = document.querySelector(".coin-light-mq");
  let coinDarkMedia = document.querySelector(".coin-dark-mq");
  let coinLight = document.querySelector(".coin-light");
  let coinDark = document.querySelector(".coin-dark");

  if(lightMode){
    document.documentElement.setAttribute('data-theme', 'dark');

    document.querySelector("#footer-carosello").setAttribute("src","images/img-carosello/footer-carosello-dark.svg"); //cambio l'src della svg normale con quella che ha modificato il tag fill in colorazione dark
    document.querySelector("#bnb").children[0].setAttribute("src","images/img-carosello/BNBChain-dark.svg"); // .children[0] serve per selezionare il tag img
    document.querySelector("#aptos").children[0].setAttribute("src","images/img-carosello/Aptos-dark.svg");//cambio l'src della svg normale con quella che ha modificato il tag fill in colorazione dark
    document.querySelector("#ethereum").children[0].setAttribute("src","images/img-carosello/ethereum-dark.svg");
    document.querySelector("#polygon").children[0].setAttribute("src","images/img-carosello/polygon-dark.svg");
    document.querySelector("#zksync").children[0].setAttribute("src","images/img-carosello/zksync-dark.svg");
    document.querySelector("#arbitrum").children[0].setAttribute("src","images/img-carosello/arbitrum-dark.svg");
    document.querySelector("#linea").children[0].setAttribute("src","images/img-carosello/linea-dark.svg");
    document.querySelector("#base").children[0].setAttribute("src","images/img-carosello/base-dark.svg");
    coinDark.style.display = 'block';
    coinLight.style.display = 'none';

    /* if (window.matchMedia("(max-width: 967px)").matches) {
      // Media query attiva, imposta il display dei video in base al tema corrente
      console.log('media queries dark mode a 967')
      coinDarkMedia.style.display = 'block';
      coinLightMedia.style.display = 'none';
      coinLight.style.display = 'none';
      coinDark.style.display = 'none';
    }  */

    lightMode = false //diventando dark, ovviamente ligthMode diventa false

  }else{
    document.documentElement.setAttribute('data-theme', 'light');

    document.querySelector("#footer-carosello").setAttribute("src","images/img-carosello/footer-carosello.svg");
    document.querySelector("#bnb").children[0].setAttribute("src","images/img-carosello/BNBChain.svg");
    document.querySelector("#aptos").children[0].setAttribute("src","images/img-carosello/Aptos.svg");
    document.querySelector("#ethereum").children[0].setAttribute("src","images/img-carosello/ethereum.svg");
    document.querySelector("#polygon").children[0].setAttribute("src","images/img-carosello/polygon.svg");
    document.querySelector("#zksync").children[0].setAttribute("src","images/img-carosello/zksync.svg");
    document.querySelector("#arbitrum").children[0].setAttribute("src","images/img-carosello/arbitrum.svg");
    document.querySelector("#linea").children[0].setAttribute("src","images/img-carosello/linea.svg");
    document.querySelector("#base").children[0].setAttribute("src","images/img-carosello/base.svg");
    coinDark.style.display = 'none';
    coinLight.style.display = 'block';

   /*  if (window.matchMedia("(max-width: 967px)").matches) {
      // Media query attiva, imposta il display dei video in base al tema corrente
      console.log('media queries light mode a 967')
        coinLightMedia.style.display = 'block';
        coinDarkMedia.style.display = 'none';
        coinLight.style.display = 'none';
        coinDark.style.display = 'none';
      
    } */

    lightMode = true; //diventando light, ovviamente ligthMode diventa true
  }
}

function checkMediaQuery() {
  let coinLightMedia = document.querySelector(".coin-light-mq");
  let coinDarkMedia = document.querySelector(".coin-dark-mq");
  let coinLight = document.querySelector(".coin-light");
  let coinDark = document.querySelector(".coin-dark");

  if (window.matchMedia("(max-width: 967px)").matches) {
    // Media query attiva, imposta il display dei video in base al tema corrente
    if (!lightMode) {
      coinDarkMedia.style.display = 'block';
      coinLightMedia.style.display = 'none';
      coinDark.style.display = 'none';
      coinLight.style.display = 'none';
    } else {
      coinDarkMedia.style.display = 'none';
      coinLightMedia.style.display = 'block';
      coinDark.style.display = 'none';
      coinLight.style.display = 'none';
    }
  } else {
    if (!lightMode) {
      coinDarkMedia.style.display = 'none';
      coinLightMedia.style.display = 'none';
      coinDark.style.display = 'block';
      coinLight.style.display = 'none';
    } else {
      coinDarkMedia.style.display = 'none';
      coinLightMedia.style.display = 'none';
      coinDark.style.display = 'none';
      coinLight.style.display = 'block';
    }
  }
}

window.matchMedia("(max-width: 967px)").addListener(checkMediaQuery);
    
checkMediaQuery();