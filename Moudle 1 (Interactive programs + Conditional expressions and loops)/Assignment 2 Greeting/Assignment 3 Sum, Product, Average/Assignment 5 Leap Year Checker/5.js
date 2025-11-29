'use strict';

const button = document.querySelector('#check-btn');
const target = document.querySelector('#target');

button.addEventListener('click', function() {
    const year = parseInt(document.querySelector('#year-input').value);

    if (!isNaN(year)) {
        // Logic: Divisible by 4 AND (NOT divisible by 100 OR divisible by 400)
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            target.innerHTML = `${year} is a leap year.`;
            target.style.color = 'green';
        } else {  // <--- THIS BRACKET WAS MISSING
            target.innerHTML = `${year} is not a leap year.`;
            target.style.color = 'red';
        }
    } else {
        target.innerHTML = 'Please enter a valid year number.';
    }
});