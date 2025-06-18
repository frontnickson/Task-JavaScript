// #4 / 5.3 : Сделайте функцию, которая параметром будет принимать массив
// с числами и возвращать второе по величине число.

let isArr = [1, 2, 1, 4, 5, 6, 7, 8, 9, 1];

function getNum(arr){

    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[i + 1]){
            if(!result.includes(arr[i])){
                result.push(arr[i + 1]);
            }
        }
    }

    console.log(result);
}

getNum(isArr)