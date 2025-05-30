// Даны два слова. Проверьте, что последняя буква первого слова
// совпадает с первой буквой второго слова.

let firstName = "Nikita";
let secondName = "Nutov";

const getStr = (str1, str2) => str1.split("")[0].toLowerCase() === str2.split("")[0].toLowerCase() ? console.log("Совпадение") : console.log("Не совпадение");    

getStr(firstName, secondName)