// #3 / 8.4 : Дана строка в формате: 'camelCase'
// Преобразуйте ее в формат: 'snake_case'

const isString = "oneTwoThreeFourFiveSix"

const getSnakeCase = (string) => {

    let splitText = string.split("")
    let result = []

    for (let i = 0; i < splitText.length; i++) {
        if (splitText[i] === splitText[i].toUpperCase()) {
            result.push("_", splitText[i].toLowerCase())
        } else {
            result.push(splitText[i])
        }
    }

    console.log(result.join(""));


}


getSnakeCase(isString)
