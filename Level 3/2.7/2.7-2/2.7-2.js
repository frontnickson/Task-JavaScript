// #3 / 7.2 : Дано число.
// Получите массив делителей этого числа.

let isNum = 12;

function getNums(n) {

    let arr = []

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            arr.push(i)
        }
    }

    console.log(arr);


}

getNums(isNum)