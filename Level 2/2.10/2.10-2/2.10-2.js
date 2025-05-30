// #2 / 10.2 : Дано число. Получите первую четную цифру с конца этого числа.

let isNumber = 1432435;

function getNum(number) {

    let splitNum = String(number).split('').reverse().map((element) => {
        return Number(element);
    }).filter((element) => element % 2 === 0)[0];

    console.log(splitNum);
}

getNum(isNumber);