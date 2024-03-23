let currentValue = "HW1";
const arrElements = ['One', 'Two', 'Three', 'Four'];
const objectsToSend = [
    {
        id: "Green",
        name: "Nick",
        age: "20"
    },
    {
        id: "Grey",
        name: "Serg",
        age: "34"
    },
    {
        id: "Blue",
        name: "Olya",
        age: "41"
    }

];

twoObj = [
    {
        id: "Green",
        name: "Nick",
        age: "20"
    },
    {
        id: "Grey",
        name: "Serg",
        age: "34"
    }
];

let a = 5;
let b = 15;
let c = 13;
let d = 56;
let e = 98;
let f = 42;

limit = 200;

const arrayOfNumbers = [5, 10, 7, 4, 15, 18];

let result;

function handleClick(myRadio) {
    // console.log('New value: ' + myRadio.value);
    currentValue = myRadio.value;
    switch (currentValue) {
        case "HW1": {
            result = square(5, 10);
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
        case "HW6": {
            threeLi("Text for three Lises");
            break;
        }
        case "HW7": {
            threeLiControl("Text for numberless Lises", 13);
            break;
        }
        case "HW8": {
            arraayList(objectsToSend);
            break;
        }
        case "HW9": {
            result = minNumber(arrayOfNumbers);
            document.getElementById("task").innerHTML = (`створити функцію яка повертає найменьше число з масиву: ${result}`);
            break;
        }
        case "HW10": {
            result = sumOfNumbers(arrayOfNumbers);
            document.getElementById("task").innerHTML = (`створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13: ${result}`);
            break;
        }
        case "HW15": {
            result = calc(averedgeNum, arrayOfNumbers);
            document.getElementById("task").innerHTML = (`створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.: ${result}`);
            break;
        }
        case "HW25": {
            result = minMax(randomNum, a, b, c, d, e, f);
            document.getElementById("task").innerHTML = (`створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено): ${result}`);
            break;
        }
        case "HW35": {
            result = randomArrow(randomFunc);
            document.getElementById("task").innerHTML = (`створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в діапазоні від 0 до 100: ${result}`);
            break;
        }
        case "HW45": {
            result = randomArrow(randomFunc, limit);
            document.getElementById("task").innerHTML = (`створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit: ${result}`);
            break;
        }
        case "HW55": {
            result = reverseArr(arrayReverse, arrayOfNumbers);
            document.getElementById("task").innerHTML = (`Функція приймає масив та робить з нього новий масив в зворотньому порядку: ${result}`);
            break;
        }
        case "HW65": {
            result = reversed(twoObjReverseFunc, twoObj);
            document.getElementById("task").innerHTML = (`створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями: ${result[0].id}, ${result[0].name}, ${result[0].age}; ${result[1].id}, ${result[1].name}, ${result[1].age}`);
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

function threeLi(lises) {
    document.write('створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий');
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${lises}</li>`);
    }
    document.write('</ul>');
}

function threeLiControl(lises, quant) {
    document.write('створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл');
    document.write('<ul>');
    for (let i = 0; i < quant; i++) {
        document.write(`<li>${lises}</li>`);
    }
    document.write('</ul>');
}

function arraayList(arrayElements) {
    document.write('створити функцію яка приймає масив об\'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об\'єкту окремий блок.');
    for (const arrayElement of arrayElements) {
        document.write('<div>');
        for (const arrayElementKey in arrayElement) {
            document.write(`<h3>${arrayElementKey}: ${arrayElement[arrayElementKey]}</h3>`);
        }
        document.write('</div>');
        document.write('<br>');
    }
}

function minNumber(arrayWithNumbers) {
    let minNumber = 0;
    if (arrayWithNumbers) {
        minNumber = arrayWithNumbers[0];
    }
    for (let arrayWithNumber of arrayWithNumbers) {
        if (arrayWithNumber < minNumber) {
            minNumber = arrayWithNumber;
        }
    }
    return minNumber;
}

function sumOfNumbers(arrayWithNumbers) {
    let result = 0;
    for (let arrayWithNumber of arrayWithNumbers) {
        result += arrayWithNumber;
    }
    return result;
}

function averedgeNum(arrayWithNumbers) {
    let result = 0;
    for (let arrayWithNumber of arrayWithNumbers) {
        result += arrayWithNumber;
    }
    return (result / arrayWithNumbers.length);
}

function randomNum(...numbers) {
    let high = 0;
    let low = numbers[0];
    for (const number of numbers) {
        if (number > high) {
            high = number;
        } else if (number < low) {
            low = number;
        }
    }
    console.log(high);
    return low;
}

function randomFunc(...limit) {
    // debugger;
    let randArr = Math.round(Math.random() * 100);
    if (+limit[0] > 0) {
        randArr = Math.round(Math.random() * +limit[0]);
    }
    return randArr;
}

function arrayReverse(arrayToRev) {
    // debugger;
    reversedArray = []
    for (let i = arrayToRev.length - 1; i >= 0; i--) {
        reversedArray.push(arrayToRev[i]);
    }
    return reversedArray;
}

function twoObjReverseFunc(twoObjP) {
    // debugger;
    let objReverse = [{}];
    objReverse[0] = twoObjP[1];
    objReverse[1] = twoObjP[0];
    return objReverse;
}

let calc = (callback, array) => callback(array);
let minMax = (callback, ...numbers) => callback(...numbers);
let randomArrow = (callback, ...limit) => callback(limit);
let reverseArr = (callback, array) => callback(array);
let reversed = (calback, array) => calback(array);