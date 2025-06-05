// #3 / 7.6 : Дан массив с числами.
// После каждого однозначного числа вставьте еще такое же.

let isArrNum = [15, 35, 33, 4, 56, 2, 4]

const getNum = (arr) => {
    return arr.map((element) => {
        if (String(element).split("").length < 2) {
            return Number(element + "" + element);
        } else {
            return element;
        }
    })

}

console.log(getNum(isArrNum));




