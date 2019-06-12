window.onload = load;

function load() {
  TweenMax.to(".content-header", 2, {opacity: 1, scale: 1, ease: Circ.easeOut});
  TweenMax.from(".li-down", 1.3, {y: -60, delay: 1, ease: Circ.easeOut});
}

// algorithm for mobile navbar
let hamburgerButton = document.getElementById('hamburger-icon');

hamburgerButton.addEventListener('click', () => {
  document.querySelector('.bar1').classList.toggle('change');
  document.querySelector('.bar2').classList.toggle('change');
  document.querySelector('.bar3').classList.toggle('change');
  document.querySelector('#nav ul').classList.toggle('active');
})