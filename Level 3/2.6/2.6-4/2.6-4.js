// #3 / 6.4 : Дан следующая структура: let data = [ { 1: 11, 2: 12, 3: 13, }, { 1: 21, 2: 22, 3: 23, }, { 1: 24, 2: 25, 3: 26, }, ];
// Найдите сумму элементов этой структуры.

let data = [
    {1: 11, 2: 12, 3: 13,},
    {1: 21, 2: 22, 3: 23,},
    {1: 24, 2: 25, 3: 26,},
];

function getNum(num) {

    let curArr = num.map((element) => Object.values(element).reduce((a, b) => a + b));

    console.log(curArr)
}

getNum(data);

