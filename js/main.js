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

// scroll event triggered by ID
const blackRice = document.getElementById('black-rice');
const redRice = document.getElementById('red-rice');
const brownRice = document.getElementById('brown-rice');
const media768 = window.matchMedia("(min-width: 768px)");

  let yBlack = blackRice.scrollHeight;
  let yRed = redRice.scrollHeight;
  let yBrown = brownRice.scrollHeight;

  function scroll() {
  if(document.body.scrollTop > yBlack + 100 && media768.matches || document.documentElement.scrollTop > yBlack + 100 && media768.matches) {
    // console.log(yRed + 100 + "px Yblack");
    TweenMax.to(".bg-text-black h3", 2, {opacity: 1, scale: -1, ease: Circ.easeOut});
    TweenMax.to(".bg-text-black p", 3, {opacity: 1, scale: -1, delay: 1, ease: Circ.easeOut});
  }
  if(document.body.scrollTop > yBlack + 500 && media768.matches || document.documentElement.scrollTop > yRed + 500 && media768.matches) {
    // console.log(yRed + 500 + "px Yred");
    TweenMax.to(".bg-text-red h3", 2, {opacity: 1, scale: -1, ease: Circ.easeOut});
    TweenMax.to(".bg-text-red p", 3, {opacity: 1, scale: -1, delay: 1, ease: Circ.easeOut});
  }
  if(document.body.scrollTop > yBlack + 1000 && media768.matches || document.documentElement.scrollTop > yBrown + 1000 && media768.matches) {
    // console.log(yRed + 1000 + "px Ybrown");
    TweenMax.to(".bg-text-brown h3", 2, {opacity: 1, scale: -1, ease: Circ.easeOut});
    TweenMax.to(".bg-text-brown p", 3, {opacity: 1, scale: -1, delay: 1, ease: Circ.easeOut});
  }
}

window.onscroll = function() {scroll()};
  