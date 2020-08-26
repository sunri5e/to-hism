window.onscroll = function() {setScroll()};

function setScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBullet").style.top = scrolled + "%";
}

lottie.loadAnimation({
  container: document.getElementById("loader"), // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: './js/loader.json' // the path to the animation json
});
