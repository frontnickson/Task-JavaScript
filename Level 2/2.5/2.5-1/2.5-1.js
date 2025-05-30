// Дана некоторая строка, например, вот такая: '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.

let str = '023m0df0dfg0';

function getStr(str) {

    let arrStr = str.split("").map((element, index) => {
        if (element == Number(element)) {
            return index
        } else {
            return ''
        }
    })
        .join("")
        .split("")

    console.log(arrStr);
}

getStr(str)