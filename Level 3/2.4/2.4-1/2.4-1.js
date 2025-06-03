// #3 / 4.1 : Выведите в консоль все числа в промежутке от 10 до 1000,
// у которых первая цифра четная.

function getNum() {

    let isNum = []

    for (let i = 10; i < 1000; i++) {
        isNum.push(i)
    }

    const list = isNum.filter((element) => Number(String(element).split("")[0]) % 2 === 0)

    console.log(list);

}

getNum()