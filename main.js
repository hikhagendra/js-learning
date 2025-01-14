let triggerPrompt = document.getElementById('show-prompt');
let modal = document.getElementById('prompt-form-container');

function showPrompt(html, callback) {
  function closePrompt(value) {
    modal.hidden = true;
    field.value = '';
    field.blur();
    firstElem.blur();
    lastElem.blur();
    callback(value);
    document.body.style.overflow = '';
    document.onkeydown = null;
  }

  // Show the modal
  document.body.style.overflow = 'hidden';
  modal.hidden = false;

  // Variables initialization
  let form = document.getElementById('prompt-form');
  let msgBar = document.getElementById('prompt-message');
  let field = form.elements.text;
  let cancel = form.elements.cancel;

  // Update content
  msgBar.innerHTML = html;

  // On submit
  form.onsubmit = function(event) {
    event.preventDefault();

    if(field.value == '') return false;

    closePrompt(field.value);
  };

  // On cancel
  cancel.onclick = function() {
    closePrompt(null);
  };

  // On key presses
  document.onkeydown = function(event) {
    if(event.key == 'Escape') {
      closePrompt(null);
    }
  };

  let lastElem = form.elements[form.elements.length - 1];
  let firstElem = form.elements[0];

  lastElem.onkeydown = function(e) {
    if(e.key == 'Tab' && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = function(e) {
    if(e.key == 'Tab' && e.shiftKey) {
      console.log('Now');
      lastElem.focus();
      return false;
    }
  };

  // Set focus
  field.focus();
}

triggerPrompt.onclick = function() {
  showPrompt("Welcome to <br>modal world :)", function(value) {
    alert('You entered: ' + value);
  });
};