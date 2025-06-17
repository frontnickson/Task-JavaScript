// #4 / 3.4 : Сделайте функцию, которая параметром будет принимать массив
// с числами и возвращать максимальное и минимальное значение
// из этого массива в виде следующего объекта:
//
// {
//     max: 9,
//         min: 1,
// }

let isArrNum = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 10, 11, 12, 13, 14, 12, 16, 14, 14, 19, 20];

function minMaxRenderObject(arr){
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    }
}

console.log(minMaxRenderObject(isArrNum));