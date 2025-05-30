// Дан объект с ключами и значениями.
// Запишите в первый массив ключи объекта, а во второй - значения.

let user = {
    name: "Niktta",
    age: "28",
    dog: true,
    job: false,
}

function getKeys(obj) {
    console.log(
        {
            keys: Object.keys(obj),
            values: Object.values(obj)
        }
    );
}

getKeys(user)