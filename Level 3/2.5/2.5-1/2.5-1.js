// #3 / 5.1 : Дан текст со словами.
// Запишите в массив все слова, начинающиеся на букву 'a'.

let isStr = "Find my name in this text, Andrew"

function getWord(str) {

    let splitText = str.split(" ").filter((element) => {
        if (element.split("")[0].toLowerCase() === "a") {
            return element
        }
    }).join("")

    console.log(splitText);
}

getWord(isStr)