// #4 / 3.3 : Сделайте функцию, которая параметром будет принимать массив
// и удалять из него одинаковые, рядом стоящие элементы.

let isArrNum = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 10, 11, 12, 13, 14, 12, 16, 14, 14, 19, 20];

const deleteDublicates = (arr) => {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) result.push("" + arr[i])
        else result.push(arr[i])
    }

    console.log(result.filter((element) => element !== String(element)));


}

deleteDublicates(isArrNum)