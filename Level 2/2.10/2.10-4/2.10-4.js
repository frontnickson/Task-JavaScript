// #2 / 10.4 : Дан массив с числами: [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.

let isArr = [1, 2, 3, 4, 5, 5];

function getNum(arr) {

    let getArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!getArr.includes(arr[i])) {
            getArr.push(arr[i]);
        } else {
            console.log("Есть двойное совпадение:", arr[i])
            return;
        }
    }
}

getNum(isArr)