document.onmousedown = function(event) {
  event.preventDefault();

  let dragElem = document.elementFromPoint(event.clientX, event.clientY).closest('.draggable');

  if(dragElem) {
    dragElem.style.position = 'absolute';
    moveAt(event.pageX, event.pageY, dragElem);

    document.addEventListener('mousemove', onMouseMove);

    function onMouseMove(event) {
      let dragElemCoords = dragElem.getBoundingClientRect();
      let xEdge = event.pageX < (dragElemCoords.width / 2) ? (dragElemCoords.width / 2) : event.pageX > document.documentElement.clientWidth - (dragElemCoords.width / 2) ? document.documentElement.clientWidth - (dragElemCoords.width / 2) : event.pageX;
      let yEdge = event.pageY < (dragElemCoords.height / 2) ? (dragElemCoords.height / 2) : event.pageY;
      let scrollDown = event.y + dragElemCoords.height / 2 >= document.documentElement.clientHeight && event.pageY < document.documentElement.offsetHeight - (dragElemCoords.height / 2);
      let scrollUp = event.y <= dragElemCoords.height / 2 && document.documentElement.scrollTop > 0

      // Scroll up and down
      if(scrollDown) {
        moveAt(xEdge, yEdge, dragElem);
        window.scrollBy(0, 15);
      } else if(scrollUp) {
        moveAt(xEdge, yEdge, dragElem);
        window.scrollBy(0, -15);
      } else if(event.pageY > document.documentElement.offsetHeight - (dragElemCoords.height / 2)) {
        dragElem.scrollIntoView(false);
        moveAt(xEdge, document.documentElement.offsetHeight - (dragElemCoords.height / 2), dragElem);
      } else if(event.pageY <= dragElemCoords.height / 2) {
        dragElem.scrollIntoView(top);
        moveAt(xEdge, dragElemCoords.y < 0 ? yEdge - Math.abs(dragElemCoords.y) : yEdge, dragElem);
      } else {
        moveAt(xEdge, yEdge, dragElem);
      }

      document.onmouseup = function(event) {
        document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = null;
      }
    }
  }

  function moveAt(pageX, pageY, elem) {
    elem.style.left = pageX - (elem.getBoundingClientRect().width / 2) + 'px';
    elem.style.top = pageY - (elem.getBoundingClientRect().height / 2) + 'px';
  }
};

document.ondragstart = function() {
  return false;
}