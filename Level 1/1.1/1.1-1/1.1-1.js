// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

let num = -3;

const getNum = (n) => n >= 0 ? console.log("Положительное") : console.log("Отрицательно");

getNum(num)