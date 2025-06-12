// #3 / 9.4 : Найдите все числа от 1 до 1000, сумма цифр которых равна 13.

function getSumNums() {

    let result = []
    let isResult = [];

    for (let i = 10; i <= 1000; i++) {
        result.push(String(i).split(""))
    }

    result.map((element, index) => {
        let sum = Number(element.reduce((a, b) => Number(a) + Number(b)));
        if(sum === 13) isResult.push(result[index].join(""));
    })

    console.log(isResult)
}

console.log(getSumNums())
