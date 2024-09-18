function reverseArray(arrayToReverse) {
    let newArray = []
    for (let i = arrayToReverse.length - 1; i >= 0; i--) {
        // newArray[Math.abs(i-arrayToReverse.length + 1)] = arrayToReverse[i] >>> Використав би це, якщо .push() не можна було б
        newArray.push(arrayToReverse[i])
    }
    return newArray
}

function uniqueValues(array1, array2) {
    let newArray = array1
    array2.forEach(element => {
        if (!newArray.includes(element)) { //newArray.indexOf(element) === -1 >>> Теж працює (на випадок, якщо вирішення з .includes() не підходить)
            newArray.push(element)
        }
    })
    return newArray
}

function calculateAverageGrade(arrayWithObjects) {
    let totalGrade = 0
    arrayWithObjects.forEach(object => {
        totalGrade += object["grade"]
    })
    return (totalGrade / arrayWithObjects.length).toFixed(1)
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