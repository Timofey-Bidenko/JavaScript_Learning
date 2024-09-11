function reverseString(str) { // Приймає рядок, повертає цей рядок у зворотньму порядку.
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i -= 1) {
        newStr += str[i]
    }
    return newStr
}

function isPalindrome(str) { // Приймає рядок, повертає чи є рядок паліндромом.
    return str === reverseString(str)
}

function findGCD(a, b) { // Приймає два числа, повертає найвищий спільний дільник.
    if (a === b) return a;
    if (a === 0 || b === 0) return 0;
    let greatestDivisor = 1
    for (let i = Math.ceil(Math.max(a, b) / 2); i >= 1; i -= 1) {
        /* 
        Math.max(a, b) / 2 >>> Отримав половину від найбільшого числа, поділивши його навпіл (на 2).
        Math.ceil() округлює число до наступного цілого числа, щоб шукати НСД у виді цілого числа.
        */
        if (a % i === 0 && b % i === 0) {
            greatestDivisor = i
            break
        }
    }
    return greatestDivisor
}

console.log(reverseString("Hello World!"))
console.log(isPalindrome("Hello World!"))
console.log(findGCD(2, 5))