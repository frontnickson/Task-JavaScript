// #3 / 1.2 : [1, '', 2, 3, '', 5] Удалите из массива все пустые строки.

let isArr = [1, '', 2, 3, '', 5];

function clearArr(arr) {

    let currentArr = arr.filter((element) => element !== String(element));

    console.log(currentArr);

}

clearArr(isArr)