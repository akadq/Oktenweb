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

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foow',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((psoj) => console.log(psoj));