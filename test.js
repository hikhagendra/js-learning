// Interative solution
// function sumTo(n) {
//     let sum = 0;
//     for(let i = n; i >= 1; i--) {
//         sum += i;
//     }

//     return sum;
// }

// Recursive solution
// function sumTo(n) {
//     if(n > 1) {
//         return n + sumTo(n - 1);
//     } else {
//         return n;
//     }
// }

// Arithmetic Progression formula
function sumTo(n) {
    return (n*(1 + n))/2;
}

let start = Date.now();
console.log(sumTo(100000));
let end = Date.now();
console.log(`Time taken: ${end - start}ms`);