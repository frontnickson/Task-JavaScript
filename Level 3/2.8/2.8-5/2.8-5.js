// #3 / 8.5 : Сформируйте с помощью циклов следующий массив: [
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
// ]

function getArr(){

    let resultArr = [];

    for(let i = 1; i < 5; i++){
        resultArr.push([1,2,3])
    }

    console.log(resultArr);

}

getArr()