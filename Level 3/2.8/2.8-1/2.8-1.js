// #3 / 8.1 : Дан массив со числами. 
// Проверьте, что все числа из этого массива содержат в себе цифру

let isArr = [1, 33, 12, 7, 122, "2"]

const checkArrNum = (arr) => arr.some((element) => {
    if (element === String(element)) return true;
    else return false;
})

console.log(checkArrNum(isArr));