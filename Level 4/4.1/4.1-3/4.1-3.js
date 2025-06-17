// #4 / 1.3 : Сделайте функцию, которая параметром будет принимать секунды,
// а возвращать количество суток, соответствующих этим секундам.

let isArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function getNum(arr) {

    let num = 3;
    let result = null;

    for (let i = 0; i < arr.length; i++) {
        if(num >= arr[i] && num <= arr[i + 1]){
            result = arr[i + 1]
        }
    }

    console.log(result);

}

getNum(isArr);