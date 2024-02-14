const sliderHero = document.querySelector('.slider-hero');
const slides = document.querySelectorAll('.slide-hero');
const position1 = document.querySelector('#position1')
const position2 = document.querySelector('#position2')
const position3 = document.querySelector('#position3')
const position4 = document.querySelector('#position4')
const position5 = document.querySelector('#position5')
let counter = 0;

setInterval(() => {
  sliderHero.style.transition = 'none'; // Disabilita la transizione
  sliderHero.style.transform = 'translateX(' + (-counter * 100) + '%)';
  counter++;


  if (counter === slides.length) {
    setTimeout(() => {
      sliderHero.style.transform = 'translateX(0)';
      counter = 0;

      sliderHero.style.transition = 'none'; // Riabilita la transizione
    }, 500);
  }
  console.log(counter);
  switch (counter) {
    case 1:
      console.log("caso 1")
      position1.style.display = 'block';
      
      break;
    case 2:
      console.log("caso 2")
      position1.style.display = 'block';
      position1.style.marginLeft = '22px';
      
      break;
    case 3:
      console.log("caso 3")
      position1.style.display = 'block';
      position1.style.marginLeft = '44px';
      break;
    case 4:
      console.log("caso 4")
      position1.style.display = 'block';
      position1.style.marginLeft = '66px';
      break;
    case 5:
      console.log("caso 5")
      position1.style.display = 'block';
      position1.style.marginLeft = '88px';
      break;

    default:
      break;
  }
}, 3000);