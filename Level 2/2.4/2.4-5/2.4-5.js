// Дана некоторая строка со словами: 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке.
// В нашем случае должно получится следующее: 'Aaa Bbb Ccc'

let string = 'aaa bbb ccc';

function getStr(str) {

    let string = []

    let splitStr = str.split("")

    for (let i = 0; i < splitStr.length; i++) {
        if (!string.includes(splitStr[i].toUpperCase())) {
            string.push(splitStr[i].toUpperCase())
        } else {
            string.push(splitStr[i].toLowerCase())
        }
    }

    console.log(string.join(""));
}

getStr(string)