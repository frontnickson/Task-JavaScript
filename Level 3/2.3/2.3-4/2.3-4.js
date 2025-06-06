// #3 / 3.4 : Дан массив:
// [ [ [11, 12, 13], [14, 15, 16], [17, 17, 19], ], [ [21, 22, 23], [24, 25, 26], [27, 27, 29], ], [ [31, 32, 33], [34, 35, 36], [37, 37, 39], ], ]
// Найдите сумму элементов этого массива.

let isArr = [[[11, 12, 13], [14, 15, 16], [17, 17, 19],], [[21, 22, 23], [24, 25, 26], [27, 27, 29],], [[31, 32, 33], [34, 35, 36], [37, 37, 39],],];

const getIsArr = (arr) => {
    return arr.flat(1).map((element) => {
        return element.reduce((acc, item) => acc + item)
    }).reduce((acc, item) => acc + item)
}

console.log(getIsArr(isArr));