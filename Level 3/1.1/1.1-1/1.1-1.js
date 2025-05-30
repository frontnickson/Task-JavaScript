// #3 / 1.1 : Дана строка с буквами и цифрами.
// Проверьте, что в этой строке не более трех букв

let string = "we3"

function getStr(str) {

    let splitStr = str.split("").filter((element) => {
        return element != Number(element)
    })

    if (splitStr.length > 3) {
        console.log("В строке больше 3-ех букв")
    } else {
        console.log("В строке меньше 3-ех букв")
    }
}

getStr(string)