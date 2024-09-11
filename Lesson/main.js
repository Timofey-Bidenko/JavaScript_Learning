"use strict";

// while (true) {
//   let number = prompt("Enter a number:");

//   if (number === null) {
//     break;
//   }

//   sum += number;
// }

// console.log(sum);

// file 1 =====================================

// function greetUserByRole(role) {
//   switch (role) {
//     case "GUEST":
//       return "Вітаємо на нашому сайті!";
//     case "USER":
//       return "Раді знову вас бачити!";
//     case "ADMIN":
//       return "Ласкаво просимо на ваш сайт";
//     default:
//       return "Я вас не знаю";
//   }
// }

// function showYearsMessage(age, message, role) {
//   console.log(`${greetUserByRole(role)} Вам ${age} ${message}`);
// }

// function checkYears(age, role) {
//   if (age % 10 === 1 && age % 100 !== 11) {
//     showYearsMessage(age, "рік", role);
//   } else if (
//     age % 10 >= 2 &&
//     age % 10 <= 4 &&
//     (age % 100 < 12 || age % 100 > 14)
//   ) {
//     showYearsMessage(age, "роки", role);
//   } else {
//     showYearsMessage(age, "років", role);
//   }
// }

// checkYears(10, "GUEST");

// // file 2 =====================================
// checkYears(20, "USER");

// // file 3 =====================================
// checkYears(40, "ADMIN");

// console.log("start");

// function sayHi() {
//   console.log("Hello!!!");
// }

// console.log("end");

// sayHi();

// let a = 2;
// let b = 3;

// function sum() {
//   console.log("start");

//   return a + b;
// }

// console.log(sum());

// let a = 2;
// let b = 3;

// function sum() {
//   if (a > b) {
//     return "Більше";
//   } else {
//     return "Менше";
//   }
// }

// console.log(sum());

// function greetUserByRole() {
//   let role = "GUEST";

//   switch (role) {
//     case "GUEST":
//       return "Вітаємо на нашому сайті!";
//     case "USER":
//       return "Раді знову вас бачити!";
//     case "ADMIN":
//       return "Ласкаво просимо на ваш сайт";
//     default:
//       return "Я вас не знаю";
//   }
// }

// let message = greetUserByRole();
// console.log("message:", message);

// function greetUser() {
//   try {
//     return "try";
//   } catch (error) {
//     return "catch";
//   } finally {
//     console.log("finally block");
//   }
// }

// console.log(greetUser());

// function sayHiByName(name) {
//   console.log(`Hi, ${name}`);
// }

// sayHiByName("Fred");
// sayHiByName();

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(1, 2, 3, 4, 5);

// function sum(a, ...rest) {
//   console.log("rest:", rest);
//   let sum = 0;

//   for (let i = 0; i < rest.length; i++) {
//     sum += rest[i];
//   }

//   return sum;
// }

// let result = sum(1, 2, 3, 4);

// console.log("result:", result);

// function sayHiByName(name) {
//   if (name) {
//     console.log(`Hi, ${name}`);
//   } else {
//     console.log(`Hi, anonim`);
//   }
// }

// function sayHiByName(name = "anonim") {
//   console.log(`Hi, ${name}`);
// }

// sayHiByName("John");
// sayHiByName();

// function sum(a = 0, b = 0) {
//   console.log(a + b);
// }

// sum(1, 2);
// sum();
// sum(4);

// function sum(a, b, c, ...rest) {
//   console.log(arguments);
//   let sum = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }

//   return sum;
// }

// let result = sum(2, 4, 6, 8, 10);
// console.log("result:", result);

// let userName = "Lionel";

// function foo() {
//   let userName = "Cristiano";
//   console.log("foo", userName);

//   function foo2(params) {
//     let userName = "Svevchenko";
//     console.log("foo", userName);

//   }
// }

// console.log("global", userName);

// foo();

// 1 - function declaration

// func();

// function func() {
//   console.log("function declaration");
// }

// // 2 - function expression
// let foo = function () {
//   console.log("function expression");
// };

// foo();
// // 3 - arrow function

// let arrowFunction = () => {
//   console.log("arrowFunction");
// };

// arrowFunction();

// 4 - new Function

// let sum = new Function("a", "b", "return a + b");

// console.log(sum(2, 3));

// if (false) {
//   function welcome() {
//     console.log("Привіт!");
//   }
// } else {
//   function welcome() {
//     console.log("Вітаю!");
//   }
// }

// welcome();

// let pow2 = (a) => {
//   return a ** 2;
// };

// console.log(pow2(2));

// let foo = function () {
//   return "Hello";
// };

// let foo2 = foo();

// console.log("foo():", foo());
// console.log("foo2():", foo2);

// function sum(a, b) {
//   return a + b;
// }

// let sum2 = sum(2, 3);

// console.log("sum:", sum(2, 3));

// console.log("sum2:", sum2(2, 3));

// function greeting(age) {
//   if (age >= 0 && age <= 6) {
//     console.log("Привіт, малятко!");
//   } else if (age >= 7 && age <= 18) {
//     console.log("Привіт!");
//   } else if (age >= 18 && age <= 120) {
//     console.log("Доброго вам дня!");
//   } else {
//     console.log("Ви правда існуєте?");
//   }
// }

// function rudeRreeting(age) {
//   console.log(`Тобі ${age}? Чого тут забув?`);
// }

// // greeting(20);

// function checkAccess(age, cb) {
//   if (age < 21) {
//     console.log("Вас батьки не відпустили");
//   } else {
//     console.log("Welcome!");
//   }
//   cb(age);
// }

// checkAccess(28, rudeRreeting);
// checkAccess(28, greeting);

// function showUserAuthMsg(email, cb) {
//   if (!cb(email)) {
//     return;
//   }

//   console.log(
//     `На ваш email ${email} відправлено посилання. Перейдіть по ньому для завершення реєстрації.`
//   );
// }

// function validateEmail(email) {
//   return email.length > 10;
// }

// showUserAuthMsg("usl.com", validateEmail);

// function name(params) {}

// око
// радар
// а мене нема
// і що сало ласощі

// 20 30 // 10
// 20 16 // 4
// 100 50 // 50