// Дано некоторое число: 12345
// Переверните его: 54321

let sum = 12345;

const getSum = (n) => console.log(
    n
        .split("")
        .reverse()
        .map(item => Number(item)));

getSum(sum)
