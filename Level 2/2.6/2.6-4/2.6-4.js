// #2 / 6.4 : Дана некоторая строка: 'AbCdE' Смените регистр букв этой строки на противоположный.
// В нашем случае должно получится следующее: 'aBcDe'

let string = 'AbCdE';

function getStr(str) {

    let splitStr = str.split("")

    let string = []

    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === splitStr[i].toUpperCase()) {
            string.push(splitStr[i].toLowerCase())
        } else {
            string.push(splitStr[i].toUpperCase())
        }
    }

    return string;
}

console.log(getStr(string));
