// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

let arr = ["http://index.html", "http://DOM.xs", "http://file.word", "http://products.html"]

const getStr = (n) => console.log(n.filter(element => element.includes(".html")));

getStr(arr)