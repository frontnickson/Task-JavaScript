// Дана некоторая строка: 'abcde'
// Переведите в верхний регистр все нечетные
// буквы этой строки. В нашем случае должно
// получится следующее: 'AbCdE'

let str = "abcde";

function getNum(str) {

    let lengthStr = str.split("").map((element, index) => {
        if (index % 2 === 0) {
            return element.toUpperCase()
        } else {
            return element
        }
    })

    console.log(lengthStr);

}

getNum(str)