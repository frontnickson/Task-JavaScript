// #3 / 9.3 : Дан массив со числами.
// Удалите из него числа, имеющие два и более нуля.

let isArrNum = [200,150,304050,500,7,20,3000]

const deleteNum = (arr) => {

    let isArrResult = arr.filter((element) => {

        let isZero = String(element).split("").filter((element) => element === "0").length
        if(isZero < 2) return element
        else return ""

    })

    console.log(isArrResult)
}

deleteNum(isArrNum)