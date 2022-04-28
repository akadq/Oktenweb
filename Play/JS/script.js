// const arr = [
//     {
//         one: 1,
//         two: 2,
//         three: 3
//     },
//     {
//         one: 7,
//         two: 3,
//         three: 5
//     },
//     {
//         one: 9,
//         two: 2,
//         three: 8
//     }
// ];

// let filter = arr.filter((arri) => arri.two === 2)
// console.log(filter, arr);

// function calc(action, a, b) {
//     return action(a, b);
// }
//
// console.log(calc((a, b) => a + b, 10, 20));

let nubmers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
// let unshift = nubmers.unshift("ttt");
let modif = 0;

// debugger;
let newNumb = nubmers.map(val => {
        return val + '';
    }
);
console.log(newNumb);
