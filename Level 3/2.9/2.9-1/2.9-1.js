// #3 / 9.1 : Дана строка.
// Проверьте, что эта строка состоит только из цифры

let isString = "29"

const thinkString = (str) => {

    let isFlag = false;

    str.split("").forEach((element) => {
        if (element != Number(element)) isFlag = false;
        else isFlag = true;
    })

    return isFlag;
}

console.log(thinkString(isString))