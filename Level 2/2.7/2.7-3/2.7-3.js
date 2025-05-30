// #2 / 7.3 : Дано некоторое число, например, такое: 123789
// Удалите из этого числа все нечетные цифры.
// В нашем случае получится такой результат: 28

let number = 123789;

function getNumber(num) {

    let splitNumber = String(num).split("").filter((element) => {
        return Number(element) % 2 === 0;
    });

    console.log(splitNumber.join(""));
}

getNumber(number);

