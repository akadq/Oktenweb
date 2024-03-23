// //створити блок,
// // додати йому класи wrap, collapse, alpha, beta
// // додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // додати цей блок в body.
// // клонувати його повністю, та додати клон в body.
// const div1 = document.createElement('div');
// div1.classList.add('wrap','collapse', 'alpha', 'beta');
// div1.style.background = 'yellow';
// document.body.append(div1);
//
// let div2 = div1.cloneNode(true);
// document.body.append(div2)

// //Є масив: ['Main','Products','About us','Contacts'] Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu Завдання робити через цикли.
// let arr = ['Main', 'Products', 'About us', 'Contacts'];
// const menu = document.body.getElementsByClassName('menu')[0];
// for (const string of arr) {
//     let li = document.createElement('li')
//     li.innerText = string;
//     menu.appendChild(li);
// }

// //Є масив let coursesAndDurationArray = [ {title: 'JavaScript Complex', monthDuration: 5}, {title: 'Java Complex', monthDuration: 6}, {title: 'Python Complex', monthDuration: 6}, {title: 'QA Complex', monthDuration: 4}, {title: 'FullStack', monthDuration: 7}, {title: 'Frontend', monthDuration: 4} ]; Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration Завдання робити через цикли.
let coursesAndDurationArray =
    [{title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}];
//
// for (const divElement of coursesAndDurationArray) {
//     let out = document.createElement('div')
//     out.innerText = `Title: ${divElement.title}, Duration: ${divElement.monthDuration}`;
//     document.body.append(out);
// }

// // За допомоги скріпта для кожного елементу масиву зробити в якому буде з title елементу,
// // та з monthDuration елементу. Завдання робити через цикли.
// // в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// // Завдання робити через цикли.
// for (const divElement of coursesAndDurationArray) {
//     let h1 = document.createElement('h1')
//     h1.classList.add('heading');
//     h1.innerText = `Title: ${divElement.title}`;
//     let p = document.createElement('p');
//     p.innerText = (`Duration: ${divElement.monthDuration}`);
//     document.body.append(h1);
//     document.body.append(p);
// }
