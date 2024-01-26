const sliderHero = document.querySelector('.slider-hero');
let counter = 1;

setInterval(() => {
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = 'translateX(' + (-counter * 100) + '%)';
    counter++;

    if (counter === 3) {
        setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            counter = 1;
        }, 500);
    }
}, 2000);