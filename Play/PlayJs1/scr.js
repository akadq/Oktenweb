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

// function random(number) {
//     return Math.floor(Math.random()*number);
// }
//
// function bgChange() {
//     return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
// }
// const container = document.querySelector('#container');
// container.addEventListener('click', event => {event.target.style.backgroundColor = bgChange();
//     console.log(event.target)});

// const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
// const para = document.querySelector('p');
// const input = document.querySelector('input');
// const btn = document.querySelector('button');
//
// btn.addEventListener('click', () => {
//     const searchName = input.value.toLowerCase();
//     input.value = '';
//     input.focus();
//     para.textContent = '';
//     for (const contact of contacts) {
//         const splitContact = contact.split(':');
//         if (splitContact[0].toLowerCase() === searchName) {
//             para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
//             break;
//         }
//     }
//     if (para.textContent === '') {
//         para.textContent = 'Contact not found.';
//     }
// });

// const para = document.querySelector('p');
// const input = document.querySelector('input');
// const btn = document.querySelector('button');
//
// btn.addEventListener('click', () => {
//     para.textContent = 'Output: ';
//     const num = input.value;
//     input.value = '';
//     input.focus();
//     for (let i = 1; i <= num; i++) {
//         let sqRoot = Math.sqrt(i);
//         console.log(i,' ', Math.floor(sqRoot),' ', sqRoot);
//         if (Math.floor(sqRoot) !== sqRoot) {
//             continue;
//         }
//         para.textContent += `${i} `;
//     }
// });

// const person = {
//     name: ['Bob', 'Smith'],
//     age: 32,
//     bio: function() {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     },
//     introduceSelf: function() {
//         console.log(`Hi! I'm ${this.name[0]}.`);
//     }
// };
//
// person.introduceSelf()
// person['eyes'] = 'hazel';
// person.func = () => console.log('func')
// person.func();

// const personPrototype = {
//     greet() {
//         console.log(`hello, my name is ${this.name}!`);
//     }
// }
//
// function Person(name) {
//     this.name = name;
// }
//
// Person.prototype = personPrototype;
// Person.prototype.constructor = Person;
//
// const reuben = new Person('Reuben');
// console.log(Object.hasOwn(reuben, 'name'));

// class Car {
//     model;
//     year;
//     constructor(model, year) {
//         this.model = model;
//         this.year = year;
//     }
// }
//
// class Boat extends Car {
//     size;
//     #color;
//     constructor(size) {
//         super();
//         this.size = size;
//     }
// }
//
// let merc = new Car('s-class', 2022);
// let marine = new Boat('Big');
// marine.model = 'Suzi'
// marine.color = 'red';
//
// console.log(merc);
// console.log(marine);
//
// const l = 5;
// const b = 5;
//
// const fn = () => {merc.model + ' ' + marine.size};
// btn.textContent = 'done';

// const width = 10;
// const height = 8;
//
// function draw(width, height) {
//     let starix = '*';
//     let space = ' ';
//         console.log(starix.repeat(width));
//             for (let i = 0; i < height; i++) {
//                 console.log(starix + space.repeat(width - 2) + starix);
//             }
//         console.log(starix.repeat(width));
// }
//
// draw(width, height);

function multiplyTable() {
    let count = 0;
     while (count < 9) {
        count++;
         console.log(count + ' ' + (count * 2).toString() + ' ' + (count * 3).toString() + ' ' + (count * 4).toString() + ' ' + (count * 5).toString() + ' ' + (count * 6).toString() + ' ' + (count * 7).toString() + ' ' + (count * 8).toString() + ' ' + (count * 9).toString());
     }
}

multiplyTable();