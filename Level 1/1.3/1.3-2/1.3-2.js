// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

let first = 15;
let second = 3;

const getNum = (f,s) => {

    let n = (f % 2 === 0) / s;
    
    n % 2 === 0 ? console.log("Делится") : console.log("Не делится");
}


getNum(first, second)