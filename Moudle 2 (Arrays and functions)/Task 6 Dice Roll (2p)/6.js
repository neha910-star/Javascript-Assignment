'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('#btn');
    const list = document.querySelector('#dice-list');

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    if (button) {
        button.addEventListener('click', function() {
            list.innerHTML = ''; // Clear previous results
            let result = 0;

            // Keep rolling until we get a 6
            while (result !== 6) {
                result = rollDice();
                const item = document.createElement('li');
                item.textContent = `Rolled: ${result}`;
                list.appendChild(item);
            }
        });
    }
});