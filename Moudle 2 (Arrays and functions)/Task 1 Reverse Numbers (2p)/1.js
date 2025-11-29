'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('#btn');

    if (button) {
        button.addEventListener('click', function() {
            const numbers = [];

            // 1. Ask for 5 numbers
            for (let i = 0; i < 5; i++) {
                let input = prompt(`Enter number ${i + 1}:`);
                numbers.push(Number(input));
            }

            console.log('--- Results (Reverse Order) ---');
            // 2. Print them backwards
            for (let i = numbers.length - 1; i >= 0; i--) {
                console.log(numbers[i]);
            }

            alert("Check the Console (F12) for the results!");
        });
    }
});