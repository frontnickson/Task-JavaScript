// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]


function getNumber() {

    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    let sliceArr = [];

    for (let i = 0; i < num.length; i += 2) {
        sliceArr.push(num.slice(i, i + 2))
    }

    console.log(sliceArr);

}

getNumber()