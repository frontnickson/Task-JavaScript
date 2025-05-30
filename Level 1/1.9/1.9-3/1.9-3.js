// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

let arr = [10, 33, 54, 23]

const getSum = (n) => console.log(
    n.map(element => {
        let procent = element * 10 / 100;
        return element + procent
    }));

getSum(arr)