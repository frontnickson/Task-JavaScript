// Дано число. Выведите в консоль первую цифру этого числа.

let num = 1234567890;

const getNum = (e) => console.log(Number(String(e).split("")[0]));

getNum(num)