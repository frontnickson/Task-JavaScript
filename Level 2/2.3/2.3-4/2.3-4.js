// Дана дата в следующем формате: '2025-12-31' Преобразуйте эту дату в следующий объект:

// { year: '2025', month: '12', day: '31', }

let date = "2025-12-31"

function getDate(date) {

    let user = {
        year: date.slice(0, 4),
        month: date.slice(5, 7),
        day: date.slice(8, 10)
    }

    console.log(user);

}

getDate(date)