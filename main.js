document.onclick = function(e) {
    coords.innerHTML = e.clientX + ':' + e.clientY;
};

let field = document.getElementById('field');
let fieldCoords = field.getBoundingClientRect();
console.log(fieldCoords);

// Coordinates
let outerUpperLeft = `Outer upper-left: ${fieldCoords.left}, ${fieldCoords.top}`;

let outerBottomRight = `Outer bottom-right: ${fieldCoords.left + fieldCoords.width}, ${fieldCoords.top + fieldCoords.height}`;

let innerUpperLeft = `Inner upper-left: ${field.offsetLeft + field.clientLeft}, ${field.offsetTop + field.clientTop}`;

let innerBottomRight = `Inner bottom-right: ${field.offsetLeft + field.clientLeft + field.clientWidth}, ${field.offsetTop + field.clientTop + field.clientHeight}`;

// Log the coordinates
console.log(outerUpperLeft);
console.log(outerBottomRight);
console.log(innerUpperLeft);
console.log(innerBottomRight);