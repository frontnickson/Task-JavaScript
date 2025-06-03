// #3 / 6.1 : Дан массив со числами.
// Удалите из него числа, состоящие более чем из трех цифр.

let isNum = [2333, 3233, 4, 5, 1234, 3, 72, 55]

const filterNum = (num) => num.filter((element) => String(element).split("").length <= 3)

console.log(filterNum(isNum))