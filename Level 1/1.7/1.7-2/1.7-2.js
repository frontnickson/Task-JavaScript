// Получите массив цифр этого числа. 12345

let sum = 12345;

const getSum = (n) => console.log(String(n).split("").map(item => Number(item)));

getSum(sum)