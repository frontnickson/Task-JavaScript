// #4 / 1.1 : Сделайте функцию,
// которая вернет текущий день недели словом.

function getDate(){
    let date = String(new Date()).split(",").join("");
    console.log(date)
}

getDate()