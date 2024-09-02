









// ??

// a ?? b

// console.log(0 ?? 10)
// console.log("hello" ?? 10)
// console.log(false ?? 10)
// console.log("" ?? 10)
// console.log(null ?? 10)
// console.log(undefined ?? 10)

// let number = 5 + 6 ** 3 / (3 * 8)

// condition ? value1 : value 2
// condition ? value1 : condition ? value2 : value 3
// let age = 25
// let message1 = age > 18 ? "Welcome" : "Good bye!";
// let message2 = age > 18 ? "Welcome" : age < 0 ? "який дивний вік!" : "Good bye!"

// console.log(message2)


// let a;
// console.log("a ~>", a)
// a = 3
// console.log("a ~>", a)

// let b = a
// a = 5

// console.log(a)
// console.log(b)

/* 
Error conditions

let a = 2
let a = 3
can't create multiple variables with same name

console.log("a ~>", a)
let a = 2
can't print whats not created before

const a = 3
a = 5
can't change constant values
*/

// const a = 3;
// console.log(a)

// _ $ (can be used in variable names)
// let const typeof class function (reserved words, can't be used as a variable name)

// console.log(user-first-name); >>> Not Allowed
// console.log($user); >>> allowed
// console.log(Привіт); >>> allowed
// let Привіт = "Hello"; >>> allowed
// console.log(_); >>> allowed, important
// console.log($); >>> allowed, important

// Англійська мова
// Чутливість до регістру
// let name = "John"
// let Name = "Jane"
// name and Name are different

// camelCase >>> firstUserName 
// snake_case >>> first_user_name
// JS users use camelCase, it is just historically like so.

// userId userName
// is has can
// isUserAutorized
// canUserSignIn

// switch

let numOfMonths = 5

/* 
switch (numOfMonths) {
    case 1:
        console.log("Зима")
        break;
    
    case 2:
        console.log("Зима")
        break;

    case 3:
        console.log("Весна")
        break;
    
    case 4:
        console.log("Весна")
        break;

    case 5:
        console.log("Весна")
        break;

    case 6:
        console.log("Літо")
        break;

    case 7:
        console.log("Літо")
        break;

    case 8:
        console.log("Літо")
        break;

    case 9:
        console.log("Осінь")
        break;

    case 10:
        console.log("Осінь")
        break;

    case 11:
        console.log("Осінь")
        break;

    case 12:
        console.log("Зима")
        break;

    default:
        break;
}
*/

switch (numOfMonths) {
    case 1:
    case 2:
    case 12:
        console.log("Зима")
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна")
        break;
    case 6:
    case 7:
    case 8:
        console.log("Літо")
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осінь")
        break;
    default:
        break;
}


// try catch

try {
    // code
} catch (error) {
    // error code
}