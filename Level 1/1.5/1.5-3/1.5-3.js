// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.

function result() {

    let sum = 0;

    for (let i = 0; i <= 6; i++) {
        if(i % 2 !== 0){
            sum += i;
        }
    }

    console.log(sum)
}

result();
