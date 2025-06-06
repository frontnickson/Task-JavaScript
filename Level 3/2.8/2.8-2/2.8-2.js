// #3 / 8.2 : Дана строка в формате: 'kebab-case'
// Преобразуйте ее в формат: 'snake_case'

let isString = 'kebab-case';

const getStr = (str) => console.log(str.replace("-", "_"));

getStr(isString)