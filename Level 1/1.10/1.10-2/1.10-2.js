// Дано некоторое число: 12345
// Выведите в консоль все его символы с конца.

let nums = 12345;

function getNumb (n) {
    String(n).split('').reverse().forEach(element => {
        console.log(Number(element))
    })
}

getNumb(nums);