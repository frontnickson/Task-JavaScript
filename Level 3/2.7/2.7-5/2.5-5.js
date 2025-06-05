// #3 / 7.5 : Через запятую написаны числа.
// Получите максимальное из этих чисел.

let isArrNum = [15, 35, 33, 4, 56, 2, 4]

function getNum(arr) {

    let maxNum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > i) {
            maxNum = arr[i];
        }
    }

    console.log(maxNum);

}

getNum(isArrNum)