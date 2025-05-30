// Даны числа, разделенные запятыми: '12,34,56' Найдите сумму этих чисел.

let sum = "12,34,56"

let nums = 123456

function getSum(str) {
    let arrStr = str
        .split("")
        .filter(element => { return element !== "," })
        .map(item => Number(item))
        .reduce((acc, el) => acc + el)

    console.log(arrStr);

}

getSum(sum)