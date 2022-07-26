'use strict';

let currentImage = 3;

let imageArray = [
    'banana.jpg',
    'hiddenplane.jpg',
    'lightbulb.jpg',
    'pencils.jpg',
    'pentops.jpg',
    'rose.jpg',
    'tv.jpg',
];

function sortBreadcrumbs(currentImage) {
    console.log(currentImage);
    breadcrumbs.forEach((crumb) => {
        crumb.classList.remove('active');
    });
    breadcrumbs[currentImage].classList.add('active');
}

let btnTimer;

const imageSpace = document.querySelector('.image-holder');

const breadcrumbs = document.querySelectorAll('.bc');

breadcrumbs.forEach((crumb) => {
    crumb.addEventListener('click', (e) => {
        currentImage = +e.target.classList[1];
        imageSpace.innerHTML = `<img src='./img/${imageArray[currentImage]}'>`;
        sortBreadcrumbs(currentImage);
        clearTimeout(btnTimer);

        startTimer();
    });
});

imageSpace.innerHTML = `<img src='./img/${imageArray[currentImage]}'>`;

const leftArrow = document.querySelector('.left-arrow');

leftArrow.addEventListener('click', () => {
    clearTimeout(btnTimer);
    if (currentImage !== 0) currentImage--;

    imageSpace.innerHTML = `<img src='./img/${imageArray[currentImage]}'>`;

    if (currentImage == -1) {
        currentImage = 0;
    }

    sortBreadcrumbs(currentImage);
    startTimer();
});

const rightArrow = document.querySelector('.right-arrow');

rightArrow.addEventListener('click', () => {
    clearTimeout(btnTimer);
    if (currentImage !== 6) currentImage++;

    imageSpace.innerHTML = `<img src='./img/${imageArray[currentImage]}'>`;

    sortBreadcrumbs(currentImage);
    startTimer();
});

function notPressed() {
    currentImage++;
    if (currentImage > imageArray.length - 1) currentImage = 0;
    imageSpace.innerHTML = `<img src='./img/${imageArray[currentImage]}'>`;
    sortBreadcrumbs(currentImage);
    startTimer();
}

function startTimer() {
    btnTimer = window.setTimeout(notPressed, 5000);
}

startTimer();
