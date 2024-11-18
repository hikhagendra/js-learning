function f(a) {
    console.log(a);
}

function throttle(func, ms) {
    let lastCall = null;
    let timerId;

    return function(x) {
        if(!lastCall) {
            func.call(this, x);
            lastCall = Date.now();
        } else {
            if((Date.now() - lastCall) >= ms) {
                setTimeout(() => func.call(this, x), ms);
                lastCall = Date.now();
            } else {
                clearTimeout(timerId);
                timerId = setTimeout(() => func.call(this, x), ms);
                lastCall = Date.now();
            }
        }
    }
}

let f1000 = throttle(f, 1000);

f1000(1);
setTimeout( () => f1000(2), 1000);
f1000(3);
f1000(4);
f1000(5);
f1000(6);