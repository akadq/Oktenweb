// // -створити форму з інпутами для name та age.
//     // При відправці форми записати об'єкт в localstorage
// let form = document.getElementById('root');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // console.log(form.name.value);
//     localStorage.setItem(form.name.value, form.age.value);
// });


//створити форму з інпутами для model,type та volume автівки. при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let form2 = document.getElementById('auto');
let arrJSON;
form2.addEventListener('submit', (e) => {
        e.preventDefault();
    // console.log('car', [form2.model.value, form2.type.value, form2.volume.value]);
    localStorage.setItem('car', [form2.model.value, form2.type.value, form2.volume.value]);
    arrJSON = localStorage.getItem('car');
    console.log(arrJSON);
    });


