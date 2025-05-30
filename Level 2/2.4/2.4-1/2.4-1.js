// Дана некоторая строка с буквами и цифрами.
// Получите позицию первой цифры в этой строке.

let str = "werer3erwwerewlk43243.3wdqwd23"

function getNum(str) {

    let arrNums = []

    let num = str.split("").find((element, index) => {
        if (element == Number(element)) {
            arrNums.push(index)
        }
    })

    console.log("Позиция первой цифры:", arrNums[0]);

}

getNum(str)