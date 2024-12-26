let messages = document.getElementsByClassName('pane');

// Add the close button to all messages
for(let msg of messages) {
    // Create a close button
    let closeBtn = document.createElement('button');

    // Add button class and content
    closeBtn.classList.add('remove-button');
    closeBtn.textContent = '[x]';

    // Append the button to message box
    msg.append(closeBtn);

    // Get the message and button's coordinates
    let msgCoords = msg.getBoundingClientRect();
    let btnCoords = closeBtn.getBoundingClientRect();
    
    // Position button to the top right of the message box
    closeBtn.style.top = '0px';
    closeBtn.style.left = msgCoords.width - btnCoords.width - 10 + 'px';
}

let closeBtns = document.getElementsByClassName('remove-button');

for(let btn of closeBtns) {
    btn.addEventListener('click', function(e) {
        e.currentTarget.parentNode.remove();
    });
}