// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

let num = 1234567895;

const getNum = (e) => {
    let first = Number(String(e).split("")[0])
    let second = Number(String(e).split("").reverse()[0])
    console.log(first + second);
}

getNum(num)