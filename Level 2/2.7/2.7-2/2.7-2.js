// #2 / 7.2 : Дан символ. Узнайте, в каком регистре этот символ -
// в верхнем или нижнем.

let symbol = "s";

function toThinkSymbol(str) {
    if (str === str.toUpperCase()) {
        console.log("Символ в верхнем регистре")
    } else {
        console.log("В нижнем регистре")
    }
}

toThinkSymbol(symbol);
