// #3 / 9.2 : Дана строка.
// Проверьте, что эта строка состоит только из четных цифр.

let isString = "242460424242"

const getNumString = (str) => {

    let isFlag = false;

    let splitText = str.split("").forEach((element) => {
        if(Number(element) % 2 === 0) isFlag = true;
        else isFlag = false;
    })

    console.log(isFlag);
}

getNumString(isString);