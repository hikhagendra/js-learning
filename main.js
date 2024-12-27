let container = document.getElementById('container')

container.addEventListener('click', function(event) {
    let remove = event.target.classList.contains('remove-button');

    if(remove) {
        event.target.closest('.pane').remove();
    }
});