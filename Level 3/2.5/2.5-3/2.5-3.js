// #3 / 5.3 : Дан массив с числами.
// Оставьте в нем только те числа, которые содержат цифру ноль.

let isArr = [100, 2, 31, 444, 5, 30, 23, 50, 44]

const getNumZero = (arr) => arr.filter((element) => {
    if (String(element).includes('0')) return Number(element)
})

console.log(getNumZero(isArr))