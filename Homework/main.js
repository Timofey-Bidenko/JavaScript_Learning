function summarize(num) {
    return function(secondNum) {
        return num + (secondNum ? secondNum : 1) // If secondNum is given (truthy value like not null) attempt to add to the binded original num, else, as if secondNum not given add a fixed value of 1 to the binded original num
    }
}

// const sum5 = summarize(5)
// console.log(sum5(3)) // 8
// console.log(sum5()) // 6

function counter(startValue, step) {
    let currentValue = startValue
    return function(useMethods) {
        if (useMethods) {
            return {
                increment() {
                    currentValue += step
                    return currentValue
                },
                decrement() {
                    currentValue -= step
                    return currentValue
                },
                reset() {
                    currentValue = startValue
                    return currentValue
                },
            }
        } else {
            currentValue += step
            return currentValue
        }
    }
}

// const counter1 = counter(0, 2)

// console.log(counter1()) // 2 <> Increment by default
// console.log(counter1(true).increment()) // 4 <> call increment method
// console.log(counter1(true).reset()) // 0 <> call reset method
// console.log(counter1(true).decrement()) // -2 <> call decrement method

function sequence(...functions) {
    return function(n) {
        let lastResult = null
        functions.forEach((fn) => {
            console.log(lastResult)
            if (lastResult) {
                lastResult = fn(lastResult)
            } else {
                lastResult = fn(n)
            }
            console.log(lastResult)
        })
        return lastResult
    }
}

function increment(n) {
    return n + 1
}
function decrement(n) {
    return n - 1
}
function pow(n) {
    return n*n // or n**2 // same thing
}
function sqrt(n) {
    return Math.sqrt(n)
}

// let sequenceFunc = sequence(increment, increment, pow)
// console.log(sequenceFunc(2))
// // console.log(pow(increment(increment(2)))) // this is what actually happens