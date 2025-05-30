// Дана некоторая строка: 'a bc def ghij'
// Переведите в верхний регистр все подстроки,
// в которых количество букв меньше или равно трем.
// В нашем случае должно получится следующее: 'A BC DEF ghij'

// + автотест


// let string = 'a bc def ghij';
let string = []

// testing

function pushString() {


    for (let i = 0; i < 200; i++) {

        let random = Math.floor(Math.random() * 4);
        let arrWords = ["q", "qwe", "qdcc", "qw"]
        string.push(arrWords[random]);

    }

}

pushString()

// funciton

function getString(str) {

    const strSplit = str.map((element, index) => {

        if (element.split('').length <= 3) {
            return element.toUpperCase();
        } else {
            return element;
        }
    });

    console.log(strSplit.join(' '));
}

getString(string)