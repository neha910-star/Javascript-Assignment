'use strict';

function even(arr) {
    const evenArr = [];
    for (const num of arr) {
        if (num % 2 === 0) {
            evenArr.push(num);
        }
    }
    return evenArr;
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('#btn');

    if (button) {
        button.addEventListener('click', function() {
            const originalArray = [2, 7, 4, 9, 20, 13];
            const newArray = even(originalArray);

            console.log('Original Array:', originalArray);
            console.log('Even Numbers Only:', newArray);

            alert("Check the Console (F12) to see the even numbers.");
        });
    }
});