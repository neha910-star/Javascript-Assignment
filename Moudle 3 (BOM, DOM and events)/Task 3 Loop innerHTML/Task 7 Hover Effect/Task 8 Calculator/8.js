'use strict';

function calculate() {
    // 1. Get the HTML elements
    const n1 = parseFloat(document.querySelector('#num1').value);
    const n2 = parseFloat(document.querySelector('#num2').value);
    const op = document.querySelector('#operation').value;
    const resCalc = document.querySelector('#result');
    let val;

    // 2. Check if numbers are valid
    if(isNaN(n1) || isNaN(n2)) {
        resCalc.textContent = "Please enter valid numbers";
        return;
    }

    // 3. Do the math
    switch(op) {
        case 'add': val = n1 + n2; break;
        case 'sub': val = n1 - n2; break;
        case 'multi': val = n1 * n2; break;
        case 'div': val = n1 / n2; break;
    }

    // 4. Show the result
    resCalc.textContent = `Result: ${val}`;
}