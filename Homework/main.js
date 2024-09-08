function ValidateNumberType(num, functionName, zeroAllowed, negativesAllowed, specialZeroMessage) {
    let isNumberType = true

    if (typeof(num) !== "number") {
        console.log(`${functionName} >>> Given argument is NOT a number!`)
        console.log(`${functionName} >>> Given argument type ~>`, typeof(num))
        isNumberType = false
    } else if (isNaN(num)) {
        console.log(`${functionName} >>> Clever, but won't work. NaN is indeed a number type, but isn't a real number.`)
        isNumberType = false
    } else if (num === 0 && !zeroAllowed) {
        console.log(`${functionName} >>> We are not letting that 0 in!`)
        isNumberType = false
    } else if (num < 0 && !negativesAllowed) {
        console.log(`${functionName} >>> ${specialZeroMessage}`)
        isNumberType = false
    }

    return isNumberType
}

// https://www.houseofmath.com/uk/encyclopedia/chysla-ta-velychyny/chysla/prosti-chysla-y-rozkladannya-na-mnozhnyky/shcho-take-prosti-chysla >>> Звідси дізнався як відкинути більше ніж 75% всіх існуючих номерів.

function CheckIsNumberPrime(N, outputHidden) {
    if (!ValidateNumberType(N, "CheckIsNumberPrime", true, true)) {
        return
    }

    let IsPrimeNumber = true

    if (N > 5 && N % 2 === 1) {
        const stringifiedNumber = N.toString()
        
        const lastNumberSymbol = Number(stringifiedNumber[stringifiedNumber.length - 1])
        const mightBePrime = lastNumberSymbol === 1 || lastNumberSymbol === 3 || lastNumberSymbol === 7 || lastNumberSymbol === 9
        if (mightBePrime) {
            for (let i = 2; i <= Math.sqrt(N); i += 1) {
                if (N % i === 0) {
                    IsPrimeNumber = false
                    break
                }
            }
        } else {
            IsPrimeNumber = false
        }
    } else if (N !== 2 && N !== 5) {
        IsPrimeNumber = false
    }

    // console.log(IsPrimeNumber ? `Число ${N} є простим числом` : `Число ${N} не є простим числом`)

    if (IsPrimeNumber) {
        if (!outputHidden) {
            console.log("Число", N, "є простим числом!")
        }
        return true
    }
    // console.log("Число", N, "не є простим числом")
}

// CheckIsNumberPrime(Number(prompt("Insert")))

/* for (let i = 100000; i <= 250000; i += 1) {
    CheckIsNumberPrime(i)
} */

/* for (let i = 2; i <= 10; i += 1) {
    const mrSennePrimeNumber = 2**i-1
    if (!CheckIsNumberPrime(mrSennePrimeNumber) && i > 2) {
        console.log(`2^${i}-1 is not prime, skipping...`)
        continue
    }

    const possiblePerfectNumber = 2**(i-1)*(2**i-1)

    // check if the number IS perfect
    let startTime = performance.now();

    let sumOfDividers = 0
    for (let d = 1; d <= possiblePerfectNumber / 2; d += 1) {
        if (possiblePerfectNumber % d === 0) {
            sumOfDividers += d
        } 
    }
    let endTime = performance.now();
    if (sumOfDividers === possiblePerfectNumber) {
        console.log(possiblePerfectNumber, "Iteration ~>", i, "Time Taken ~>", (endTime - startTime) / 1000)
    } else {
     console.log(possiblePerfectNumber, sumOfDividers, "Not perfect!", "Iteration ~>", i, "Time Taken ~>", (endTime - startTime) / 1000)
    }
} */

function getPerfectNumbersInRange(min, max) {
    if (!ValidateNumberType(min, "getPerfectNumbersInRange", true, true) || !ValidateNumberType(max, "getPerfectNumbersInRange", true, true)) {
        return
    } else if (min < 1 && max < 1) {
        console.log("getPerfectNumbersInRange >>> Perfect number can not be negative or less than 1!")
        return
    }

    if (min > max) {
        const originalMin = min
        min = max
        max = originalMin
    }

    function capMax() {
        max = 2**(16-1)*(2**16-1)
        console.log("Now searching for perfect numbers in range", min, "<~>", max)
    }

    if (max >= 2**(17-1)*(2**17-1)) {
        if (confirm(`Are you sure you want to continue with numbers so high? ( ${max} )`)) {
            if (!confirm(`Numbers above ${2**(17-1)*(2**17-1)} take more than 30 seconds for average laptops to check if they are Perfect, are you entirely sure you want to continue?`)) {
                capMax()
            } else {
                console.log("Well, good luck!")
            }
        } else {
            capMax()
        }
    }

    let possiblePerfectNumbersInRange = []
    let limitIteration = 2

    for (let i = 2; i <= limitIteration; i += 1) {
        const possiblePrimeNumberByFormula = 2**i-1
        if (!CheckIsNumberPrime(possiblePrimeNumberByFormula, true) && i > 2) {
            limitIteration += 1
            continue
        }
        const possiblePerfectNumber = 2**(i-1)*(possiblePrimeNumberByFormula)
        if (possiblePerfectNumber <= max) {
            possiblePerfectNumbersInRange[possiblePerfectNumbersInRange.length] = possiblePerfectNumber
            limitIteration += 1
        }
    }

    for (n of possiblePerfectNumbersInRange) {
        let sumOfDividers = 0
        for (let d = 1; d <= n / 2; d += 1) { // d stays for divider
            if (n % d === 0) {
                sumOfDividers += d
            } 
        }
        if (sumOfDividers === n) {
            console.log(n, "Is a perfect number in range(", Math.max(1, min), "<~>", Math.max(1, max), ")")
        }
    }

    /* for (let n = Math.max(1, min); n <= Math.max(1, max); n += 1) {
        let sumOfDividers = 0
        for (let d = 1; d <= n / 2; d += 1) { // d stays for divider
            if (n % d === 0) {
                sumOfDividers += d
            } 
        }
        if (sumOfDividers === n) {
            console.log(n, "Is a prefect number!")
        }
    } */
}

// getPerfectNumbersInRange(1, 8000000000)

/* 
let limit = 5
for (let a = 1; a <= limit; a += 1) {
    console.log(a)
    if (a%2 === 0) {
        limit += 1
    }
} 

this functionality is nice and I also need it!!! (We can make limits bigger for for loops!)
*/

function generatePineTree(TreeHeight) {
    if (!ValidateNumberType(TreeHeight, "generatePineTree", true, true, "Pine Tree can't be that small, come on!")) {
        return
    }
    let str = ``
    for (let i = 1; i <= TreeHeight; i += 1) {
        let newLine = ""
        for (let space = 1; space <= TreeHeight - i; space += 1) {
            newLine += " "
        }
        for (let star = 1; star <= 1 + (i-1)*2; star += 1) {
            newLine += "*"
        }
        
        str += `
        ${newLine}`
    }
    console.log(str)
}

// generatePineTree(10)