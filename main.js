let content = document.getElementById('contents');

content.addEventListener('click', function(event) {
    let target = event.target.closest('a');

    if(!target) return;

    let ask = confirm(`Leave for ${target.href}`);

    if(!ask) event.preventDefault();
});