let slider = document.getElementById('slider');
let thumb = document.getElementById('thumb');

thumb.addEventListener('mousedown', function(event) {
  event.preventDefault();

  let sliderCoords = slider.getBoundingClientRect();
  let thumbCoords = thumb.getBoundingClientRect();
  let shiftX = event.clientX - thumbCoords.left;

  moveAt(event.clientX, event);

  function moveAt(pageX, event) {
    if(event.clientX < sliderCoords.left) {
      pageX = sliderCoords.left;
    } else if(event.clientX > sliderCoords.left + sliderCoords.width - thumbCoords.width) {
      pageX = sliderCoords.left + sliderCoords.width - thumbCoords.width;
    } else {
      pageX = event.clientX;
    }

    thumb.style.left = pageX - sliderCoords.left - shiftX + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  function onMouseMove(event) {
    moveAt(event.clientX, event);

    document.onmouseup = thumb.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      document.onmouseup = thumb.onmouseup = null;
    };
  }
});