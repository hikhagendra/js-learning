let list = document.getElementById('ul');

// Disable text selection
list.onmousedown = function() { return false; }

list.addEventListener('click', function(event) {
    if(event.target.tagName != 'LI') return;

    if(event.ctrlKey || event.metaKey) {
        event.target.classList.toggle('selected');
    } else {
        disSelectOld();
        event.target.classList.add('selected');
    }
});

function disSelectOld() {
    for(let item of list.querySelectorAll('li')) {
        item.classList.remove('selected');
    }
}