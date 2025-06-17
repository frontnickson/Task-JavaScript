// #4 / 2.1 : Сделайте функцию, которая параметром будет принимать число
// и возвращать сумму его цифр

let isNum = 15

const getSum = (num) => {
    return String(num).split("").reduce((a, b) => Number(a) + Number(b));
}

console.log(getSum(isNum))