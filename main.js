let house = document.getElementById('house');
let tooltipElem;

house.addEventListener('mouseover', function(event) {
    let toolElem = event.target.closest('[data-tooltip]');
    
    if(!toolElem) return;

    tooltipElem = showToolTip(toolElem);
});

house.addEventListener('mouseout', function(event) {
    tooltipElem.remove();
});

function showToolTip(elem) {
    let content = elem.dataset.tooltip;

    // Create tooltip element
    let tooltip = document.createElement('span');
    tooltip.innerHTML = content;
    tooltip.classList.add('tooltip');
    elem.append(tooltip);

    // Get Element and Tooltip coordinates
    let toolTipCoords = tooltip.getBoundingClientRect();
    let elemCoords = elem.getBoundingClientRect();

    // Tooltip Positioning
    let leftPos = 0;
    let topPos = 0;

    if((elemCoords.left + (elemCoords.width / 2)) < (toolTipCoords.width / 2)) {
        leftPos = elemCoords.left;
    } else {
        leftPos = elemCoords.left + ((elemCoords.width - toolTipCoords.width)/2);
    }

    if((elemCoords.top - 5) < toolTipCoords.height) {
        topPos = elemCoords.top + elemCoords.height + 5;
    } else {
        topPos = elemCoords.top - toolTipCoords.height - 5;
    }

    tooltip.style.left = leftPos + 'px';
    tooltip.style.top = topPos + 'px';

    return tooltip;
}
