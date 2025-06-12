// #3 / 10.2 : Дан массив и число.
// Оставьте в массиве только те числа, которые являются делителями заданного числа.

let isNum = 12;
let isArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function getSum(arr, num){

    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(num % i == 0){
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(getSum(isArr, isNum))