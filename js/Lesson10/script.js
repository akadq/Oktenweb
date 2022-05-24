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
