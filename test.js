let data = {
    "Animals": {
        "Mammals": {
            "Cows": {},
            "Donkeys": {},
            "Dogs": {},
            "Tigers": {}
        },
        "Other": {
            "Snakes": {},
            "Birds": {},
            "Lizards": {}
        }
    },
    
    "Fishes": {
        "Aquarium": {
            "Guppy": {},
            "Angelfish": {}
        },
        "Sea": {
            "Sea trout": {},
        }
    }
};

let container = document.getElementById('container');
createTree(container, data);

function createTree(box, data) {
    let rootUl = document.createElement('ul');

    function innerCreator(innerBox, data) {
        for(let item in data) {
            let li = document.createElement('li');
            li.textContent = item;
            innerBox.append(li);
    
            let noChild = true;

            for(let child in data[item]) {
                noChild = false;
            }

            if(!noChild) {
                let childUl = document.createElement('ul');
                li.append(childUl);
                innerCreator(childUl, data[item]);
            }
        }
    }

    innerCreator(rootUl, data);

    box.append(rootUl);
}

function childCounter(elem) {
    let allChild = elem.getElementsByTagName('li');
    
    for(let element of allChild) {
        if(element.getElementsByTagName('li').length !== 0) {
            element.childNodes[0].data += ` [${element.getElementsByTagName('li').length}]`;
        }
    }
}

childCounter(container);