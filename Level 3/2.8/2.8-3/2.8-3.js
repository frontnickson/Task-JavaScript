// #3 / 8.3 : Дана строка в формате: 'snake_case' Преобразуйте ее в формат: 'camelCase'

let isString = 'one_two_three_four_six_seven_eigth_nine_ten'
// Проблема в том что нужно сделать первое слово с мальенкой буквой, остальные с большой
// oneTwoThreFour

const getCamelCase = (str) => {

    let result = []

    let camelString = str.split("").map((element) => {
        if (element === "_") return " "
        else return element
    }).join("").split(" ")

    result.push(camelString[0])

    for (let i = 1; i < camelString.length; i++) {
        result.push(camelString[i][0].toUpperCase() + camelString[i].split("").slice(1, camelString[i].split("").length).join(""))
    }

    console.log(result.join(""));

}

getCamelCase(isString)