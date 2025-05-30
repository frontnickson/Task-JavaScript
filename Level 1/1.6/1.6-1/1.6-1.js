// Дан массив с числами. Найдите сумму квадратов элементов этого массива

let sum = [1,3,4,5];

function getSum(arr) {
    return arr.map(item => item * item)
}

console.log(getSum(sum));