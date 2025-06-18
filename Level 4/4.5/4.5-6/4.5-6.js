// #4 / 5.6 : Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.

function getSum(num) {

    let result = [];

    for (let i = 1; i <= 50; i++) {
        let secondNum = i + 1;
        let prevNum = i - 1;
        if(i + prevNum === secondNum){
            result.push(i);
        }
    }

    console.log(result);

}

getSum(12356789)