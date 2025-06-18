// #4 / 4.6 : Сделайте функцию, которая заполнит массив N случайными числами
// из заданного промежутка.


function getRandomArr(num){

    let result = [];

    for(let i = 0; i < num; i++){
        let random = Math.floor(Math.random() * num)
        result.push(random)
    }

    return result;
    
}

const f = getRandomArr(25)
console.log(f);
