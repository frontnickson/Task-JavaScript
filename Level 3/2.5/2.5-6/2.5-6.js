// #3 / 5.6 : Напишите программу, которая сформирует следующую строку:
// '-1-2-3-4-5-'

function getStr() {

    let str = [];

    for (let i = 1; i <= 5; i++) {
        str.push("-", i)
    }

    str.push("-")

    console.log(str.join(""))

}

getStr()