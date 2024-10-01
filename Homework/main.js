// Вам необхідно написати функцію-декоратор logArguments(fn), яка приймає на вхід функцію і додає можливість логувати всі аргументи, передані у функцію-аргумент.

function logArguments(fn) {
    return function(...args) {
        console.log(...args) // spread arguments to be a nicely readable list
        return fn(...args) // spread arguments to achieve their start form (turn them into the same list as they were given)
    }
}



// Вам необхідно написати функцію-декоратор validate(fn, validator), яка приймає на вхід функцію і додає можливість перевіряти аргументи, передані у функцію fn, на відповідність заданому validator. Якщо аргументи не проходять перевірку, то декоратор має викидати виняток.

function validate(fn, validator) {
    return function(...args) {
        const validatedArgs = []
        args.forEach(element => {
            if (validator(element)) {
                validatedArgs.push(element)
            }
        })
        if (validatedArgs.length > 0) {
            return fn(...validatedArgs)
        }
    }
}



// Вам необхідно написати функцію-декоратор retry(fn, maxAttempts), яка приймає на вхід функцію і додає можливість викликати функцію з максимальною кількістю спроб у разі помилки та повертає результат останнього виклику.

function retry(fn, maxAttempts) {
    let totalAttempts = 0
    let lastResult = null
    
    return function(...args) {
        let firstRunUsed = false
        while (maxAttempts > totalAttempts || !firstRunUsed) {
            firstRunUsed = true
            try {
                lastResult = fn(...args)
                totalAttempts = 0 // reset attempts after success
                return lastResult
            } catch (error) {
                totalAttempts++ // count attempts, only if retrying
                console.log("Last result ~>", lastResult)
                console.log(`Attempt ${totalAttempts} Error! ~>`, error)
            }
        }
        return "Max Attempts Limit Reached" // this will only run if while loop has ended
    }
}





// // // TESTING // // //
// function squareRoot(x) {
//     if (x < 0) throw new Error("Cannot take square root of a negative number")
//     return Math.sqrt(x)
// }

// const loggedSquareRoot = logArguments(squareRoot)
// console.log(loggedSquareRoot(9)) // Logs: 9, returns: 3
// // console.log(loggedSquareRoot(-1)) // Logs: -1, throws error: "Cannot take square root of a negative number"


// function isNonNegative(n) {
//     return typeof (n) === 'number' && n >= 0
// }
// const validatedSquareRoot = validate(squareRoot, isNonNegative)
// console.log(validatedSquareRoot(16)) // Returns: 4
// console.log(validatedSquareRoot(-1)) // Won't call squareRoot, no output (undefined)


// const retriedSquareRoot = retry(squareRoot, -1)
// console.log(retriedSquareRoot(25)) // 5
// console.log(retriedSquareRoot(36)) // 6
// console.log(retriedSquareRoot(-25)) // Errors