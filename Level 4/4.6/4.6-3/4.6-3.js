// #4 / 6.3 : Сделайте функцию, которая параметром будет получать строку со словами,
// а возвращать строку в верхнем регистре, состоящую из первых букв слов.

const isString = "nikita"

const makeToUpperString = (string) => {

    let stringSplit = string.split('')

    return stringSplit[0].toUpperCase() + stringSplit.slice(1, stringSplit.length).join('')
}

const f = makeToUpperString(isString)
console.log(f)