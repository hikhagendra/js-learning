// Interative solution
// function fib(n) {
//     let fibs = [1, 1];

//     for(let i = 1; i < n; i++) {
//         fibs.push(fibs[i] + fibs[i - 1]);
//     }

//     return fibs[n - 1];
// }

// Recursive solution
function fib(n) {
    if(n > 1) return fib(n-2) + fib(n-1);

    return n;
}

let start = Date.now();
console.log(fib(7))
let end = Date.now();
console.log(`Time taken: ${end - start}ms`);