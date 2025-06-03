// #3 / 5.4 : Дан массив со числами.
// Проверьте, что в нем есть число, содержащее в себе цифру 3.

let isArr = [100, 2, 31, 444, 5, 30, 23, 50, 44]

const getNumThre = (arr) => arr.filter((element) => {
    if (String(element).includes('3')) return Number(element)
})

console.log(getNumThre(isArr))