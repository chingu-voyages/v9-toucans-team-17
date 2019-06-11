window.onload = load;

function load() {
  TweenMax.to(".content-header", 3, {opacity: 1, scale: 1, ease: Circ.easeOut});
  TweenMax.to(".li-down", 1.3, {y: 0, delay: 2.3, ease: Circ.easeOut});
}