function capitalizeStrings(object) {
    if (typeof(object) !== "object") return;
    let newObject = Array.isArray(object) ? [] : {}
    for (i in object) {
        if (typeof(object[i]) === "string") {
            const newStr = object[i][0].toUpperCase() + object[i].slice(1).toLowerCase()
            newObject[i] = newStr
        }
    }
    return newObject
}

function findCommonElements(array1, array2) {
    if (!Array.isArray(array1) || (!Array.isArray(array2))) return;
    const leadArray = array1.length > array2.length ? array1 : array2, otherArray = leadArray === array1 ? array2 : array1
    let newArray = []
    leadArray.forEach(element => {
        if (otherArray.includes(element) && !newArray.includes(element)) newArray.push(element);
    })
    return newArray
}

function min(object) {
    let lowestValue = Infinity
    for (i in object) {
        const elementPtF = parseFloat(object[i])
        if (!isNaN(elementPtF) && typeof(elementPtF) == "number") {
            if (elementPtF < lowestValue) lowestValue = elementPtF;
        }
    }
    return lowestValue
}

function max(object) {
    let biggestValue = -Infinity
    for (i in object) {
        const elementPtF = parseFloat(object[i])
        if (!isNaN(elementPtF) && typeof(elementPtF) == "number") {
            if (elementPtF > biggestValue) biggestValue = elementPtF;
        }
    }
    return biggestValue
}

function analyzeArray(object){
    if (typeof(object) !== "object") return;
    let result = {
        sum: 0,
        average: 0,
        min: min(object),
        max: max(object),
    }
    let addedElements = 0

    for (i in object) {
        const elementPtF = parseFloat(object[i]) // PtF >>> Parsed to float // Getting element as we will use it multiple times + store it as parseFloat() // Do the parseFloat() once, store it to save performance
        if (typeof(elementPtF) === "number" && isFinite(elementPtF)) {
            result.sum += elementPtF
            result.min = Math.min(result.min, elementPtF)
            result.max = Math.max(result.max, elementPtF)
            addedElements++
        } else {
            if (Boolean(result["NonNumericValuesInfo"])) {
                result["NonNumericValuesAmount"]++
                result["NonNumericValuesInfo"].push({Index: i, Value: object[i]})
            } else {
                result["NonNumericValuesAmount"] = 1
                result["NonNumericValuesInfo"] = [{Index: i, Value: object[i]}]
            }
        }
    }
    result.average = result.sum / addedElements
    return result
}



/* 
const words = ["apple", "banaNA", "kiWi", "ORANGE"];
console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]

const wordss = {WordOne: "sNaKe", WordTwo: "BooM", Smth: "abcde", PenPlusApple: "pineApple"}
console.log(capitalizeStrings(wordss))
*/

/* 
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(findCommonElements(array1, array2)); // [3, 4, 5]
*/

/* 
const numbers = [1, 2, 3, 4, 5, Infinity, -Infinity, NaN];
console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }

const numberss = {a: 5, b: 2, c: 3, d: "0.5", e: "lol", f: NaN}
console.log(analyzeArray(numberss))

const numbersss = [3, 6, 9]
console.log(analyzeArray(numbersss))
*/