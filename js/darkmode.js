document.querySelector(".switch-label").addEventListener("click", darkMode); 
//punto all div .slider dicendo che all evento "click" si esegua la funzione 'darkMode'
let lightMode = true; // dichiaro variabile globale booleana inizializzata a true perchè il sito starta in ligth mode 
function darkMode () { //funzione che mi cambia l'attributo 'data-theme' in dark e viceversa
  if(lightMode){
    document.documentElement.setAttribute('data-theme', 'dark');
    lightMode = false //diventando dark, ovviamente ligthMode diventa false
  }else{
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode = true; //diventando light, ovviamente ligthMode diventa true
  }
}
