// #3 / 7.7 : Дана строка.
// Удалите из нее все гласные буквы.

let isString = "Моя твоя"

const getStr = (str) => str.toLowerCase().replace(/[йуеыаоэяию]/g, '')

console.log(getStr(isString));

