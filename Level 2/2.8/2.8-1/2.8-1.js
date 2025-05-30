// #2 / 8.1 : Дана строка с буквами.
// Проверьте, что в этой строке не более двух заглавных букв.

let str = "Hello WoSrld";

function getString(str) {
    let splitStr = str.split("").filter((element) => element === element.toUpperCase() && element !== " ");

    if(splitStr.length > 2) {
        console.log("В строке больше двух символов")
    } else {
        console.log("В строке правильно количество слов")
    }

}

getString(str)