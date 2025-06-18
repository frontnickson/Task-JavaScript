// #4 / 6.2 : Сделайте функцию, которая сгенерирует строку заданной длины,
// заполненную случайными латинскими буквами.

function getString(num){

    let result = [];

    for(let i = 0; i < num; i++){
        let isArrLetter = ['A', 'B', 'C', 'D', 'E', 'G']
        let randomLetter = Math.floor(Math.random() * isArrLetter.length)
        result.push(isArrLetter[randomLetter])
    }

    return result;

}

const f = getString(25)
console.log(f);
