// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

function result() {

    let sum = 1;

    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    console.log(sum)

}

result();
