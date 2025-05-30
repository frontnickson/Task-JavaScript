// Дан массив. Удалите из него элементы с заданным значением.

const num = ['1', "a", 3, "4", "b", "g"]

const deleteSymbol = (arr, symbol) => {
    return arr.filter(element => element !== symbol)
}

console.log(deleteSymbol(num, 3));
