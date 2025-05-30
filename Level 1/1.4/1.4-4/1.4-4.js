// Выведите в консоль все четные числа из промежутка от 1 до 100.

function result() {
    for (let i = 1; i < 100; i++){
        i % 2 === 0 && console.log(i);
    }
}

result();