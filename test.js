function work(a, b) {
    console.log( a + b ); // work is an arbitrary function or method
}

function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    };
    wrapper.calls = [];

    return wrapper;
}

work = spy(work);

work(1, 2);
work(4, 5);
work(3, 4);

for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}