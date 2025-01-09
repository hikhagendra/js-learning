document.addEventListener('keydown', function(event) {
  event.preventDefault();
  console.log('Started repeating');
  if(event.repeat) {
    alert('Wait wait');
  }
})