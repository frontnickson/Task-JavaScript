// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

let str = ["ht", "ttp", "http", "https:", "http://main", "http://log"]

const getStr = (arr) => console.log(
    arr.filter(element => element.includes("http://"))
);

getStr(str)