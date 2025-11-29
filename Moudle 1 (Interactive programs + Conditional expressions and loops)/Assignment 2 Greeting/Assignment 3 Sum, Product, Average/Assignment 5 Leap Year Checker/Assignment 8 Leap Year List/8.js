'use strict';

console.log("Assignment 8 JS Loaded!");

const button = document.querySelector('#list-btn');
const list = document.querySelector('#year-list');

if (!button) {
    console.error("Error: Could not find button with id 'list-btn'");
}

button.addEventListener('click', function() {
    console.log("Button clicked!");
    const startInput = document.querySelector('#start-year');
    const endInput = document.querySelector('#end-year');

    const start = parseInt(startInput.value);
    const end = parseInt(endInput.value);

    console.log(`Checking years from ${start} to ${end}`);

    // Clear the existing list before adding new items
    list.innerHTML = '';

    if (!isNaN(start) && !isNaN(end) && start <= end) {
        let found = false;
        for (let year = start; year <= end; year++) {
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                // Create a new list item for the leap year
                const li = document.createElement('li');
                li.textContent = year;
                list.appendChild(li);
                found = true;
            }
        }

        if (!found) {
            const li = document.createElement('li');
            li.textContent = "No leap years found in this interval.";
            list.appendChild(li);
        }
    } else {
        alert('Please enter valid years (Start year must be smaller than End year).');
    }
});