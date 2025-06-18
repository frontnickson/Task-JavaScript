// #4 / 5.5 : Сделайте функцию, которая заполнит
// массив случайными латинскими буквами.

function getRandomLetter(num){

    let result = [];

    for(let i = 0; i < num; i++){

        let isArrLetter = ["A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M"];
        let randomLetter = Math.floor(Math.random() * isArrLetter.length)
        result.push(isArrLetter[randomLetter])
    }

    return result;
}

const f = getRandomLetter(25)
console.log(f);
