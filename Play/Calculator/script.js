const display = document.getElementById('display');
const input = document.getElementById('calc');
const field = document.getElementById('inp');

input.addEventListener('submit', (e) => {
        e.preventDefault();
        // console.log(field.value);
        parse(field.value);
        field.value = null;
    }
);

function parse(text) {
    const sign = '';
    console.log(text.indexOf());
};

function calculation(number1, number2, sign) {

}