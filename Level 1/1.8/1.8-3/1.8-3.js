// Дан массив с дробями:
// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.

let arr = [1.456, 2.125, 3.32, 4.1, 5.34]

const getRound = (n) => {
    return n.map(item => Math.round(item))
}

console.log(getRound(arr));
