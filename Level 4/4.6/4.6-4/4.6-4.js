// #4 / 6.4 : Сделайте функцию, которая параметром будет принимать массив с числами
// и заменять каждое число на массив его делителей.

let isArrNum = [4, 6, 8, 12]

function getSumNum(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        let num = arr[i];
        let sum = [];

        for (let j = 1; j <= num; j++) {
            if (j % 2 === 0) {
                sum.push("" + j);
            }
        }

        result.push(sum);

    }

    console.log(result)
}

getSumNum(isArrNum)