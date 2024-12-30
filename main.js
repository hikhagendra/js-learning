let grid = document.getElementById('grid');
let tHead = grid.querySelector('thead');
let tBody = grid.querySelector('tbody');

tHead.addEventListener('click', function(event) {
    let sortType = event.target.dataset.type;
    let headings = event.target.closest('tr').getElementsByTagName('th');
    let colNumber = 0;

    for(let i = 0; i < headings.length; i++) {
        if(headings[i] == event.target) {
            colNumber = i;
            break;
        }
    }
    
    new GridShort(tBody, sortType, colNumber);
});

class GridShort {
    constructor(grid, type, colNum) {
        this.rows = this.toArray(grid);
        this[type + 'Sort'](colNum);
    }

    numberSort(colNum) {
        // Sort the number column data
        this.rows.sort(function(a, b) {
            return a.children[colNum].firstChild.data - b.children[colNum].firstChild.data;
        });
        
        // Clean the table
        tBody.innerHTML = '';

        // Append the sorted rows
        this.rows.forEach(row => tBody.append(row));
    }

    stringSort(colNum) {
        // Sort the string column data
        this.rows.sort(function(a, b) {
            if(a.children[colNum].firstChild.data > b.children[colNum].firstChild.data) {
                return 1;
            }
            
            if(a.children[colNum].firstChild.data == b.children[colNum].firstChild.data) {
                return 0;
            }
            
            if(a.children[colNum].firstChild.data < b.children[colNum].firstChild.data) {
                return -1;
            }
        });
        
        // Clean the table
        tBody.innerHTML = '';

        // Append the sorted rows
        this.rows.forEach(row => tBody.append(row));
    }

    toArray(data) {
        let nodeCollection = data.getElementsByTagName('tr');
        let arrData = [];

        for(let node of nodeCollection) {
            arrData.push(node);
        }

        return arrData;
    }
}