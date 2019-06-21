// algorithm for the headline animation
window.onload = load;

function load() {
    var headerTimeline = new TimelineLite();
    headerTimeline.from('#nav', 1, {y: -50, opacity:0})
    headerTimeline.from('#head', 1, {opacity:0}, .8);
    headerTimeline.from('.content-header h1', 1, {y: 100, opacity:0}, 1); 
    headerTimeline.from('.content-header p:nth-of-type(1)', 1, {y: 100, opacity:0}, 2);
}

// algorithm for mobile navbar
let hamburgerButton = document.getElementById('hamburger-icon');

hamburgerButton.addEventListener('click', () => {
  document.querySelector('.bar1').classList.toggle('change');
  document.querySelector('.bar2').classList.toggle('change');
  document.querySelector('.bar3').classList.toggle('change');
  document.querySelector('#nav ul').classList.toggle('active');
})

// algorithm for navbar animation on scroll
if (window.innerWidth >= 768){
  var navScroll = new TimelineLite();
    navScroll.to("#nav", .3, {y:-20});
    navScroll.to("#nav h1", .2, {scale:.9},.1)
    navScroll.to("#nav ul", .1, {scale: .97},'-=.1')
  var navbar_controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: "#product h1",
    triggerHook: "onEnter",
    duration: "100%"
})
    .setTween(navScroll)
    .addTo(navbar_controller);
}

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






/* unused code */

/*
TweenMax.to(".content-header", 2, {opacity: 1, scale: 1, ease: Circ.easeOut});
TweenMax.from(".li-down", 1.3, {y: -60, delay: 1, ease: Circ.easeOut});
*/