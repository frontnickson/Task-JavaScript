// Дано некоторое число: 12345
// Найдите сумму цифр этого числа.

let sum = 12345;

const getSum = (n) => console.log(
    String(n)
        .split("")
        .map(item => Number(item))
        .reduce((acc, item) => acc + item)
);

getSum(sum)