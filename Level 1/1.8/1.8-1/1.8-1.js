// Заполните массив целыми числами от 1 до 10.


const putNums = () => {

    let nums = [];

    setTimeout(() => {
        for (let i = 1; i < 10 + 1; i++) {
            nums.push(i)
        }

        console.log(nums);
        
    }, 3000)
    
}

putNums()