let data = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },
    
    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
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
            console.log(item);
    
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