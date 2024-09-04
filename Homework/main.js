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

function FBzz(num) {
    if (!ValidateNumberType(num, "FBzz", false, true)) {
        return
    }
    let msg = "FBzz >>> Your number is not dividible by either 3 or 5"
    let dividibleBy3 = false
    if (num % 3 === 0) {
        msg = "Fizz"
        dividibleBy3 = true
    }
    if (num % 5 === 0) {
        msg = dividibleBy3 ? "FizzBuzz" : "Buzz"
    }
    console.log(num, "~>", msg)
}

function checkIsLeapYear(year) {
    if (!ValidateNumberType(year, "checkIsLeapYear", false, false, "We are not letting BCE and year 0 in!")) {
        return
    }
    let IsLeapYear = year % 4 === 0 ? true : false
    if (IsLeapYear && year % 100 === 0 && !(year % 400 === 0)) {
        IsLeapYear = false
    }
    console.log("Year", year, IsLeapYear ? "is leap! Yay! :9  :)" : "is NOT leap. :(")
}

function showYearsMessage(num) {
    if (!ValidateNumberType(num, "showYearsMessage", true, false, "You are not born yet! How did you run the code?")) {
        return
    }
    if (num % 100 >= 11 && num % 100 <= 19) {
        console.log(`Вам ${num} років!`)
    } else if (num % 10 === 1) {
        console.log(`Вам ${num} рік!`)
    } else if (num % 10 >= 2 && num % 10 <= 4) {
        console.log(`Вам ${num} роки!`)
    } else {
        console.log(`Вам ${num} років!`)
    }
}
/* 
// stress testing for any function
for (let n = 0; n <= 30; n += 2) {
    // FBzz(n)
    // checkIsLeapYear(n)
    // showYearsMessage(n)
}
 */