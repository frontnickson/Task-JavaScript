// Заполните массив четными числами из промежутка от 1 до 100.

const putNums = () => {

    let nums = [];

    for (let i = 1; i < 100 + 1; i++) {
        if (i % 2 === 0) {
            nums.push(i)
        }
    }

    console.log(nums);

}

putNums()