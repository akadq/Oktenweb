// Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов. document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// function cutString(str, n) {
//     // debugger;
//     let newStr = [];
//     for (let i = 0; i <= str.length; i += n) {
//         newStr += str.substring(i, i + n) + ',';
//     }
//     return newStr.slice(0, -1);
// }
//
// document.writeln(cutString('наслаждение', 3))


//Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів. let str = 'Каждый охотник желает знать'; document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
//
// function delete_characters(str, n) {
//     if (str) {
//         for (const strElement of str.split(" ")) {
//             if (strElement.length === n) {
//                 return strElement;
//             }
//         }
//     }
// }
//
// document.writeln(delete_characters(str, 6));


//Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр. let str = "HTML JavaScript PHP"; document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
//
// function insert_dash(str) {
//     return str.replaceAll(" ", "-").toUpperCase();
// }
//
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


// Дано список імен. let n1 = 'Harry..Potter' let n2 = 'Ron---Whisley' let n3 = 'Hermione__Granger' Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд let n1 = 'Harry Potter' let n2 = 'Ron Whisley' let n3 = 'Hermione Granger'
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// function validation(str) {
//     return str.replaceAll('.', ' ').replaceAll('-', ' ').replaceAll('_', ' ').split(/[\s,\t,\n]+/).join(' ');
// }
//
// console.log(validation(n1), validation(n2), validation(n3));

// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// function randArr() {
//     arr = []
//     for (let i = 0; i < 100; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// }

// console.log(randArr());

//створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// console.log(randArr().sort((a, b) => a - b));

//створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати його за допомоги filter, залишивши тільки парні числа (без 0!)
// console.log(randArr().filter(val => val % 2));


//Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = 'Каждый охотник желает знать';
//
// function firstCharUp(str) {
//     let newStr = "";
//     if (str) {
//         for (const strElement of str.split(" ")) {
//             newStr = newStr.concat(strElement[0].toUpperCase()).concat(strElement.slice(1)).concat(' ');
//         }
//     }
//     return newStr.slice(0, -1);
// }
//
// console.log(firstCharUp(str));


// Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення) Протестувати на значеннях someemail@gmail.com someeMAIL@gmail.com someeMAIL@i.ua some.email@gmail.com
// function eValidation(mails) {
//     let mail = '';
//     let message = [];
//     for (const current of mails) {
//         mail = current.toLowerCase();
// //          чи включає в себе @     чи є дані до знака @                                                     чи є '.' на відстані двох символів від @
//         if (mail.includes('@') && mail.slice(0, mail.indexOf('@')).length > 0 && mail.slice(mail.indexOf('@')).indexOf('.') - 2 > mail.slice(mail.indexOf('@')).indexOf('@')) {
//             message.push(mail.concat(' is valid'));
//         } else {
//             message.push(mail.concat(' is NOT valid'));
//         }
//     }
//     return message;
// }
//
// let emails = ['someemail@gmail.com', 'someeMAIL@gmail.com', 'someeMAIL@i.ua', 'some.email@gmail.com', '@gmail.com'];
// eValidation(emails).forEach(val => console.log(val));


//відсортувати масив в спадаючому порядку за кількістю елементів в полі modules
// let coursesArray = [{
//     title: 'JavaScript Complex',
//     monthDuration: 5,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
// }, {
//     title: 'Java Complex',
//     monthDuration: 6,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
// }, {
//     title: 'Python Complex',
//     monthDuration: 6,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
// }, {
//     title: 'QA Complex',
//     monthDuration: 4,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
// }, {
//     title: 'FullStack',
//     monthDuration: 7,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
// }, {
//     title: 'Frontend',
//     monthDuration: 4,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
// }];
//
// console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));


//Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str. let symb = "о", str = "Астрономия это наука о небесных объектах"; document.writeln(count(str, symb)) // 5
// function count(str, stringsearch) {
//     let count = 0;
//     for (const string of str.matchAll(stringsearch)) {
//         count++;
//     }
//     return count;
// }
//
// let symb = "о";
// let str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb));


//Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів. let str = "Сила тяжести приложена к центру масс тела"; document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// function cutString(str, n) {
//     str = str.split(' ').filter((val, index) => index < n);
//     return str.join(' ');
// }
//
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру';