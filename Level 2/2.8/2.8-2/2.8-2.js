// #2 / 8.2 : Дана некоторая строка: '1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех.
// В нашем случае должно получится следующее: '1 22 333 22 1

let str = '1 22 333 4444 22 5555 1';

function getString(str) {
    let splitStr = str.split(" ").filter((element, index) => {
        if (element.split("").length <= 3){
            return element;
        }
    });

    console.log(splitStr.join(" "));
}

getString(str)