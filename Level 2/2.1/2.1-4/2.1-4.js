// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.

// + вторую половину

let num = [1, 2, 3, 4, 5, 6]

const getSum = (arr) => {
    

    let arrLength = arr.length / 2;

    arr.reverse()

    
    let n = {
        "Первая половина: ": arr.slice(0, arrLength),
        "Вторая: ": arr.reverse().slice(0, arrLength),
    }
    
    console.log(n);
    
    
}

getSum(num)