// Дан массив с числами. Найдите сумму положительных элементов этого массива.

let arr = [1, 3, 5, -4, 3, -2, 1, -3]

function getSum(a) {
    return a.filter(item => item >= 0).reduce((acc, item) => acc + item,0)
}

console.log(getSum(arr));