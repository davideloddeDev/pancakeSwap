function scrollToTop() {
    // Scorri fino alla cima della pagina
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Effetto di scorrimento fluido
    });
    document.querySelector('.button-up').classList.add('clicked');
  }