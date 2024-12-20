document.body.insertAdjacentHTML('afterbegin', '<div class="timer"><span class="hr">hr</span>:<span class="min">mm</span>:<span class="sec">ss</span></div>');

let timerId;

function clockStart() {
    if(!timerId) {
        timerId = setInterval(update, 1000);
    }

    update();
}

function clockStop() {
    clearInterval(timerId);
}

function update() {
    let d = new Date();

    document.querySelector('.hr').textContent = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();

    document.querySelector('.min').textContent = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();

    document.querySelector('.sec').textContent = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
}