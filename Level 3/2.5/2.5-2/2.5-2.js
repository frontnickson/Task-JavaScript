// #3 / 5.2 : Дан массив с числами.
// Оставьте в нем только те числа, которые делятся на 5.

let isArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filterArr = (arr) => arr.filter((element) => element % 5 === 0)

console.log(filterArr(isArr))