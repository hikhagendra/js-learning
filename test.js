let list = document.getElementById('list');
let totalChild = 0;
let text = '';

function scanner(list) {
    for(let i = 0; i < list.children.length; i++) {
        if(list.children[i].tagName == 'LI') {
            // Fetch the value of LI and count its children
            text = list.children[i].childNodes[0].data;

            if(list.children[i].childNodes.length != 1) {
                childCounter(list.children[i], 0)
            } else {
                totalChild = 0;
            }

            // Display the values in alert
            alert(text.trim() + ': ' + totalChild);

            // If the LI has child UL then re-run the loop
            if(list.children[i].childNodes.length != 1) {
                totalChild = 0;
                scanner(list.children[i].childNodes[1]);
            }
        }
    }
}

function childCounter(elem) {
    totalChild += elem.childNodes[1].children.length;

    for(let i = 0; i < elem.childNodes[1].children.length; i++) {
        if(elem.childNodes[1].children[i].childNodes.length != 1) {
            childCounter(elem.childNodes[1].children[i]);
        }
    }
}

scanner(list);

