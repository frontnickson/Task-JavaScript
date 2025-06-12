// #3 / 10.1 : Дан массив.
// Сделайте так, чтобы в нем каждый элемент повторился два раза.


let isArr = [1, 2, 3, 4, 5, 6, "Nikita"];

function getArr(arr){

    let result = [];

    for (let i = 0; i <= arr.length - 1; i++){
        result.push(arr[i],arr[i])
    }

    return result;

}

console.table(getArr(isArr));