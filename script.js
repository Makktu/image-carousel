'use strict';

function selectRandomImages(amountOfImagesRequired) {
    let arrayOfImages = [];

    for (let a = 0; a < amountOfImagesRequired; a++) {
        arrayOfImages[a] = `<img src="https://source.unsplash.com/random">`;
    }

    return arrayOfImages;
}

const imageSpace = document.querySelector('.image-holder');

const leftArrow = document.querySelector('.left-arrow');
leftArrow.addEventListener('click', () => {
    imageSpace.innerHTML = '<img src="https://source.unsplash.com/random" />';
});

const rightArrow = document.querySelector('.right-arrow');
rightArrow.addEventListener('click', () => {
    imageSpace.innerHTML = '<img src="https://source.unsplash.com/random" />';
});
