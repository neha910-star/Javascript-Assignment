'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('#btn');

    if (button) {
        button.addEventListener('click', function() {
            const numbers = [];
            let input;

            // 1. Loop until user enters 0
            do {
                input = Number(prompt("Enter a number (0 to stop):"));
                if (input !== 0) {
                    numbers.push(input);
                }
            } while (input !== 0);

            // 2. Sort numbers from largest to smallest
            numbers.sort((a, b) => b - a);

            console.log('--- Results (Largest to Smallest) ---');
            numbers.forEach(num => {
                console.log(num);
            });

            alert("Check the Console (F12) for results!");
        });
    }
});