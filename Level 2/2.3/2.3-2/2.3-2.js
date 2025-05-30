// Дана некоторая строка. Найдите позицию третьего нуля в строке.

let string = "Noe0werm30ewqq0dddw20dd0sadw";

function getStr(str) {

    let ars = []

    let splitStr = str.split("").forEach((element, index) => {
        if (element === "0") {
            ars.push({ word: element, index: index })
        }
    });

    if (ars.length > 2) {
        console.log(ars[2].index);
    }


}

getStr(string)