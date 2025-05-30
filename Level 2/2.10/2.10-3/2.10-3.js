// #2 / 10.3 : Дана некоторая строка: 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'

let isString = 'abcde abcde abcde';

function getString(str) {

    let splitStr = str.split(' ').map((element) => {

        let letter = element[0]

        return element.replace(letter, '!')

    })

    console.log(splitStr);
}

getString(isString)