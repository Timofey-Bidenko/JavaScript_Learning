

/* 
// FBzz V1 >>> Нечитабельний код
function FBzz(num) {
    const msg = num === 0 ? "Dont do 0" : num % 3 === 0 && num % 5 === 0 ? "FizzBuzz" : num % 3 === 0 ? "Fizz" : num % 5 === 0 ? "Buzz" : "FBzz >>> Your number is not dividible by either 3 or 5"
    console.log(msg)
} 
*/

/*
// FBzz V2 >>> Забагато виключень
function FBzz(num) {
    let msg = "FBzz >>> Your number is not dividible by either 3 or 5"
    if (num % 3 === 0) {
        msg = "Fizz"
    }
    if (num % 5 === 0) {
        msg += "Buzz"
    }
    if (num === 0 || num === null || num === undefined || typeof(num) === "string" || typeof(num) === "object" || typeof(num) === "function") {
        msg = "0 / null / undefined / strings / objects / arrays / functions / symbols NOT allowed"
    }
    console.log(typeof(num))
    console.log(num)
    console.log(msg)
} 
*/

// FBzz V3 >>> Perfected?

const letThat0In = false // boolean <> Used for FBzz function

function FBzz(num) {
    if (typeof(num) !== "number") {
        console.log("FBzz >>> Given argument is NOT a number!")
        console.log("FBzz >>> Given argument type ~>", typeof(num))
        return
    } else if (isNaN(num)) {
        console.log("FBzz >>> Clever, but won't work. NaN is indeed a number type, but isn't a real number.")
        return
    } else if (num === 0 && !letThat0In) {
        console.log("FBzz >>> We are not letting that 0 in!")
        return
    }
    console.log("running code")
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


/*
// "stress testing" for FBzz function
for (let n = 0; n < 31; n += 5) {
    FBzz(n)
}

const test = NaN
FBzz(test) 
*/



/* 
Знайшов у Інтернеті що 2024 ~> високосний рік
А також, що кожен четвертий рік ~> високосний
Незнаю чи ця інфомація точна, тому надав інформацію на якій базується мій код.
Дізнався що високосний рік латинською ~> bis sextus (не дивуйтесь ім'ю фунції чи змінної)

Ну виходить будь яке число, кратне чотирьом  ~> високосний рік

Апдейт після цточнення питання.
Рахувати роки тільки після нуля
Будь яке число, кратне чотирьом або чотирихста але не сто ~> високосний рік
*/

function IsThisYearBisSextus(year) {
    if (typeof(year) !== "number") {
        console.log("IsThisYearBisSextus >>> Given argument is NOT a number!")
        console.log("IsThisYearBisSextus >>> Given argument type ~>", typeof(year))
        return
    } else if (isNaN(year)) {
        console.log("IsThisYearBisSextus >>> Clever, but won't work. NaN is indeed a number type, but isn't a real number.")
        return
    } else if (year <= 0) {
        console.log("IsThisYearBisSextus >>> We are not letting BCE and year 0 in!")
        return
    }
    let yearIsBisSextus = year % 4 === 0 ? true : false
    if (yearIsBisSextus && year % 100 === 0 && !(year % 400 === 0)) {
        yearIsBisSextus = false
    } // yearIsBisSextus необов'язковий, але мені здаеться так буде краще для Performance
    console.log("Year", year, yearIsBisSextus ? "is bis sextus! Yay! :9  :)" : "is NOT bis sextus. :(")
}

/*
// "stress testing" for IsThisYearBisSextus function
for (let ye = 0; ye < 1001; ye += 50) {
    IsThisYearBisSextus(ye)
}
*/



function IAmThisYears(num) {
    if (typeof(num) !== "number") {
        console.log("IAmThisYears >>> Given argument is NOT a number!")
        console.log("IAmThisYears >>> Given argument type ~>", typeof(num))
        return
    } else if (isNaN(num)) {
        console.log("IAmThisYears >>> Clever, but won't work. NaN is indeed a number type, but isn't a real number.")
        return
    } else if (num < 0) {
        console.log("IAmThisYears >>> You are not born yet! How did you run the code?")
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
// "stress testing" for IAmThisYears function
for (let ye = 100; ye < 141; ye += 1) {
    IAmThisYears(ye)
} */