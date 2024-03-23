let users = [
    {name: 'nick', age: 34, status: true},
    {name: 'vas', age: 20, status: false},
    {name: 'olala', age: 19, status: false},
    {name: 'petro', age: 45, status: true},
    {name: 'zack', age: 37, status: true}
]

let {name, age, status} = users[0];

console.log(name, age, status);

// function select(status) {
//     return users.filter(value => value.status === status);
//
// }

// for (const input of inputs) {

//     // input.checked === true ? console.log(select(true)) : console.log('');

//     input.onclick = function () {
//         let status = input.value === 'true';
//         let list = [];
//         select(status).forEach(element => list.push('name: ' + element.name + " age: " + element.age + "\n"));
//         usersSpan.innerText = list;
//     }
// }

const statusSpan = document.getElementById('status');
let statusInput = document.querySelector('input[type=checkbox]');
let rangeInput = document.querySelector('input[type=range]');
const ageSpan = document.getElementById("age");
ageSpan.innerText = rangeInput.value;
let filterResults;

function buildUI(users) {
    usersSpan.innerText = '';
    let number = 0;
    for (const user of users) {
        number++;
        let div = document.createElement('div');
        div.innerText = number + '. ' + user.name + ' ' + user.status;
        usersSpan.appendChild(div);
    }
}


statusInput.onclick = function () {
    let ischeck = this.checked;
    if (ischeck) {
        filterResults = users.filter(val => val.status);
    } else {
        filterResults = users.filter(val => !val.status);
    }
    console.log(filterResults);
};

rangeInput.onchange = function () {
    ageSpan.innerText = this.value;
};

// for (const input of statusInput) {
//     input.onclick = function () {
//         let statusik = this.value === 't';
//         if (statusik) {
//             buildUI(users.filter(value => value.status));
//         } else {
//             buildUI(users.filter(value => !value.status));
//         }
//     }
// }
