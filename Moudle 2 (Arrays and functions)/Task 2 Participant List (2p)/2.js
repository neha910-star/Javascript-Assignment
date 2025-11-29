'use strict';

// Wait for the page to load
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('#btn');
    const list = document.querySelector('#participant-list');

    // Check if button exists
    if (button) {
        button.addEventListener('click', function() {
            // 1. Ask for number of participants
            const countStr = prompt("How many participants?");
            const count = parseInt(countStr);
            const names = [];

            // 2. Check if the number is valid
            if (!isNaN(count) && count > 0) {
                // 3. Ask for each name
                for (let i = 0; i < count; i++) {
                    let name = prompt(`Name of participant ${i + 1}:`);
                    // If they entered a name, add it. If empty, add "Unknown"
                    names.push(name ? name : "Unknown");
                }

                // 4. Sort names alphabetically
                names.sort();

                // 5. Clear the old list and add new names
                list.innerHTML = '';
                names.forEach(name => {
                    const li = document.createElement('li');
                    li.textContent = name;
                    list.appendChild(li);
                });
            } else {
                alert("Please enter a valid number greater than 0.");
            }
        });
    } else {
        console.error("Button with id='btn' was not found.");
    }
});