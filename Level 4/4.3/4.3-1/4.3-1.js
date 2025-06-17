// #4 / 3.1 : Сделайте функцию, которая параметром будет
// принимать массив и удалять из него все дубли.

let isArrNum = [1,1,2,3,4,5,5,6,7,8,9,10]

const deleteDublicates = (arr) => {
    return [...new Set(arr)]
};

console.log(deleteDublicates(isArrNum))