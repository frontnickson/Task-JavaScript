// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

function getString(str){

    let split = str.split('').reverse();

    for (let j = 0; j < split.length; j++) {
        console.log(split[j]);
    }
}

getString("Nikita");