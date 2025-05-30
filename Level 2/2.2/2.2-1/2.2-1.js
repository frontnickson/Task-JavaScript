// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

let nums = [1,3,-4,-5,5,4,-1,3,2,3,-1,6,-6,-5,-8]

const getNum = (arr) => {
    return arr.filter(element => element < 0).length;
}

console.log(getNum(nums));