// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

let arr = [1, 3, 5, 15, 22, 10, -1, 3, 15, 4]

function getSum(n) {
    return n.filter(item => item >= 0 && item <= 10).reduce((acc, item) => acc + item)
}

console.log(getSum(arr));
