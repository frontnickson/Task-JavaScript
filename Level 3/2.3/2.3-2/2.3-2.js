// #3 / 3.2 : Дано некоторое число: 1357
// Проверьте, что все цифры этого числа являются нечетными.

const isNumber = 13572;

const thinkCurrectNumber = (num) => {

    let activeNumber = false;

    String(num).split("").find((element) => {
        if (Number(element) % 2 === 1) activeNumber = true;
        else activeNumber = false;
    });

    return activeNumber;
};

console.log(thinkCurrectNumber(isNumber))