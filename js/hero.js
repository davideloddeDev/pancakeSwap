const sliderHero = document.querySelector('.slider-hero');
  const slides = document.querySelectorAll('.slide-hero');
  let counter = 0;

  setInterval(() => {
    sliderHero.style.transition = 'transform 0.5s ease-in-out';
    sliderHero.style.transform = 'translateX(' + (-counter * 100) + '%)';
    counter++;

    if (counter === slides.length) {
      setTimeout(() => {
        sliderHero.style.transition = 'none';
        sliderHero.style.transform = 'translateX(0)';
        counter = 0;
      }, 500);
    }
  }, 3000);