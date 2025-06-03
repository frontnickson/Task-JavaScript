// #3 / 4.2 : Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поменяйте местами пары элементов этого массива: [2, 1, 4, 3, 6, 5]

let isArr = [1, 2, 3, 4, 5, 6];

function replaceNum(arr) {

    let isArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if(!isArr.includes(arr[i])) isArr.push(arr[i + 1], arr[i])
    }

    console.log(isArr);

}

replaceNum(isArr)