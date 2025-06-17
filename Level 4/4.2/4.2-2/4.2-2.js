// #4 / 2.2 : Сделайте функцию, которая параметром будет принимать число
// и удалять из него нули.

let isNum = 2340203402304;

const deleteSum = (num) => {
    return Number(String(num).split("").filter((element) => element !== "0").join(""));
}

console.log(deleteSum(isNum))