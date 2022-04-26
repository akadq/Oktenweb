let currentValue = "HW1";
let arrElements = ['One', 'Two', 'Three', 'Four'];


function handleClick(myRadio) {
    // console.log('New value: ' + myRadio.value);
    currentValue = myRadio.value;
    switch (currentValue) {
        case "HW1": {
            let result = square(5, 10);
            // console.log(result);
            document.getElementById("task").innerHTML = (`створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б: ${result}`);
            break;
        }
        case "HW2": {
            result = circle(20);
            document.getElementById("task").innerHTML = (`створити функцію яка обчислює та повертає площу кола з радіусом r: ${result}`);
            break;
        }
        case "HW3": {
            result = cylinder(8, 7);
            document.getElementById("task").innerHTML = (`створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r: ${result}`);
            break;
        }
        case "HW4": {
            arrayEach(arrElements);
            break;
        }
        case "HW5": {
            paragraph("Text for Paragraph");
            break;
        }
    }
}

function square(a, b) {
    return a * b;
}

function circle(radius) {
    return 3.14 * (radius * radius);
}

function cylinder(h, radius) {
    return (2 * (3.14 * radius * (h + radius)));
}

function arrayEach(arr) {
    document.write('створити функцію яка приймає масив та виводить кожен його елемент');
    document.write('<ul>');
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
}

function paragraph(paragh) {
    document.write('<p>створити функцію яка створює параграф з текстом. Текст задати через аргумент</p>');
    document.write(`<p>${paragh}</p>`);
}