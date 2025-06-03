// #3 / 3.3 : Дано некоторое слово: 'abcba'
// Проверьте, что это слово читается одинаково с любой стороны.

let isString = 'abcba';

const getString = (str) => {
    
    let replaceStr = str.split("").reverse().join("")

    if (replaceStr === str) {
        console.log("Слово читается одинаковым");
    } else {
        console.log("Слово другое");
    }
}

getString(isString)