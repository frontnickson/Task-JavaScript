// #3 / 10.3 : Даны два числа.
// Получите массив цифр, которые есть и в одном, и во втором числе.

let firstNum = 15;
let secondNum = 25;

function addNum(first, second){

    let result = [];

    for(let i = 0; i <= first; i++){
        result.push(i);
    }

    for (let j = 0; j <= second; j++){
        result.push(j);
    }

    return result;
}

console.log(addNum(firstNum,secondNum))