let tree = document.getElementById('tree');
let lis = document.querySelectorAll('li');

for(let li of lis) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
}

tree.addEventListener('click', function(event) {
    let elem = event.target;

    if(elem.tagName !== 'SPAN') return;

    let li = elem.closest('li');
    let hasChildren = li.children.item(1);

    if(li && hasChildren) {
        li.children.item(1).toggleAttribute('hidden');
    }
});