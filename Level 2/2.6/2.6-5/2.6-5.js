// #2 / 6.5 : Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе: [12, 34, 56]

let arr = [1, 2, 3, 4, 5, 6];

function getArr(arr) {

    let finalArr = [];

    for (let i = 0; i < arr.length; i += 2) {
        finalArr.push(Number(arr.slice(i, i + 2).join("")))
    }

    console.log(finalArr);
}

getArr(arr)
