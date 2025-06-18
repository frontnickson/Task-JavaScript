// #4 / 5.1 : Дана переменная со строкой.
// Проверьте, что в эта строка представляет собой число,
// то есть состоит только из цифр.

let isString = "2344s";

const toThinkString = (string) => {

    let flag = false;
    
    string.split("").find((element) => {
        if(element == Number(element)) flag = true;
        else flag = false;
    })

    return flag;
}

const f = toThinkString(isString)
console.log(f);
