// #3 / 7.3 : Даны два числа.
// Получите массив общих делителей этих чисел.

let isFirstNum = 15;
let isSecondNum = 21;

function getNums(f, s) {

    let isFirstArr = [];
    let isSecondArr = [];
    let result = [];

    for (let i = 1; i <= f; i++) f % i === 0 && isFirstArr.push(i);
    for (let i = 1; i <= s; i++) s % i === 0 && isSecondArr.push(i);

    for (let i = 0; i < isFirstArr.length; i++) {
        for (let j = 0; j < isSecondArr.length; j++) {
            if (isFirstArr[i] === isSecondArr[j]) result.push(isFirstArr[i]);
        }
    }

    console.log(result);
}

getNums(isFirstNum, isSecondNum)