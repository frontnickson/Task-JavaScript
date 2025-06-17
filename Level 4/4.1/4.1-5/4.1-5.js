// #4 / 1.5 : Сделайте функцию, которая параметром будет принимать число,
// а возвращать сумму его делителей.

let isNum = 24;

function getSum(num){

    let isArr = [];

    for (let i = 1; i <= num; i++) {
        if(num % i === 0){
            isArr.push(i);
        }
    }

    console.log(isArr);

}


getSum(isNum);