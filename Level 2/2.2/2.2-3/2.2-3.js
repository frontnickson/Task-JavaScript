// Дана строка. Удалите предпоследний символ из этой строки.

let string = "Nikita";

const deleteLastSymbol = (str) => {
    let lastSymbol = str.split("").pop()
    
    return str.replace(lastSymbol, "")
}

console.log(deleteLastSymbol(string));