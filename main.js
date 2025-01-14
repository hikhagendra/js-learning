let mouse = document.getElementById('mouse');
let mouseCoords = null;

mouse.addEventListener('click', function(event) {
  this.tabIndex = 0;

  // Change position
  this.style.position = 'fixed';
  this.style.left = this.getBoundingClientRect().left + 'px';
  this.style.top = this.getBoundingClientRect().top + 'px';

  // Add move event
  this.addEventListener('keydown', moveMouse);
});

function moveMouse(event) {
  mouseCoords = this.getBoundingClientRect();

  switch(event.key) {
    case 'ArrowRight':
      this.style.left = mouseCoords.left + mouseCoords.width + 'px';
      break;

    case 'ArrowLeft':
      this.style.left = mouseCoords.left - mouseCoords.width + 'px';
      break;

    case 'ArrowUp':
      this.style.top = mouseCoords.top - mouseCoords.height + 'px';
      break;

    case 'ArrowDown':
      this.style.top = mouseCoords.top + mouseCoords.height + 'px';
      break;
  }
}