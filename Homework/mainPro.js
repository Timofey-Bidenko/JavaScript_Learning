function isArray(array) {
    return typeof(array) === "object" && Array.isArray(array)
}

function isObject(object) {
    return typeof(object) === "object" && !Array.isArray(object) && !(object === null)
}

function reverseObject(objectToReverse) {
    if (isArray(objectToReverse)) {
        let newArray = []
        for (let i = objectToReverse.length - 1; i >= 0; i--) {
            newArray.push(objectToReverse[i])
        }
        return newArray
    } else if (isObject(objectToReverse)) {
        let newObject = {}
        const reversedObjectKeys = reverseObject(Object.keys(objectToReverse))
        for (let i = 0; i <= reversedObjectKeys.length - 1; i++) {
            newObject[reversedObjectKeys[i]] = objectToReverse[reversedObjectKeys[i]]
        }
        return newObject
    }
}

function uniqueValues(object1, object2) {
    if (isArray(object1) && isArray(object2)) {
        let newArray = object1
        object2.forEach(element => {
            if (!newArray.includes(element)) {
                newArray.push(element)
            }
        })
        return newArray
    } else if (isObject(object1) && isObject(object2)) {
        let newObject = object1
        const objectKeys = Object.keys(object2)
        for (let i = 0; i <= objectKeys.length - 1; i++) {
            if (!(objectKeys[i] in newObject)) {
                newObject[objectKeys[i]] = object2[objectKeys[i]]
            } else if (newObject[objectKeys[i]] !== object2[objectKeys[i]]) {
                newObject[objectKeys[i]] = [newObject[objectKeys[i]], object2[objectKeys[i]]]
            }
        }
        return newObject
    }
    
}

function calculateAverageValueOfAKeyWithNumericValues(arrayWithObjects, keyToAverage, subject) {
    if (!isArray(arrayWithObjects)) return;
    if (typeof(keyToAverage) !== "string") return;
    if (typeof(subject) !== "string") subject = "Student";

    let totalValue = 0
    let totalValuesCount = 0
    let index = 0

    arrayWithObjects.forEach(object => {
        if (isObject(object)) {
            if ([keyToAverage] in object) {
                if (!isNaN(parseFloat(object[keyToAverage]))) {
                    totalValue += parseFloat(object[keyToAverage])
                    totalValuesCount++
                } else {
                    console.log(`${subject}s ${keyToAverage}, is not a number ~> ${index}`)
                }
            } else {
                console.log(`${subject} has no ${keyToAverage}, index ~> ${index}`)
            }
        } else {
            console.log(`${subject} info given in a wrong format, index ~> ${index}`)
        }
        index++
    })

    if (totalValuesCount !== arrayWithObjects.length) {
        console.log(`
            We were only able to calculate
            Average ${keyToAverage} of ${totalValuesCount}/${arrayWithObjects.length} ${subject}s
            (${(totalValuesCount/arrayWithObjects.length).toFixed(2) * 100}%)
            `)
    }

    const result = (totalValue / totalValuesCount).toFixed(1)
    console.log(`Average ${subject} ${keyToAverage} is ${result} (Returning only number)`)
    return result
}

/* 
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseObject(originalArray);
console.log(reversedArray); // [5, 4, 3, 2, 1] 

const originalObject = {one: 1, two: "#2", three: "🌳"}
const reversedObject = reverseObject(originalObject)
console.log(reversedObject)
*/

/* 
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]

const object1 = {a: 1, b: 2, c: 3}
const object2 = {a: 3, b: 2, c: 5}
const uniqueValuesObject = uniqueValues(object1, object2)
console.log(uniqueValuesObject)
*/

/* 
const People = [
	{ name: "Alice", age: 20, grade: 4.5 },
	{ name: "Bob", age: 21, grade: 3.9 },
	{ name: "Charlie", age: 19, grade: 4.8 },
    { name: "Andrew", age: 20, grade: "3" },
    { name: "Yaroslav", age: 20 },
    { name: "Ivan", grade: 5 }
];

console.log(calculateAverageValueOfAKeyWithNumericValues(People, "grade"));
console.log(calculateAverageValueOfAKeyWithNumericValues(People, "age", "User"));
*/