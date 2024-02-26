function changeVideo() {
    console.log(lightMode);
  
    let coinLightMedia = document.querySelector(".coin-light-mq");
    let coinDarkMedia = document.querySelector(".coin-dark-mq");
  
    let coinLight = document.querySelector(".coin-light");
    let coinDark = document.querySelector(".coin-dark");
    
    if (!lightMode) {
      coinDark.style.display = 'block';
      coinLight.style.display = 'none';
    } else {
      coinDark.style.display = 'none';
      coinLight.style.display = 'block';
    }
  }
  
  
  function checkMediaQuery() {
    let coinLightMedia = document.querySelector(".coin-light-mq");
    let coinDarkMedia = document.querySelector(".coin-dark-mq");
  
    if (window.matchMedia("(max-width: 967px)").matches) {
      // Media query attiva, imposta il display dei video in base al tema corrente
      if (!lightMode) {
        coinDarkMedia.style.display = 'block';
        coinLightMedia.style.display = 'none';
      } else {
        coinDarkMedia.style.display = 'none';
        coinLightMedia.style.display = 'block';
      }
    } else {
      changeVideo();
    }
  }
    
    window.matchMedia("(max-width: 967px)").addEventListener(checkMediaQuery);
    
    checkMediaQuery();