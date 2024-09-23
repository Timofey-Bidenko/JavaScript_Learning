function capitalizeStrings(array) {
    if (!Array.isArray(array)) return;
    let newArray = []
    array.forEach(element => {
        const newStr = element[0].toUpperCase() + element.slice(1).toLowerCase()
        newArray.push(newStr)
    });
    return newArray
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

function min(array) {
    let lowestValue = Infinity
    array.forEach(element => {
        if (!isNaN(element) && typeof(element) == "number") {
            if (element < lowestValue) lowestValue = element;
        }
    })
    return lowestValue
}

function max(array) {
    let biggestValue = -Infinity
    array.forEach(element => {
        if (!isNaN(element) && typeof(element) == "number") {
            if (element > biggestValue) biggestValue = element;
        }
    })
    return biggestValue
}

function analyzeArray(array){
    if (!Array.isArray(array)) return;
    let result = {
        sum: 0,
        average: 0,
        min: min(array),
        max: max(array),
    }
    let addedElements = 0
    array.forEach(element => {
        if (typeof(element) === "number" && isFinite(element)) {
            result.sum += element
            addedElements++
        }
    });
    result.average = result.sum / addedElements
    return result
}



/* 
const words = ["apple", "banaNA", "kiWi", "ORANGE"];

console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]
*/

/* 
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(findCommonElements(array1, array2)); // [3, 4, 5]
*/

/* 
const numbers = [1, 2, 3, 4, 5];

console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }
*/