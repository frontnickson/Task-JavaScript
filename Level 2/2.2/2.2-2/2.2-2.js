// Дан массив с числами. Оставьте в нем только положительные числа.

let nums = [1,3,-4,-5,5,4,-1,3,2,3,-1,6,-6,-5,-8]

const getNum = (arr) => {
    return arr.filter(element => element > 0);
}

console.log(getNum(nums));