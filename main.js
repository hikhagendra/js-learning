window.addEventListener('scroll', function() {
  if((document.documentElement.scrollHeight - (window.pageYOffset + document.documentElement.clientHeight)) <= 100) {
    insertDate(1);
  }
});

function insertDate(counter) {
  for(let i = 0; i < counter; i++) {
    let date = new Date();
    let p = document.createElement('p');
    p.textContent = `Date: ${date}`;

    document.body.append(p);
  }
}

insertDate(20);