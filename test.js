let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// Iterative solution
// function printList(list) {
//     let temp = list;
//     let values = [];

//     while(temp) {
//         values.push(temp.value);
//         temp = temp.next;
//     }

//     for(let i = values.length - 1; i >= 0; i--) {
//         console.log(values[i]);
//     }
// }

// Recursive solution
function printList(list) {
    if(list.next) {
        printList(list.next);
    }

    console.log(list.value);
}

printList(list);