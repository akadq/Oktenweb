// let str = ' dirty string   ';
//
// console.log('hello world'.length);
// console.log('hello world'.toUpperCase());
// str = str.replaceAll(' ', '');
// console.log(str);
//
// function stringToArray(strng) {
//     return strng.split(' ');
// }
//
// let strng = 'Ревуть воли як ясла повні';
// console.log(stringToArray(strng));

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
//
// const newarr = arr.map(x => x.toString());
// console.log(newarr);

// function sortNums(nums, direction){
//     return direction === 'ascending' ? nums.sort((a, b) => a - b)
//         : direction === 'descending' ? nums.sort((a, b) => b - a)
//             : 'Error';
// }
//
// let nums = [11,21,3];
// console.log(sortNums(nums, 'ascending')); // [3,11,21]
// console.log(sortNums(nums, 'descending')); // [21,11,3]


// nums.forEach(value => )

// function cardsCreate() {
//     // debugger;
//     let cards = [{}];
//     // let cardColors = [{color: "red"}, {color: "black"}];
//     // let cardSigns = [{sign: "spade"}, {sign: "diamond"}, {sign: "heart"}, {sign: "clubs"}];
//     // let cardValues = [{value: 6}, {value:7}, {value: 8}, {value: 9}, {value: 10}, {value: "ace"}, {value: "jack"}, {value: "queen"}, {value: "king"}];
//     let cardColors = ["red", "black"];
//     let cardSigns = ["spade", "diamond", "heart", "clubs"];
//     let cardValues = [6, 7, 8, 9, 10, "ace", "jack", "queen", "king"];
//     for (const color of cardColors) {
//         for (const sign of cardSigns) {
//             for (const value of cardValues) {
//                 if ((sign === "heart" || sign === "diamond") && color === "red") {
//                     cards.push({Suit: sign, Value: value, Color: color});
//                 } else if ((sign === "spade" || sign === "clubs") && color === "black") {
//                     cards.push({Suit: sign, Value: value, Color: color});
//                 }
//             }
//         }
//     }
//     return cards.slice(1);
// }
//
// let cardSuite = cardsCreate();

let numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];

// let red = numbers.reduce((accumulator, value) => {
//         if (value % 2 === 0) {
//             accumulator.even.push(value);
//         } else {
//             accumulator.odd.push(value);
//         }
//         return accumulator;
//     }, {even: [], odd:[]});
//
// let even = red.even;
// let odd = red.odd;
// console.log(even);
// console.log(odd);

// function Fev(age, genre) {
//     this.age = age;
//     this.genre = genre;
// }
//
// let user = new Fev(34, 'male');
//
// console.log(user.age);

// function explorer(htmlElement) {
//     console.log(htmlElement);
//     let children = htmlElement.children;
//     if (children.length !== 0) {
//         for (const child of children) {
//             explorer(child);
//         }
//     }
// }
//
// explorer(document.body);

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'foow',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((psoj) => console.log(psoj));

// const selectors = document.getElementById('somediv');
// selectors.addEventListener('click', function () {
//     console.log('clicked')
// });

// const intervalID = setInterval(function () {
//     console.log('done');}, 2000
//     );
// setTimeout(function () {clearInterval(intervalID);
// }, 10000);


// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     // .then(result => result.json())
//     .then(output => console.log(output));

// async function request1() {
//     try{
//         const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
//         const data = await response.json();
//         const json = JSON.stringify(data);
//         const parsed = JSON.parse(json);
//         console.log(parsed);
//     } catch (error) {
//         console.error(error);
//     }
// };


let str = 'somestring is good'

// const math = arr.push(5);
//
// arr.forEach(function (current, index, array) {
//     console.log(current, index);
// });

// const sum = arr.reduce(function (accumulator,currentValue,currentIndex,array) {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue;
// }, 7);
//
// console.log(sum);

// const sum = arr.join('-');
// console.log(sum);

// console.log(arr.filter(val => val % 2 === 0));

// console.log(typeof (arr + arr2));

// console.log(arr.slice(1, 3));
// console.log(arr.unshift(15), arr);
// console.log(arr.pop());

// arr.splice(1, 2, 22, 33);
//
// console.log(arr);
//
// const colors = ['red', 'green', 'blue', 'yellow'];
// arr.splice(1, 2, 'orange', 'purple');
// console.log(arr);

// console.log(str.substring(2, 5));

// console.log(Math.ceil((Math.random())*100));

// console.log(Date.now());


// const promises = [
//     fetch('https://jsonplaceholder.typicode.com/posts/1'),
//     fetch('https://jsonplaceholder.typicode.com/posts/2'),
//     fetch('https://jsonplaceholder.typicode.com/posts/3')
// ];
//
// Promise.all(promises)
//     // .then(resp => console.log(resp))
//     .then(responses => Promise.all(responses.map(response => response.json())))
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// localStorage.setItem('new', 'yes');
// console.log(localStorage.getItem('new'));

// function Person(name, age, skill) {
//     this.name = name;
//     this.age = age;
//     this.skill = skill;
//     this.addskill = function (skill) {
//         this.skill.push(skill);
//     }
// }
//
// Person.prototype.addMoney = function (amount) {
//     this.amount = amount;
// };
//
// let dude = new Person('Vasa', 22, ['worker']);
// dude.addskill('menedg');
// dude.addMoney(100);
//
// console.log(dude.skill[1], dude.amount);

// Array.prototype.print = function () {
//     console.log(this);
// }
// let arri = new Array(11, 22, 33);
// arri.print();

// function Human(name) {
//     this.name = name;
//     this.greeting = function (msg) {
//         console.log(`${msg} my name is ${this.name}`);
//     };
// }
//
// let human1 = new Human('vasa');
//
// let friend = {
//     name: 'kokos',
//     age: '123'
// };

// human1.greeting.call(friend, 'petya');
// human1.greeting.apply(friend, ['hello']);
// let greeetingcopy = human1.greeting.bind(friend);
// greeetingcopy('hello');

// let user = {name: 'vas', age: 32};
// let userCopy = Object.create(user);
// userCopy.surname = 'sheva';
// console.log(userCopy.hasOwnProperty('age'));
// console.log(userCopy.hasOwnProperty('surname'));

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// let user1 = new User('pet', 45);
//
// class Dog extends User{
//     constructor(name, age, call) {
//         super(name, age);
//         this.call = call;
//     }
// }
//
// let dogy = new Dog('geri', 56, 'boby');
//
// console.log(dogy)

//1679049183796
// let now = new Date(0);
// console.log(now);

// let name = 'vasa';
//
// let user = {
//     name,
//     logic(some) {
//         console.log(some)
//     }
// }

// function foo(name) {
//     try {
//         console.log(pond)
//     } catch (e) {
//         console.log(e)
//     }
//     console.log('end');
// }
//
// foo('hey');

// user.logic('hello');
// console.log(user.name);

// let mass = {key: 'str', wifi: {name: 'bi'}, share: 2, pre: 3};
//
// let deepCopy = JSON.parse(JSON.stringify(mass));
// console.log(deepCopy.wifi, deepCopy);

// const div = document.getElementsByClassName('somediv');
// for (const divElement of div) {
//     console.log(divElement);
// }

// let neo;
//
// setTimeout(() => {
//     let i = 0;
//     while ("some text") {
//         if (i++ === 5) {
//             neo = 'The One';
//         }
//     }
// }, 0);

// function f(arr = []) {
//     console.log(arr);
// }
//
// console.log("one two".split(' ')[1]);
// todo some stuff

// console.log(...document.forms.f1);

let arr = [1,2,3,5,6,7,8];

// function factorial(number) {
//     if (number === 0) {
//         return 1;
//     } else {
//         return number * factorial(number - 1);
//     }
// }
//
// console.log(factorial(4));

// function f(some) {
//     console.log(some)
// }
//
// let newarr = [];
// newarr.push(...arr);
// console.log(newarr);

let target = document.getElementsByClassName('quad')[0];
// console.log(target);
// target.onclick = function (omd) {
//     console.log(omd);
// }

// target.addEventListener('mousedown', e => {
//     this.addEventListener('mousemove', msv => console.log('moving'));
// });
// target.addEventListener('mouseup', e => console.log(2));
//
// let f1 = document.forms.f1;
//
// f1.onsubmit = function (e) {
//     e.preventDefault();
//     console.log(f1.user.value, 'yes yes');
// }