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

// https://www.houseofmath.com/uk/encyclopedia/chysla-ta-velychyny/chysla/prosti-chysla-y-rozkladannya-na-mnozhnyky/shcho-take-prosti-chysla >>> Звідси дізнався як відкинути більше ніж 75% всіх існуючих номерів (Для пошуку простих чисел).

function CheckIsNumberPrime(N, outputHidden) {
    if (!ValidateNumberType(N, "CheckIsNumberPrime", true, true)) {
        return
    }

    let IsPrimeNumber = true

    if (N > 1 && N % 2 === 1) {
        const stringifiedNumber = N.toString()
        
        const lastNumberSymbol = Number(stringifiedNumber[stringifiedNumber.length - 1])
        const mightBePrime = lastNumberSymbol !== 5
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
    
    if (!outputHidden) {
        IsPrimeNumber ? console.log("Число", N, "є простим числом!") : console.log("Число", N, "не є простим числом")
    }
    return IsPrimeNumber
}

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
            possiblePerfectNumbersInRange.push(possiblePerfectNumber)
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
}

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


// Code testing section !!! ⤵️⤵️⤵️

// CheckIsNumberPrime(+prompt("Insert"))

/*
for (let i = 1; i <= 25000; i += 1) {
    CheckIsNumberPrime(i)
} 
*/

// getPerfectNumbersInRange(1, 9000000000)

// generatePineTree(5)