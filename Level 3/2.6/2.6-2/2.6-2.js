// #3 / 6.2 : Дано число, например, вот такое: let num = 12345;
// Проверьте, что все цифры этого числа больше нуля.

let isNumber = 123450;

const getNum = (number) => {

    let active = false;

    String(number).split("").filter((num) => Number(num) > 0 ? active = true : active = false);

    console.log(active);
}

console.log(getNum(isNumber))