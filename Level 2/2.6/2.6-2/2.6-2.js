// #2 / 6.2 : Дан массив с некоторыми числами,
// например, вот такой: [123, 456, 789]
// Напишите код, который перевернет числа
// в этом массиве по следующему принципу: [321, 654, 987]

let arr = [123, 456, 789]

function reverseNum(arr) {

    let n = arr.map(element => {
        return [Number(String(element).split("").reverse().join(""))]
    });

    console.log(n.flat());

}

reverseNum(arr)
