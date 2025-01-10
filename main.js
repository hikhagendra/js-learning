function runOnKeys(func, ...rest) {
  let args = rest;
  let trackedKeys = [];
  
  document.addEventListener('keydown', function(event) {
    if(!args.includes(event.code)) return;

    if(args.includes(event.code) && !trackedKeys.includes(event.code)) {
      trackedKeys.push(event.code);
    }

    if(trackedKeys.length == args.length) {
      func();
      trackedKeys = [];
    }

    document.onkeyup = function(event) {
      if(trackedKeys.includes(event.code)) {
        let pos = trackedKeys.findIndex(item => item == event.code);

        trackedKeys.splice(pos, 1);
      }
    }
  });
}

runOnKeys(
  () => alert('Hello!'),
  'KeyQ',
  'KeyW',
);