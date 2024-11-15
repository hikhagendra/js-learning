function f(x) {
    console.log(x);
}

function debounce(f, ms) {
    let lastArg;
    setTimeout(() => f(lastArg), ms);

    function wrapper(x) {
        f.call(this, x);
        lastArg = x;
    };

    return wrapper;
}

f = debounce(f, 2000);

f('a');
setTimeout(() => f('b'), 200);
setTimeout(() => f('c'), 500);