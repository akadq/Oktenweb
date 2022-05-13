// const btn = document.querySelector('button')
// const lbl = document.querySelector('#name')
//
// function random(number) {
//     return Math.floor(Math.random() * (number+1));
// }
//
// // btn.addEventListener('click', () => {
// //     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
// //     document.body.style.backgroundColor = rndCol;
// // });
//
// // btn.onclick = () => {
// //     let rndCol;
// //     rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
// //     document.body.style.backgroundColor = rndCol;
// // }
//
// function chngBg() {
//     let rndCol;
//     rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
// }
//
// function logi() {
//     console.log('Hey there');
// }
//
// function texting() {
//     console.log(lbl.value);
// }
//
// lbl.addEventListener('keydown', event => console.log(event.key));
// btn.addEventListener('mousemove', chngBg);
// btn.addEventListener('mousemove', logi);

// const output = document.querySelector('#output');
// function handleClick(e) {
//     output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }
// const container = document.querySelector('#container');
// container.addEventListener('click', handleClick);

function random(number) {
    return Math.floor(Math.random()*number);
}

function bgChange() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}
const container = document.querySelector('#container');
container.addEventListener('click', event => event.target.style.backgroundColor = bgChange());
