function ValidateByType(any, selectedType, functionName) { // Приймає будь-що, тип на який перевірити це будь-що, ім'я функції яка перевіряє будь-що. Повертає чи є будь-що обраним типом, якщо ні виводить у консоль повідомлення чому ні.
    let isSelectedType = false

    if (isNaN(any) && selectedType === "number") { // Всі типи окрім справжніх номерів повертають true при перевірці isNaN(), тому обраний тип також має бути номером. (Потрібно тільки при перевірці номерів)
        console.log(`${functionName} >>> NaN NOT Allowed at all!`)
        return false
    }

    if (typeof(any) === selectedType) {
        isSelectedType = true
    } else {
        console.log(`${functionName} >>> Given argument is NOT a ${selectedType}!
                  Given argument type ~>`, typeof(any))
    }

    return isSelectedType
}


function reverseString(str = "!retemarap eht tes ot togrof uoY >>> ]gnirtSesrever[") { // Приймає рядок, повертає цей рядок у зворотньму порядку.
    if (!ValidateByType(str, "string", "reverseString")) return;
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i -= 1) {
        newStr += str[i]
    }
    return newStr
}

function isPalindrome(str = "[isPalindrome] >>> You forgot to set the parameter!") { // Приймає рядок, повертає чи є рядок паліндромом.
    if (!ValidateByType(str, "string", "isPalindrome")) return;
    if (str === reverseString(str)) {
        console.log(`"${str}" IS a Palindrome (true)`)
        return true
    }
    console.log(`"${str}" IS NOT a Palindrome (false)`)
    return false
}

function findGCD(a = 0, b = 0) { // Приймає два числа, повертає найвищий спільний дільник.
    if (!ValidateByType(a, "number", "findGCD") || !ValidateByType(b, "number", "findGCD")) return;
    if (a === b) return a;
    if (a === 0 || b === 0) return 0;
    let greatestDivisor = 1
    for (let i = Math.ceil(Math.max(a, b) / 2); i >= 1; i -= 1) {
        /* 
        Моторошна формула Math.ceil(Math.max(a, b) / 2), чи не так?
        НСД >>> Найбільший спільний дільник
        Я хочу шукати НСД, починаючи з половини самого великого числа серед a та b.
        За допомогою Math.max(a, b) дізнаюся найбільше число, далі ділю найбільше число на 2.
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

// console.log(reverseString())
// isPalindrome("racecar")
// console.log(findGCD(26, 282))