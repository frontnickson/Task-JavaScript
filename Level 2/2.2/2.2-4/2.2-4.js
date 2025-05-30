// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива
// на сумму второй половины элементов.

let nums = [1, 2, 3, 4, 5, 6]

const getNum = (arr) => {
    
    const halfArr = arr.length / 2;

    let deleteNums = {
        a: arr.slice(0, halfArr).reduce((acc, element) => acc + element),
        b: arr.reverse().slice(0, halfArr).reduce((acc, element) => acc + element),
    }

    console.log(deleteNums.a / deleteNums.b);
    
}

getNum(nums)