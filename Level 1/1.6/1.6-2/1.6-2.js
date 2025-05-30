// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

let sum = [1,3,4,5,5]

function getSum(arr) {
    return arr.map(item => Math.sqrt(item)).reduce((acc, e) => acc + e)
}

console.log(getSum(sum));
