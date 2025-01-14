let table = document.getElementById('bagua-table');
let editor = null;
let cell = null;
let ok = null;
let cancel = null;

table.addEventListener('click', editTrigger);

function editTrigger(event) {
  if(event.target.tagName == 'TD') {
    cell = event.target;
    editCell(event.target);
  }
}

function editCell(cell) {
  // Disable event
  table.removeEventListener('click', editTrigger);

  // Initialize editor
  let cellCoords = cell.getBoundingClientRect();
  editor = document.createElement('textarea');

  // Match geometry
  editor.style.width = cellCoords.width + 'px';
  editor.style.height = cellCoords.height - 4 + 'px';
  editor.classList.add('editor');

  // Add content and replace
  editor.value = cell.innerHTML;
  cell.replaceWith(editor);
  editor.focus();

  // Set focus to the end
  let length = editor.value.length;
  editor.setSelectionRange(length, length);

  // Add buttons
  ok = document.createElement('button');
  cancel = document.createElement('button');

  // Add classes
  ok.classList.add('ok');
  cancel.classList.add('cancel');

  // Add content
  ok.textContent = 'OK';
  cancel.textContent = 'Cancel';

  // Append buttons
  editor.after(ok);
  editor.after(cancel);

  // Position buttons in the editor
  ok.style.top = cancel.style.top = cellCoords.top + cellCoords.height + 'px';
  ok.style.left = cellCoords.left + 'px'
  cancel.style.left = cellCoords.left + ok.getBoundingClientRect().width + 'px'

  // Events on buttons
  ok.addEventListener('click', saveUpdatedData);
  cancel.addEventListener('click', closeEditor);
}

function saveUpdatedData() {
  ok.remove();
  cancel.remove();
  editor.blur();
  cell.innerHTML = editor.value;
  editor.replaceWith(cell);

  // Make other cells clickable
  table.addEventListener('click', editTrigger);
}

function closeEditor() {
  ok.remove();
  cancel.remove();
  editor.blur();
  editor.replaceWith(cell);

  // Make other cells clickable
  table.addEventListener('click', editTrigger);
}