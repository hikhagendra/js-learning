/**
 * Positions elem relative to anchor as said in position.
 *
 * @param {Node} anchor     Anchor element for positioning
 * @param {string} position One of: top/right/bottom
 * @param {Node} elem       Element to position
 *
 * Both elements: elem and anchor must be in the document
*/
function positionAt(anchor, position, elem) {
    let ancCoords = anchor.getBoundingClientRect();
    let elemCoords = elem.getBoundingClientRect();

    switch (position) {
        case 'top':
            elem.style.top = ancCoords.top - elemCoords.height + 'px';
            elem.style.left = ancCoords.left + 'px';
            break;
    
        case 'right':
            elem.style.top = ancCoords.top + 'px';
            elem.style.left = ancCoords.left + ancCoords.width + 'px';
            break;

        case 'bottom':
            elem.style.top = ancCoords.top + ancCoords.height + 'px';
            elem.style.left = ancCoords.left + 'px';
            break;
        
        case 'top-in':
            elem.style.top = ancCoords.top + 'px';
            elem.style.left = ancCoords.left + 'px';
            break;

        case 'bottom-in':
            elem.style.top = ancCoords.top + ancCoords.height - elemCoords.height + 'px';
            elem.style.left = ancCoords.left + 'px';
            break;

        case 'right-in':
            elem.style.top = ancCoords.top + 'px';
            elem.style.left = ancCoords.left + ancCoords.width - elemCoords.width + 'px';

    }
}

/**
 * Shows a note with the given html at the given position
 * relative to the anchor element.
 */
function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");
showNote(blockquote, "bottom-in", "note bottom-in");
showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "right-in", "note right-in");