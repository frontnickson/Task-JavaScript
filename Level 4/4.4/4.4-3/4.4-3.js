// #4 / 4.3 : Сделайте функцию, которая параметром будет принимать число, 
// а возвращать массив его делителей.

let isNum = 16;

function getNum(num){

    let result = [];

    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            result.push(i)
        }
    }

    return result;

}

console.log(getNum(isNum));
