// #3 / 3.1 : Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.

let isArrString = ["Michael", "Anna", "Tom", "Nik"]

const filterTextLength = (str) => str.filter((element) => {
    return element.split("").length <= 3;
})

console.log(filterTextLength(isArrString))