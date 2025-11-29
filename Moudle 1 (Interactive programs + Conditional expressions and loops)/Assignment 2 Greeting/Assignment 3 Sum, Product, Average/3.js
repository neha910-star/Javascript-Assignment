'use strict';

const button = document.querySelector('#calc-btn');
const target = document.querySelector('#target');

button.addEventListener('click', function() {
    // Get values and convert to integers
    const n1 = parseInt(document.querySelector('#num1').value);
    const n2 = parseInt(document.querySelector('#num2').value);
    const n3 = parseInt(document.querySelector('#num3').value);

    // Check if inputs are valid numbers
    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
        const sum = n1 + n2 + n3;
        const product = n1 * n2 * n3;
        const average = sum / 3;

        // Use backticks for template literals to make formatting easier
        target.innerHTML = `
            Sum: ${sum}<br>
            Product: ${product}<br>
            Average: ${average.toFixed(2)}
        `;
    } else {
        target.innerHTML = 'Please enter valid integers in all fields.';
    }
});