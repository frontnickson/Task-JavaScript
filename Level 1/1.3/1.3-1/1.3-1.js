// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

let str = "Nikita"

const getStr = (s) => s.split("").length > 0 && console.log(s.split("").reverse()[0])

getStr(str)