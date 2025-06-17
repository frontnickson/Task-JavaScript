// #4 / 3.2 : Сделайте функцию, которая параметром будет принимать массив и удалять
// из него все дубли, которые встречаются больше трех раз.

let isArrNum = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 10, 11, 12, 13, 14, 15, 16, 14, 14, 19, 20];

const deleteDublicates = (arr) => {

    let result = [];

    for (let i = 1; i < arr.length - 1; i++) {
        let nums = arr.filter((element) => element === i)
        result.push(nums)
    }

    return result.filter((element) => element.length <= 2).flat()

}

deleteDublicates(isArrNum);