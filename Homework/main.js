function capitalizeStrings(array) {
    let newArray = []
    array.forEach(element => {
        const newStr = element[0].toUpperCase() + element.slice(1).toLowerCase()
        newArray.push(newStr)
    });
    return newArray
}

function findCommonElements(array1, array2) {
    const leadArray = array1.length > array2.length ? array1 : array2, otherArray = leadArray === array1 ? array2 : array1
    let newArray = []
    leadArray.forEach(element => {
        if (otherArray.includes(element) && !newArray.includes(element)) newArray.push(element);
    })
    return newArray
}

function analyzeArray(array){
    let result = {
        sum: 0,
        average: 0,
        min: array[0],
        max: array[0],
    }
    array.forEach(element => {
        result.sum += element
        result.min = Math.min(result.min, element)
        result.max = Math.max(result.max, element)
    });
    result.average = result.sum / array.length
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