// Дано число. Выведите в консоль количество четных цифр в этом числе.

let nums = 1235544343;

function getNum(n) {
    let numbers = String(n).split("").filter(element => Number(element) % 2 === 0)
    console.log(numbers);
}

getNum(nums)