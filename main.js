let screen = document.getElementById('largeImg');
let thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', function(event) {
    if(event.target.tagName != 'IMG') return;

    let lgImg = event.target.closest('a');

    screen.setAttribute('src', lgImg.getAttribute('href'));
    screen.setAttribute('alt', lgImg.getAttribute('title'));

    event.preventDefault();
});