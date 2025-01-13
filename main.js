let view = document.getElementById('view');
let editor;

view.addEventListener('click', function(event) {
  editorSwitch('edit', event.target);

  editor.addEventListener('focusout', function(event) {
    editorSwitch('view', null)
  });
});

window.addEventListener('keydown', function(event) {
  if(event.key == 'Enter') editorSwitch('view', null);
});

function editorSwitch(mode, elem) {
  switch(mode) {
    case 'edit':
      editor = document.createElement('textarea');
      editor.classList.add('edit');
      editor.value = elem.innerHTML;
      view.replaceWith(editor);
      editor.focus();
      break;
    
    case 'view':
      editor.blur();
      view.innerHTML = editor.value;
      editor.replaceWith(view);
      break;
  }
}