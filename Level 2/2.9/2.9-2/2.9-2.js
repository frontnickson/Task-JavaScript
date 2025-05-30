// #2 / 9.2 : Дан массив с числами: [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.

let nums = [1, 2, 3, 4, 5];

function getNum(num) {
    return num.map((element) => String(element))
}

console.log(getNum(nums))