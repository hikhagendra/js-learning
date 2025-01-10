let arrow = document.getElementById('arrowTop');

document.onscroll = function() {
  arrowVisibility();
}

arrowVisibility();

arrow.addEventListener('click', function(event) {
  window.scrollTo(0, 0);
});

function arrowVisibility() {
  let offsetTop = window.pageYOffset;
  let screenHeight = document.documentElement.clientHeight;

  if(offsetTop >= screenHeight) {
    arrow.hidden = false;
  } else {
    arrow.hidden = true;
  }
}