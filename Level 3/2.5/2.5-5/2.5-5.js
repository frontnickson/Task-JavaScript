// #3 / 5.5 : Дано некоторое число: 35142
// Отсортируйте цифры этого числа.
// В нашем случае должно получится следующее: 12345


let isNum = 35142;

const getSortNum = (arr) => String(arr).split('').sort((a, b) => Number(a) - Number(b)).join("")

console.log(getSortNum(isNum))