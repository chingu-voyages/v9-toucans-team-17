window.onload = load;

function load() {
  TweenMax.to(".content-header", 2, {opacity: 1, scale: 1, ease: Circ.easeOut});
  TweenMax.to(".li-down", 1.3, {y: 0, delay: 1, ease: Circ.easeOut});
}