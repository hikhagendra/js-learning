let tbody = document.getElementsByTagName('tbody');
let rows = tbody[0].getElementsByTagName('tr');

function orderByName() {
    let newOrder = [];

    for(let i = 0; i < rows.length; i++) {
        newOrder.push(rows[i]);
    }

    newOrder.sort(function(a, b) { 
        if(a.children[0].firstChild.data > b.children[0].firstChild.data) {
            return 1;
        }

        if(a.children[0].firstChild.data == b.children[0].firstChild.data) {
            return 0;
        }

        if(a.children[0].firstChild.data < b.children[0].firstChild.data) {
            return -1;
        }
    });

    tbody[0].innerHTML = '';

    for(let i = 0; i < newOrder.length; i++) {
        tbody[0].append(newOrder[i]);
    }
}

orderByName();