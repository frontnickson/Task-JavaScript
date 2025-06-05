// #3 / 7.4 : Дано число.
// Проверьте, что у этого числа есть только один делитель,
// кроме него самого и единицы.

let isNum = 232;

function getNum(number) {

    let isNum = []

    for (let i = 1; i <= number; i++) number % i === 0 && isNum.push(i);

    console.log(isNum);

}

getNum(isNum);