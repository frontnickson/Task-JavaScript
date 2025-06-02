// #3 / 2.4 : Дана некоторая строка со словами:
// 'aaa bbb ccc eee fff' Удалите из этой строки каждое второе слово.
// В нашем случае должно получится следующее: 'aaa ccc fff'

let isStr = 'aaa bbb ccc eee fff';

const getStr = (str) => str.split(" ").filter((element, index) => index % 2 === 0).join(" ");

console.log(getStr(isStr))