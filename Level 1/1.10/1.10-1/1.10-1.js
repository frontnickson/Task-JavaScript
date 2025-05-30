// Заполните массив случайными числами из промежутка от 1 до 100.

function putNums () {

    let n = [];

    for(let i = 0; i < 100; i++) {
        let num = Math.floor(Math.random() * 100);
        n.push(num);
    }

    console.log(n)

}

putNums()