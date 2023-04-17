// const range = document.querySelector('input[type=range]');
// const age = document.getElementById('age');
// range.onchange = function () {
//     age.innerText = range.value;
//     };

let users = [
    {name: 'nick', age: 34, status: true},
    {name: 'vas', age: 20, status: false},
    {name: 'olala', age: 19, status: false},
    {name: 'petro', age: 45, status: true},
    {name: 'zack', age: 37, status: true}
]

let {name, age, status} = users[1];

console.log(document.querySelector('span[id=age]'));