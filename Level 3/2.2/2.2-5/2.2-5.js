// #3 / 2.5 : Дан массив: [ [1, 2, 3], [4, 5, 6], [7, 8, 9], ]
// Найдите сумму элементов этого массива.

let isArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9],]

function getSumArr(arr) {

    const currentArr = arr.map((element) => {
        return element.reduce((acc, item) => acc + item)
    }).flat(Infinity).reduce((acc, item) => acc + item);

    console.log(currentArr)
}

getSumArr(isArr)