// #3 / 10.4 : Дано число.
// Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.

let isNum = 15;

function getNum(num){

    let nums = [];
    let result = [];

    for(let i = 1; i < 15; i++){
        nums.push(i);
    }

    for(let j = 0; j < nums.length; j+=3){
        result.push(nums[j]);
    }

    return result;

}

console.log(getNum(isNum))