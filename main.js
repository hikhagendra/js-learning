/**
 * Tests if the element is visible (within the visible part of the page)
 * It's enough that the top or bottom edge of the element are visible
 */
function isVisible(elem) {
  let elemCoords = elem.getBoundingClientRect();
  let from = window.pageYOffset;
  let to = window.pageYOffset + (document.documentElement.clientHeight * 2);
  let offsetBottom = elem.offsetTop + elem.offsetHeight;
  let onScreen = (elem.offsetTop > from && elem.offsetTop < to) || (offsetBottom > from && offsetBottom < to);
  
  if(onScreen) {
    return true;
  } else {
    return false;
  }
}

function showVisible() {
  for (let img of document.querySelectorAll('img')) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (isVisible(img)) {
      realSrc += '?nocache=' + Math.random();

      img.src = realSrc;

      img.dataset.src = '';
    }
  }
}

window.addEventListener('scroll', showVisible);
showVisible();