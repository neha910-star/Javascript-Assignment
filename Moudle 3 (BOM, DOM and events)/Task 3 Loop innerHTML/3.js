'use strict';

// This runs automatically when the file loads
const names = ['John', 'Paul', 'Jones'];
const target = document.querySelector('#target');
let html = '';

// Loop through the names array
for (const name of names) {
    html += `<li>${name}</li>`;
}

// Update the HTML
target.innerHTML = html;