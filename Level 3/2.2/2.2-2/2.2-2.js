// #3 / 2.2 : Дан массив.
// Удалите из него каждый пятый элемент.

let isArray = [1, 2, 3, 4, 22, 6, 7, 8, 9, 22, 10, 11, 12, 13, 45]

function deleteFiveElement(arr) {

    let deleteElement = []

    for (let i = 4; i < arr.length; i += 5) {
        deleteElement.push(arr[i])
    }


    let filterArr = arr.filter((element) => !deleteElement.includes(element))

    console.log(filterArr)

}

deleteFiveElement(isArray)