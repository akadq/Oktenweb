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

// let nubmers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
// // let unshift = nubmers.unshift("ttt");
// let modif = 0;
//
// // debugger;
// let newNumb = nubmers.map(val => {
//         return val + '';
//     }
// );
// console.log(newNumb);

let users = [
    {
        name: "Petya",
        age: 21,
        status: true
    },
    {
        name: "Vasya",
        age: 25,
        status: false
    },
    {
        name: "Olya",
        age: 18,
        status: false
    },
    {
        name: "Vika",
        age: 32,
        status: true
    },
    {
        name: "Taras",
        age: 42,
        status: false
    },
    {
        name: "Max",
        age: 35,
        status: true
    },
    {
        name: "Ostap",
        age: 55,
        status: true,
        getFullName: function funcs() {
            console.log(this);
        }
    }];

// function User(spec) {
//     this.userName = "Dima";
//     this.age = 43;
//     this.special = spec;
//     this.greet = function (msg) {
//         return `${msg} my name is ${this.userName}`
//     };
// }
//
// let user1 = new User();
// // console.log(user1);
//
// let user2 = new User("byker");
// user2.userName = "Vova";
// console.log(user2.greet("Hello"));

// class UserN {
//     constructor(userPane, age) {
//         this.username = userPane;
//         this.age = age;
//     }
//     greet() {
//         return 'hello ' + this.username;
//     }
// }
//
// class UserP extends UserN {
//     constructor(name, age, spec) {
//         super(name, age);
//         this.spec = spec
//     }
//     greet() {
//         return 'hello ' + this.username + ' ' + this.spec;
//     }
// }
//
// let user3 = new UserN("Vasko", 34);
// let user4 = new UserP("Petro", 22, "Proger");
// console.log(user3);
// console.log(user4.greet());

// function filterArray(array, checkout) {
//     let filtered = [];
//     for (const filteredElement of array) {
//         let result = checkout(filteredElement);
//         if (result) {
//             filtered.push(filteredElement);
//         }
//     }
//     return filtered;
// }
//
// console.log(filterArray(users, (item) => item.status === false));