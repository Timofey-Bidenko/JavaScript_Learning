function isArray(array) {
    return typeof(array) === "object" && Array.isArray(array)
}

function isObject(object) {
    return typeof(object) === "object" && !Array.isArray(object) && !(object === null)
}

function reverseArray(arrayToReverse) {
    if (!isArray(arrayToReverse)) return;
    let newArray = []
    for (let i = arrayToReverse.length - 1; i >= 0; i--) {
        // newArray[Math.abs(i-arrayToReverse.length + 1)] = arrayToReverse[i] >>> Використав би це, якщо .push() не можна було б
        newArray.push(arrayToReverse[i])
    }
    return newArray
}

function uniqueValues(array1, array2) {
    if (!isArray(array1) || !isArray(array2)) return;
    let newArray = array1
    array2.forEach(element => {
        if (!newArray.includes(element)) { //newArray.indexOf(element) === -1 >>> Теж працює (на випадок, якщо вирішення з .includes() не підходить)
            newArray.push(element)
        }
    })
    return newArray
}

function calculateAverageGrade(arrayWithObjects) {
    if (!isArray(arrayWithObjects)) return;
    let totalGrade = 0
    let totalGradesCount = 0
    arrayWithObjects.forEach(object => {
        if (isObject(object)) {
            if (["grade"] in object) {
                if (!isNaN(object["grade"])) {
                    totalGrade += object["grade"]
                    totalGradesCount++
                }
            }
        }
    })
    return (totalGrade / totalGradesCount).toFixed(1)
}

/* 
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // [5, 4, 3, 2, 1] 
*/

/* 
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]
*/

/* 
const students = [
	{ name: "Alice", age: 20, grade: 4.5 },
	{ name: "Bob", age: 21, grade: 3.9 },
	{ name: "Charlie", age: 19, grade: 4.8 }
];

console.log(calculateAverageGrade(students)); // 4.4
*/