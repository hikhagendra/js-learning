let slider = document.getElementById('slider');
let thumb = document.getElementById('thumb');

thumb.addEventListener('pointerdown', function(event) {
  event.preventDefault();
  thumb.setPointerCapture(event.pointerId);

  let sliderCoords = slider.getBoundingClientRect();
  let thumbCoords = thumb.getBoundingClientRect();
  let shiftX = event.clientX - thumbCoords.left;

  moveAt(event.clientX, event);

  function moveAt(pageX, event) {
    if(event.clientX < sliderCoords.left) {
      pageX = sliderCoords.left + shiftX;
    } else if(event.clientX > sliderCoords.left + sliderCoords.width - thumbCoords.width) {
      pageX = sliderCoords.left + sliderCoords.width - thumbCoords.width + shiftX;
    } else {
      pageX = event.clientX;
    }

    console.log(pageX);

    thumb.style.left = pageX - sliderCoords.left - shiftX + 'px';
  }

  thumb.addEventListener('pointermove', onMouseMove);

  function onMouseMove(event) {
    moveAt(event.clientX, event);

    thumb.onmouseup = thumb.onmouseup = function() {
      thumb.removeEventListener('pointermove', onMouseMove);
      thumb.onmouseup = thumb.onmouseup = null;
    };
  }
});