function doubleLetter(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i += 1) {
        newStr += str[i].repeat(2)
    }
    return newStr
}

function padString(str, length, symbol, toLeft) {
    if (length <= str.length) return str;
    if (toLeft) {
        let newStr = ""
        for (let i = 0; i < length - str.length; i += 1) {
            newStr += symbol
        }
        newStr += str
        return newStr
    }
    const originalStrLength = str.length
    for (let i = 0; i < length - originalStrLength; i += 1) {
        str += symbol
    }
    return str
}

function camelCase(str, separator) {
    console.log(str)
    const words = str.split(separator)
    let i = 1
    let newStr = words[0].toLowerCase()
    if (str.startsWith(separator)) {
        newStr = words[1].toLowerCase()
        i = 2
    }
    
    for (i; i < words.length; i += 1) {
        newStr += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
    }
    return newStr
}

console.log(doubleLetter("Nicer"))

// console.log(padString("Ivan", 6, "*"))

// console.log(camelCase("this_Variable_Will_Become_camel_Case", "_"))
// console.log(camelCase("_this_Variable_Will_NO_MORE_Become_Pascal_Case", "_")) // Не баг, а фіча [ФІЧУ ПРИБРАНО]