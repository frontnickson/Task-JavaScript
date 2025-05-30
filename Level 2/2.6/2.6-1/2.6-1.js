
// #2 / 6.1 : Дана некоторая строка с буквами и цифрами.
// Получите массив позиций всех цифр из этой строки.

let string = "3s3d3f34f";

function getIndex(str) {
    let arrStr = str.split("").map((element, index) => {

        if (element == Number(element)) {
            return index
        } else {
            return ""
        }

    }).join("").split("")

    console.log(arrStr);

}

getIndex(string)