// #4 / 6.1 : Сделайте функцию, которая параметром будет принимать дату
// в формате год-месяц-день, и определять, существует ли такая дата или нет.

function toKnowDate(date) {

    let day = String(date).split("").slice(0, 2).join("");
    let month = String(date).split("").slice(2, 4).join("");
    let year = String(date).split("").slice(4, 8).join("");

    let currentDate = new Date()
    let argumentsDate = new Date(+year, +month, +day)
    console.log(argumentsDate)
}

toKnowDate(22122028);