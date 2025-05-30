// Дано число. Выведите в консоль последнюю цифру этого числа.

let num = 1234567890;

const getNum = (e) => console.log(Number(String(e).split("").reverse()[0]));

getNum(num)