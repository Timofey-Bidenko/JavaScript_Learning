// sumArrayPromise.Напишіть функцію, яка приймає масив чисел як аргумент і повертає Promise. Promise має бути виконаний через 3 секунди і повернути суму всіх чисел із масиву.

function sumArrayPromise(numArray) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!Array.isArray(numArray)) {
                reject("Array Expected!")
                return
            }
            numArray.forEach(v => {
                if (typeof(v) !== "number" || !isFinite(v)) {
                    reject("Only Finite Numbers Are Allowed!")
                    return
                }
            })
            resolve(numArray.reduce((total, current) => total += current))
            // sum up things
        }, 3000)
    })
}

// sumArrayPromise([1, 2, 3, 4, 5])
// .then((result) => {
//     console.log(result)
// })
// .catch((err) => {
//     console.log("Error ~", err)
// })



// concurrentPromises.Створіть функцію concurrentPromises, яка приймає масив промісів і максимальну кількість промісів, що виконуються одночасно. Функція має виконати проміси паралельно, але не більше зазначеної максимальної кількості. Результатом функції має бути масив результатів промісів.
// Я загорнув проміси у функції, щоб вони не починали виконуватися автоматично через синтаксис new

async function concurrentPromises(promiseArray, concurrentPromisesLimit) {
    const results = []
    const everythingExecuting = []
    const executing = []

    for (const wrappedPromise of promiseArray) {
        const p = wrappedPromise()
        .then((result) => results.push(result))
        .catch((error) => results.push(error))
        .finally(() => {
            // console.log("Delete", executing.indexOf(p), executing[executing.indexOf(p)], executing[executing.indexOf(p)] === p) // I made sure to check if I am actually deleting the right Promise, the one that got completed
            executing.splice(executing.indexOf(p), 1)
        })
        executing.push(p)
        everythingExecuting.push(p)

        if (executing.length >= concurrentPromisesLimit) {
            await Promise.race(executing) // wait until at least one promice is fulfilled, then continue
        }
    }

    await Promise.allSettled(everythingExecuting)

    return results
}

let startT = performance.now()

// concurrentPromises([
//     function() {
//         return new Promise(resolve => setTimeout(() =>{
//             console.log("1 end", performance.now() - startT)
//             resolve('Promise 1')
//         }, 1000))
//     },
//     function() {
//         return new Promise(resolve => setTimeout(() =>{
//             console.log("2 end", performance.now() - startT)
//             resolve('Promise 2')
//         }, 800))
//     },
//     function() {
//         return new Promise(resolve => setTimeout(() =>{
//             console.log("3 end", performance.now() - startT)
//             resolve('Promise 3')
//         }, 500))
//     },
// ], 2).then((finalresult) => {
//     console.log("Final Result ~", finalresult)
// })



// sequenceAsync.Реалізуйте функцію sequenceAsync, яка приймає масив функцій-промісів asyncFunctions. Кожна функція-проміс приймає попередній результат як аргумент і повертає новий результат. Функція sequenceAsync має виконати проміси послідовно, передаючи результат попереднього промісу в наступний. Зверніть увагу, що вам потрібно надати реалізацію функції sequenceAsync, яка дозволяє виконувати довільну кількість функцій-промісів у правильному порядку.

async function sequenceAsync(asyncFunctions) {
    let i = 0
    return await new Promise((resolve, reject) => {
        if (!Array.isArray(asyncFunctions) || asyncFunctions.length < 1) {
            reject("We expect Array of async functions that has at least one function!")
        }
        async function proceeed(lastResult) {
            i++
            if (i < asyncFunctions.length) {
                asyncFunctions[i](lastResult).then(proceeed)
            } else {
                resolve(lastResult)
            }
        }
        asyncFunctions[i]().then(proceeed)
    })
}

async function addOne(input) {
    const result = (input || 0) + 1
    console.log("addOne:", result)
    return result
}

async function multiplyByThree(input) {
    const result = (input || 1) * 3
    console.log("multiplyByThree:", result)
    return result
}

async function subtractTwo(input) {
    const result = (input || 0) - 2
    console.log("subtractTwo:", result)
    return result
}

async function divideByFive(input) {
    const result = (input || 1) / 5
    console.log("divideByFive:", result)
    return result
}

// sequenceAsync([addOne, multiplyByThree, subtractTwo, divideByFive])
//     .then(finalResult => {
//         console.log("Final Result:", finalResult)
//     })
//     .catch(error => {
//         console.error("Error in sequence:", error)
//     })