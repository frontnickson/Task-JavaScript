// #4 / 5.4 : Сделайте функцию, которая параметрами будет принимать два числа
// и возвращать массив, заполненный целыми числами
// от минимального параметра до максимального.

let isFirstNum = 13;
let isSecondNum = 48;

function getArrNum(first, second) {

    let result = [];

    for (let i = first; i <= second; i++) {
        result.push(i)
    }

    return result;

}

const f = getArrNum(isFirstNum, isSecondNum);
console.log(f)