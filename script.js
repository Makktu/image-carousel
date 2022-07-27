'use strict';

let currentImage = 4;

let imageArray = [
    'banana.jpg',
    'hiddenplane.jpg',
    'lightbulb.jpg',
    'pencils.jpg',
    'pentops.jpg',
    'rose.jpg',
    'tv.jpg',
];

const imageSpace = document.querySelector('.image-holder');

imageSpace.innerHTML = `<img src='./img/${imageArray[currentImage]}'>`;

const leftArrow = document.querySelector('.left-arrow');

leftArrow.addEventListener('click', () => {
    if ((currentImage = -1)) currentImage = 6;
    imageSpace.innerHTML = `<img src='./img/${imageArray[currentImage]}'>`;
    currentImage--;
});

const rightArrow = document.querySelector('.right-arrow');

rightArrow.addEventListener('click', () => {
    if (currentImage == 7) {
        currentImage = 0;
    }

    imageSpace.innerHTML = `<img src='./img/${imageArray[currentImage]}'>`;

    currentImage++;
});
