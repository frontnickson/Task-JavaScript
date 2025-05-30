// Дана некоторая строка. Найдите позицию первого нуля в строке.

let string = "Ni0kita240";

const getStr = (str) => {
    
    let splitStr = str.split("").map((element, index) => {
        if (element === "0") {
            return index;
        } else {
            return ""
        }
    }).join("").split("")[0]

    console.log(splitStr);
}

getStr(string)
