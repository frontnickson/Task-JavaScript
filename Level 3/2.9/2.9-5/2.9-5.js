// #3 / 9.5 : Сформируйте с помощью циклов следующий массив: [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]


function getArr() {

    let isArr = [];
    let result = [];

    for (let i = 1; i < 10; i++) {
        isArr.push(i);
    }

    for (let i = 0; i < isArr.length; i+=3) {
        let sliceArr = isArr.slice(i, i + 3);
        result.push(sliceArr);
    }

    console.log(result)
}

getArr()