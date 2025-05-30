// #3 / 1.3 : Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так,
// чтобы длины массивов стали одинаковыми.

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];

const deleteArr = (arr1, arr2) => {
    return arr2.slice(0, arr1.length)
};

console.log(deleteArr(arr1, arr2))