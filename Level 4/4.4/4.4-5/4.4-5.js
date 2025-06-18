// #4 / 4.5 : Сделайте функцию, которая параметром будет
// принимать число и удалять из него четные цифры.

let isNum = 16;

const deleteNum = (num) => {
    return String(num).split("").filter((element) => Number(element) % 2 === 0).join()
}

console.log(deleteNum(isNum));
