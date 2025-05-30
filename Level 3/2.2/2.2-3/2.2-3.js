// #3 / 2.3 : Дана некоторая переменная с числом: let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в переменной.
// В нашем случае получится такая строка: '00000'

let isNumber = 5;

function getNums(num) {

    let isFinishNumber = [num];

    for (let i = 1; i < num; i++) {
        isFinishNumber.push(0);
    }

    console.log(isFinishNumber.join(""));
}

getNums(isNumber)