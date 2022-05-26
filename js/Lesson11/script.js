// -створити форму з інпутами для name та age.
    // При відправці форми записати об'єкт в localstorage
let form = document.getElementById('root');
let arrJSON;
root.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(form.name.value);
    localStorage.setItem(form.name.value +'', form.age.value);
});