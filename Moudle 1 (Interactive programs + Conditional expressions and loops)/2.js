'use strict';

const button = document.querySelector('#action-btn');
const target = document.querySelector('#target');

button.addEventListener('click', function() {
    // Get the value from the input field
    const name = document.querySelector('#name-input').value;

    // Check if name is not empty
    if (name) {
        target.innerHTML = 'Hello, ' + name + '!';
    } else {
        target.innerHTML = 'Please enter your name above.';
    }
});