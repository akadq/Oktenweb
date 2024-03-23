const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
    './images/pic1.jpg',
    './images/pic2.jpg',
    './images/pic3.jpg',
    './images/pic4.jpg',
    './images/pic5.jpg',
];

/* Looping through images */
for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.setAttribute('src', image);
    })
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', e => {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else if (btn.getAttribute('class') === 'light') {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}});