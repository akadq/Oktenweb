//створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNumber(...threeNumbers) {
//     let result = threeNumbers[0];
//     for (const threeNumber of threeNumbers) {
//         if (threeNumber < result) {
//             result = threeNumber;
//         }
//     }
//     return result;
// }
//
// console.log(minNumber(5, 2, 7));

//створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maxNumber(...threeNumbers) {
//     let result = threeNumbers[0];
//     for (const threeNumber of threeNumbers) {
//         if (threeNumber > result) {
//             result = threeNumber;
//         }
//     }
//     return result;
// }
// console.log(maxNumber(5, 2, 7));

// створити функцію яка повертає найбільше число з масиву
// const arrayMain = [6, 8, 13]
// function maxArray(array) {
//     let result = array[0];
//     for (const currentArray of array) {
//         if (currentArray > result) {
//             result = currentArray;
//         }
//     }
//     return result;
// }
// console.log(maxArray(arrayMain));

// створити функцію яка повертає найменьше число з масиву
// const arrayMain = [6, 8, 13]
// function maxArray(array) {
//     let result = array[0];
//     for (const currentArray of array) {
//         if (currentArray < result) {
//             result = currentArray;
//         }
//     }
//     return result;
// }
// console.log(maxArray(arrayMain));

// Дано натуральное число n. Выведите все числа от 1 до n.
// const natural = 9;
// function naturalF(digit) {
//     for (let i = 1; i <= digit; i++) {
//         console.log(i);
//     }
// }
//
// naturalF(natural)

// функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1" EXAMPLE: foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ] foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ] foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// arrayMain = [6, 8, 13, 17];
// function swichArr(arr, index) {
//     let temp = 0;
//     let p = 0;
//     for (const i in arr) {
//         if (i == index && index < arr.length - 1) {
//             p = Number(i);
//             temp = arr[p]
//             arr[p] = arr[p + 1];
//             arr[p + 1] = temp;
//         }
//     }
//     return arr;
// }
// console.log(swichArr(arrayMain, 2));

// Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень. Двожина масиву від 2 до 100 EXAMPLE: [1,0,6,0,3] => [1,6,3,0,0] [0,1,2,3,4] => [1,2,3,4,0] [0,0,1,0] => [1,0,0,0]
arrayMain = [6, 0, 8, 13, 0, 17, 20, 0, 98];

function zerosToEnd(arr) {
    let newArr = [];
    let zerosCount = 0;
    //filling new array with non-zero values and counting zeros to add further
    for (const arrElement of arr) {
        if (arrElement !== 0) {
            newArr.push(arrElement);
        } else {
            zerosCount++;
        }
    }
    // adding zeros to the ant of array
    for (let i = 0; i < zerosCount; i++) {
        newArr.push(0);
    }
    return newArr;
}
console.log(zerosToEnd(arrayMain));