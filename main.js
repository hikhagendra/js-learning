function showNotification(options) {
    let div = document.createElement('div');

    // Add Classes
    div.classList.add('notification');
    div.classList.add(options.className);

    // Apply CSS
    div.style.top = options.top + 'px';
    div.style.right = options.right + 'px';

    // Add inner text
    div.innerHTML = options.html;

    // Push the notification to the page
    document.body.prepend(div);

    // Disappear after 1.5 seconds
    setTimeout(() => div.remove(), 1500);
}

showNotification({
    top: 10,
    right: 10,
    html: "Hello!",
    className: "welcome"
});