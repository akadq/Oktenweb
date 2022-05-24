// // Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// const id = document.createElement('div');
// id.setAttribute('id', 'text')
// id.style.background = "silver";
// id.style.transition = "all 10s ease-out";
// id.style.width = "400px";
// id.style.height = "400px";
// document.body.appendChild(id);
// id.addEventListener('click',() => id.style.display = "none");

// //створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const inputElement = document.createElement("input");
// const button = document.createElement("button");
// const form = document.createElement("form");
//
// inputElement.placeholder = 'Your age';
// button.innerHTML = "Check";
// button.type = "submit";
//
// form.appendChild(inputElement);
// form.appendChild(button);
// document.body.appendChild(form);
//
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (+inputElement.value < 18) {
//         alert('Age under 18');
//     }
// })


// //створити 2 форми по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм. Кнопка повинна лежати за межами форм (Щоб ьуникнути перезавантаження сторінки) Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const form1 = document.createElement("form");
// const inputElement1 = document.createElement("input");
// const inputElement11 = document.createElement("input");
// form1.name = "form1";
// inputElement1.name = "input1";
// inputElement11.name = "input11";
// inputElement1.type = "text";
// inputElement11.type = "text";
//
// const form2 = document.createElement("form");
// const inputElement2 = document.createElement("input");
// const inputElement22 = document.createElement("input");
// form2.name = "form2";
// inputElement2.name = "input2";
// inputElement22.name = "input22";
//
// const button = document.createElement("button");
//
// button.type = "submit";
// button.innerHTML = "Log values";
// button.style.width = "300px";
//
// form1.appendChild(inputElement1);
// form1.appendChild(inputElement11);
// form2.appendChild(inputElement2);
// form2.appendChild(inputElement22);
//
// document.body.appendChild(form1);
// document.body.appendChild(form2);
// document.body.appendChild(button);
//
// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(form1.input1.value);
//     console.log(form1.input11.value);
//     console.log(form2.input2.value);
//     console.log(form2.input22.value);
// })

//Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк. При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом. (Додатковачастина для завдання)

const rows = document.createElement("input");
const columns = document.createElement("input");
const inputText = document.createElement("input");
const button = document.createElement("button");
const form = document.createElement("form");
const containerForm = document.createElement('div');

containerForm.classList.add('container');

form.name = 'form1';
columns.name = 'columnsName';
rows.name = 'rowsName';
inputText.name = 'inpText';
button.innerText = 'Fill...';
rows.placeholder = 'Rows';
columns.placeholder = 'Columns';
inputText.placeholder = 'Text';
columns.type = 'number';
rows.type = 'number';
inputText.type = 'text';
button.style.width = '100px';

form.appendChild(rows);
form.appendChild(columns);
form.appendChild(inputText);
form.appendChild(button);

containerForm.appendChild(form);

document.body.appendChild(containerForm);

function fill(rowsNumb, columnNumb, text) {
    for (let i = 0; i < rowsNumb; i++) {
        const divRow = document.createElement('div');
        divRow.setAttribute('class', 'row');
        for (let j = 0; j < columnNumb; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            cell.innerText = text;
            divRow.appendChild(cell);
        }
        document.body.appendChild(divRow);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (document.getElementsByClassName('row')) {
        for (const textElement of document.getElementsByClassName('row')) {
            textElement.innerHTML = '';
        }
    }
    const rowsVal = form1.rowsName.value;
    const colVal = form1.columnsName.value;
    const textVal = form1.inpText.value;
    fill(rowsVal, colVal, textVal);
})