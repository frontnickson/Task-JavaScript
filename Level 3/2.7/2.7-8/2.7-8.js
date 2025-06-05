// #3 / 7.8 : Дана строка.
// Сделайте заглавной последнюю букву каждого слова в этой строке.

let isStr = "Nikita best frontend devoloper"

const getUpperWord = (str) => str.split(" ").map((element) => {
    return element.slice(0, element.split("").length - 1) + element.split("")[element.split("").length - 1].toUpperCase()
})

console.log(getUpperWord(isStr));
