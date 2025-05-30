// #2 / 10.1 : Дана строка с буквами и цифрами.
// Проверьте, что в этой строке не более трех букв.

let string = "sd23j"

function isStr(str) {

    const filterText = str.split("").filter((element) => element != Number(element))
    console.log(filterText)

    if (filterText.length > 3) {
        console.log("В строке больше 3-ех букв")
    } else {
        console.log("В строке меньше 3-ех букв")
    }
}

isStr(string)