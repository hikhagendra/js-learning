function f(x) {
    console.log(x);
}

function delay(func, delay) {
    return function() {
        setTimeout(() => func.apply(null, arguments), delay);
    };
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000('test1000');
f1500('test1500');