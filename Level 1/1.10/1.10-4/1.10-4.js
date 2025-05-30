// Даны два массива:

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

// Слейте эти массивы в новый массив:
// [1, 2, 3, 4, 5, 6]

const getNum = (a1, a2, a3) => console.log(a1.concat(a2, a3));

getNum(arr1, arr2, arr3);