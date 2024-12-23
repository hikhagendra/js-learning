let ball = document.getElementById('ball');

ball.style.left = (ball.offsetParent.scrollWidth / 2) - (ball.clientWidth / 2) + 'px';
ball.style.top = (ball.offsetParent.scrollHeight / 2) - (ball.clientHeight / 2) + 'px';
