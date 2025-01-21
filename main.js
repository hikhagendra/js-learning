let area = document.getElementById('area');
let clear = document.getElementById('clear');

area.value = localStorage.getItem('areaValue');

area.addEventListener('input', function() {
    localStorage.setItem('areaValue', area.value);
});

clear.addEventListener('click', function() {
    area.value = '';
    localStorage.removeItem('areaValue');
});