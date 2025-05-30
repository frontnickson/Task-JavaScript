// Дано число. Выведите количество цифр в этом числе.

let num = 123456789;

const getNum = (e) => console.log(Number(String(e).split("").length));

getNum(num)