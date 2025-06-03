// #3 / 5.7 : let obj = { 1: { 1: { 1: 111, 2: 112, 3: 113, }, 2: { 1: 121, 2: 122, 3: 123, }, }, 2: { 1: { 1: 211, 2: 212, 3: 213, }, 2: { 1: 221, 2: 222, 3: 223, }, }, 3: { 1: { 1: 311, 2: 312, 3: 313, }, 2: { 1: 321, 2: 322, 3: 323, }, }, }
// Найдите сумму элементов этого объекта.

let obj = {
    1: {1: {1: 111, 2: 112, 3: 113,}, 2: {1: 121, 2: 122, 3: 123,},},
    2: {1: {1: 211, 2: 212, 3: 213,}, 2: {1: 221, 2: 222, 3: 223,},},
    3: {1: {1: 311, 2: 312, 3: 313,}, 2: {1: 321, 2: 322, 3: 323,},},
}

function getSumObject(obj) {

    let sumArr = []

    Object.values(obj).map(element => sumArr.push(Object.values(element)))

    const currectArr = sumArr.flat(Infinity).map(element => Object.values(element))

    console.log(currectArr.flat(Infinity).reduce((a, b) => a + b))

}

console.log(getSumObject(obj))