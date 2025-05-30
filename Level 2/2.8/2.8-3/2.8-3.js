// #2 / 8.3 : Даны два массива: let arr1 = [1, 2, 3]; let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3]

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];

function connectArr(a1, a2) {

    let finalArr = [];

    for (let i = 0; i < a1.length - 1; i++) {
        finalArr.push(a1[i]);
    }

    for (let i = 0; i < a2.length; i++) {
        finalArr.push(a2[i]);
    }

    finalArr.push(a1[2])

    console.log(finalArr);
}

connectArr(arr1, arr2);