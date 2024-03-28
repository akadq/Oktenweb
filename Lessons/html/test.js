let users = [
    {skills: ['html', 'js', 'mongodb'], name: 'Vasa', age: 28, status: true},
    {skills: ['html', 'mysql', 'mongodb'], name: 'Petya', age: 32, status: true},
    {skills: ['html', 'js', 'mongodb'], name: 'Olya', age: 35, status: false}
];


// const output = document.getElementsByClassName("output")

// function printOnPage() {
//     let htmlContent = '<ul>';
//     for (let user of users) {
//         htmlContent += `<li> ${user.name}</li>`;
//     }
//     htmlContent += '</ul>'
//     otput[0].innerHTML = htmlContent;
// }

const output = document.getElementsByClassName("output");
function printOnPage() {
const input1 = document.getElementById('counter').value;
    // debugger;
    let form = document.getElementById('formOne');
    let listHTML = '<ul>' ;
    for (let user of users) {
        listHTML += `<li>${user.name}</li> ${input1}`;
    }
    listHTML += '</ul>';
    output[0].innerHTML = listHTML;
}

// let foo =  (a, b) => a + b;
// console.log(foo(5,7));

let user = {name: 'Vaski',
greeting: function (msg) {
   return `${msg} my name is ${this.name}`
}};

console.log(user.greeting('hi'));

// let usrt = users.sort((a, b) => {
//     console.log(a.name);
//     console.log(b.name);
// })
// console.log(usrt);

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10