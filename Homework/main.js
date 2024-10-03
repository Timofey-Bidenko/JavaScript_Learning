function logArguments(fn) {
    return function(...args) {
        console.log(...args) // spread arguments to be a nicely readable list
        return fn(...args) // spread arguments to achieve their start form (turn them into the same list as they were given)
    }
}



function validate(fn, validator) {
    return function(...args) {
        if (validator(...args)) {
            return fn(...args)
        } else {
            throw new Error("None of the arguments have passed the validation!")
        }
    }
}



function retry(fn, maxAttempts) {
    let totalAttempts = 0
    let lastResult = null

    return function(...args) {
        if (totalAttempts >= maxAttempts) {
            setTimeout(() => {
                throw new Error("Max Attempts Limit Reached")
            }, 1);
            return lastResult
        } else {
            lastResult = fn(...args)
            totalAttempts++
            return lastResult
        }
    }
}





// // // TESTING // // //
// function squareRoot(x) {
//     return Math.sqrt(x)
// }

// const loggedSquareRoot = logArguments(squareRoot)
// console.log(loggedSquareRoot(9)) // Log >>> 9 // result >>> 3
// console.log(loggedSquareRoot(-1)) // Log >>> -1 // result >>> NaN


// function isNonNegative(...args) {
//     return args.every((n) => typeof(n) === "number" && n >= 0)
// }
// const validatedSquareRoot = validate(squareRoot, isNonNegative)
// console.log(validatedSquareRoot(16)) //  4
// console.log(validatedSquareRoot(-1)) // Error (by manual code)


// const retriedSquareRoot = retry(squareRoot, 2)
// console.log(retriedSquareRoot(25)) // 5
// console.log(retriedSquareRoot(36)) // 6
// console.log(retriedSquareRoot(16)) // last result + Error (by manual code)

/*
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(retriedSquareRoot(16)) // last result + Error (by manual code)
    }, i*1000);
}
*/