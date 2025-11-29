'use strict';

const form = document.querySelector('#source');
const target = document.querySelector('#target');

form.addEventListener('submit', function(evt) {
    // Stop the form from reloading the page
    evt.preventDefault();

    const fname = document.querySelector('input[name="firstname"]').value;
    const lname = document.querySelector('input[name="lastname"]').value;

    target.textContent = `Your name is ${fname} ${lname}`;
});