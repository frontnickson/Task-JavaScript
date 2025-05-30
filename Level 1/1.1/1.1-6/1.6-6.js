// Даны два слова. Проверьте, что первые буквы этих слов совпадают.

let nameIs = "Nikita";
let secondName = "Putov";

const getLetters = (f, s) => (f + s)
    .split("")
    .filter(i => i === i.toUpperCase())
    .reduce((acc, item) => acc === item ? console.log("Совпадение") : console.log("Не совпадение"))

getLetters(nameIs, secondName)