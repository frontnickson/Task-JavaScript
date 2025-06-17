// #4 / 2.3 : Сделайте функцию, которая будет возвращать сколько
// дней прошло или осталось до заданной даты в году,
// в зависимости от того, была уже эта дата или нет.

function getDate(day) {

    const currentDate = new Date();
    const targetDate = new Date("2025-06-19");
    const diffInMs = targetDate - currentDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    console.log(diffInDays);
}

getDate();