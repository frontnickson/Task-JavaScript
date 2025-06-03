// #3 / 4.3 : Дан следующий объект:
// let obj = { 1: { 1: 11, 2: 12, 3: 13, }, 2: { 1: 21, 2: 22, 3: 23, }, 3: { 1: 24, 2: 25, 3: 26, }, }\
// Найдите сумму элементов этого объекта.

let obj = {
    1: {1: 11, 2: 12, 3: 13,},
    2: {1: 21, 2: 22, 3: 23,},
    3: {1: 24, 2: 25, 3: 26,},
}

function sumObj(obj) {

    let objVal = Object.values(obj).map((element) => {
        return Object.values(element).reduce((acc, item) => acc + item)
    })

    console.log(objVal);
}

sumObj(obj);