'use strict';

const trigger = document.querySelector('#trigger');
const targetImg = document.querySelector('#target');

trigger.addEventListener('mouseover', () => {
    targetImg.src = 'https://placehold.co/200x100/black/white?text=Pic+B';
});

trigger.addEventListener('mouseout', () => {
    targetImg.src = 'https://placehold.co/200x100?text=Pic+A';
});