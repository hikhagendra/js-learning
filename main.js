let toggle = document.getElementById('toggle');
let menu = document.getElementById('menu');

toggle.addEventListener('click', function() {
    toggle.classList.toggle('close');
    menu.classList.toggle('hide');
});