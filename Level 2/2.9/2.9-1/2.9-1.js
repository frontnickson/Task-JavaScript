// #2 / 9.1 : Дано некоторое число: 123456 Найдите сумму пар цифр этого числа.
// В нашем случае имеется ввиду следующее: 12 + 34 + 56

let isNumber = 123456;

function getSum(num) {

    let splitNum = String(num).split('')

    let arrNum = [];

    for (let i = 0; i < splitNum.length; i += 2) {
        arrNum.push(Number(splitNum.slice(i, i + 2).join('')));
    }


    console.log(arrNum.reduce((a, b) => a + b));

}

getSum(isNumber);