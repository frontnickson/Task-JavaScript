// #4 / 4.1 : Сделайте функцию, которая параметром будет принимать число,
// а возвращать количество его делителей.

let isNum = 12;

function getSum(num){

    let result = [];

    for(let i = 0; i < String(num).split("").length; i++){
        if(num % 2 === 0){
            result.push(i)
        }
    }

    return result.length;

}

console.log(getSum(isNum));