// Elements
let field = document.getElementById('field');
let ball = document.getElementById('ball');

// Additional data extracted
let ballCoords = ball.getBoundingClientRect();
let edgeLimit = {
    top: field.offsetTop + field.clientTop + (ballCoords.height/2),
    bottom: field.offsetTop + field.clientTop + field.clientHeight - (ballCoords.height/2),
    left: field.offsetLeft + field.clientLeft + (ballCoords.width/2),
    right: field.offsetLeft + field.clientLeft + field.clientWidth - (ballCoords.width/2)
}

// Initial position
ball.style.top = ballCoords.top + 'px';
ball.style.left = ballCoords.left + 'px';

// Event trigger
field.addEventListener('click', function(e) {
    if(e.clientY <= edgeLimit.top) {
        ball.style.top = edgeLimit.top - (ballCoords.height/2) + 'px';
    } else if(e.clientY >= edgeLimit.bottom) {
        ball.style.top = edgeLimit.bottom - (ballCoords.height/2) + 'px';
    } else {
        ball.style.top = e.clientY - (ballCoords.height/2) + 'px';
    }

    if(e.clientX <= edgeLimit.left) {
        ball.style.left = edgeLimit.left - (ballCoords.width/2) + 'px';
    } else if(e.clientX >= edgeLimit.right) {
        ball.style.left = edgeLimit.right - (ballCoords.width/2) + 'px';
    } else {
        ball.style.left = e.clientX - (ballCoords.width/2) + 'px';
    }
});