// #2 / 6.3 : Дана некоторая строка с числом: '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа.
// В нашем случае должно получится следующее: '1 234 567'

const string = '1234567'

function getNum(str) {

    const splitStr = str.split("").reverse()

    const arrLen = [];

    for (let i = 0; i < splitStr.length; i += 3) {
        arrLen.push(splitStr.slice(i, i + 3))
    }

    const lets = [...arrLen.join(" ")].reverse().join("")
    
    console.log(arrLen);
    
}

getNum(string)