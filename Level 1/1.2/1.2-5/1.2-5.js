// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let first = 324532;
let second = 3304324;

const getNum = (f,s) => String(f).split("")[0] === String(s).split("")[0] ? console.log("Совпадение") : console.log("Не совпадение");
    
getNum(first,second)