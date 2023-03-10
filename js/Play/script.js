// let str = ' dirty string   ';
//
// console.log('hello world'.length);
// console.log('hello world'.toUpperCase());
// str = str.replaceAll(' ', '');
// console.log(str);
//
// function stringToArray(strng) {
//     return strng.split(' ');
// }
//
// let strng = 'Ревуть воли як ясла повні';
// console.log(stringToArray(strng));

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
//
// const newarr = arr.map(x => x.toString());
// console.log(newarr);

function sortNums(nums, direction){
    return direction === "ascending" ? nums.sort((a, b) => a - b)
        : direction === "descending" ? nums.sort((a, b) => b - a)
        : 'Error';
}

let nums = [11,21,3];
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]