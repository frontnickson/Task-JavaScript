// #4 / 4.4 : Сделайте функцию, которая параметром будет принимать число и проверять,
// простое оно или нет.

let isNum = 5;

function getNum(num){

    let result = [];

    for(let i = 1; i <= num; i++){
        if(num % i !== 0){
            result.push(i)
        }
    }

    console.log(result);
    


}

getNum(isNum)