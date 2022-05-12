// //=================================* Task 1 *=================================
// //Напишіть код, котрий : -- отримує текст з параграфа з id "content" -- отримує текст з блоку з id "rules" -- замініть текст параграфа з id 'content' на будь-який інший -- замініть текст параграфа з id 'rules' на будь-який інший -- змініть кожному елементу колір фону на червоний -- змініть кожному елементу колір тексту на синій -- отримати весь список класів елемента з id=rules і вивести їх в console.log -- поміняти колір тексту у всіх елементів fc_rules на червоний
//
// const idCont = document.getElementById('content');
// const idRules = document.getElementById('rules');
//
// idCont.innerText = 'new Content 1'
// idRules.innerText = 'new Content 2'
//
// idCont.style.backgroundColor = "red";
// idRules.style.backgroundColor = "red";
//
// idCont.style.backgroundColor = "blue";
// idRules.style.backgroundColor = "blue";
//
// for (const idRule of idRules.classList) {
//     console.log(idRule);
// }
//
// const fcRules = document.body.getElementsByClassName('fc_rules');
//
// for (const fcRule of fcRules) {
//     fcRule.style.color = 'red';
// }

//=================================* Task 2 *=================================
//Взяти файл template_2.html та працювати в ньому


document.getElementById('main_header').className = 'March2022';
document.body.getElementsByTagName('ul')[0].style.width = '400px'

const linkList = document.body.getElementsByClassName('linkList');

for (const linkListElement of linkList) {
    linkListElement.style.width = '50%';
}

const innerList2 =  document.body.getElementsByClassName('listElement2')[0].innerText;
console.log(innerList2);

const lises = document.body.getElementsByTagName('li');
for (const lise of lises) {
    lise.style.backgroundColor = 'grey';
}

const aTags = document.body.getElementsByTagName('a');
for (const aTag of aTags) {
    aTag.className = 'anchor';
}

for (const aTag of aTags) {
    if (aTag.innerText === 'link3') aTag.style.fontSize = '40px';
}

for (const aTag of aTags) {
    aTag.className = 'element_'.concat(aTag.innerText);
}

const subHeader = document.body.getElementsByClassName('sub-header');
// for (const subHeaderElement of subHeader) {
//     subHeaderElement.style.backgroundColor = prompt('Color?', 'red');
// }

// for (const subHeaderElement of subHeader) {
//     if (subHeaderElement.innerText === 'content 2 segment') subHeaderElement.style.backgroundColor = prompt('Color?', 'red');
// }

document.body.getElementsByClassName('content_1')[0].innerText = 'dovilny text';
const text2 = document.body.getElementsByClassName('text2')

for (const taxt2Element of text2) {
    taxt2Element.innerText = 'March2022';
}