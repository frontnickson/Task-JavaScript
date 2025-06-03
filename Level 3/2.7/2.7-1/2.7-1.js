// #3 / 7.1 : Дана строка со словами.
// Отсортируйте слова в алфавитном порядке.

let isText = "This text about, my dog"

function sortString(str) {

    let sortList = str.split(" ").sort((a,b) => a.localeCompare(b))
    console.log(sortList);
    
}

sortString(isText)