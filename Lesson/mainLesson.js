// console.log(0 || false || NaN || null);
// console.log(10 && "hello" && true && 123 && 150n);

// !

// console.log(!10);
// console.log(!"Hello");
// console.log(!NaN);
// console.log(!0);

// ??

// a ?? b

// console.log(0 ?? 10);
// console.log("hello" ?? 10);
// console.log(false ?? 10);
// console.log("" ?? 10);
// console.log(null ?? 10);
// console.log(undefined ?? 10);

// let number = 5 + 6 ** 3 / (3 * 8);

// condition ? value1 : value2
// condition ? value1 : condition ? value1 : value2
// let age = -15;
// let message1 = age > 18 ? "Welcome" : "Good bye!";
// let message2 =
//   age > 18 ? "Welcome" : age < 0 ? "Який довний вік!" : "Good bye!";

// console.log(message2);

// let a = 3;
// let b = a;
// a = 5;
// a = "Hello JS";

// console.log(a);
// console.log(b);

// let a = 2;
// a = null;
// console.log("a:", a);

// const a = 100;
// console.log(a);

// _ $
// let const typeof class function

// let user1;
// let user2;
// let user$;
// let user_;
// let user%;
// let user#;
// let 1user;
// let 2user;
// let typeof;

// console.log(user-first-name);
// console.log($user);
// console.log(привіт);
// let привіт = "Hello";
// console.log(_);
// console.log($);

// Англійська мова
// Чутливість до регістру
// let name = "John";
// let Name = "John";
// camelCase firstUserName
// snake_case first_user_name
// userId userName
// is has can

// isUserAutorized
// canUserSignIn

// if
// if (condition) {
//   // code
// }

// console.log("start");

// if (100) {
//   console.log("inside if");
// }

// console.log("end");

// let age = 15;

// console.log("start");

// if (age > 18) {
//   console.log("Hello");
// }

// console.log("end");

// let hours = 10;

// if (hours < 9 || hours > 21) {
//   console.log("Магазин зачинений");
// } else {
//   console.log("Ласкаво просимо");
// }

// let hh = 7;
// let mm = 12;

// if (hh == 7 && mm == 30) {
//   console.log("Good morning!");
// } else {
//   console.log("Waiting...");
// }

// let tempreche = 4;

// if (tempreche == 4) {
//   console.log("Збираємо виноград");
// } else if (tempreche > 0) {
//   console.log("На вулиці +");
// } else if (tempreche < 0) {
//   console.log("На вулиці -");
// } else {
//   console.log("На вулиці 0");
// }

// let numberOfMunth = 3;

// if (numberOfMunth == 1) {
//   console.log("Зима");
// } else if (numberOfMunth == 2) {
//   console.log("Зима");
// } else if (numberOfMunth == 3) {
//   console.log("Весна");
// } else if (numberOfMunth == 4) {
//   console.log("Весна");
// } else if (numberOfMunth == 5) {
//   console.log("Весна");
// } else if (numberOfMunth == 6) {
//   console.log("Літо");
// } else if (numberOfMunth == 7) {
//   console.log("Літо");
// } else if (numberOfMunth == 8) {
//   console.log("Літо");
// } else if (numberOfMunth == 9) {
//   console.log("Осінь");
// } else if (numberOfMunth == 10) {
//   console.log("Осінь");
// } else if (numberOfMunth == 11) {
//   console.log("Осінь");
// } else if (numberOfMunth == 12) {
//   console.log("Зима");
// }

// switch

// switch (key) {
//   case value1:
//code
//     break;
//   case value2:
//code
//     break;

//   default:
//     break;
// }

// let numberOfMunth = 3;

// switch (numberOfMunth) {
//   case 1: // numberOfMunth === 1
//   case 2:
//   case 12:
//     console.log("Зима");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Весна");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Літо");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Осінь");
//     break;
//   default:
//     console.log("Некорректний номер місяця");
//     break;
// }

// try catch

// try {
//   // code
// } catch (error) {
//   // error code
// }

// console.log("Start");

// try {
//   console.log("try start");

//   // kdjsfbskjlhbfg;

//   console.log("try end");
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("finally");
//   // sldkjnosdhjldh;
// }
// console.log("End");

// let const var

// var a = 2;
// var a = 3;

// console.log("a:", a);

// {}

// var user = "Mike Taison";

// if (true) {
//   var user = "Alexandr Usik";
//   console.log(user);
// }

// console.log(user);

// console.log((false || 42) && (null || "Hello") && 0);
// 42 && "Hello" && 0

// 0 || undefined || NaN || "false"

// console.log((5 > 3 && 0) || "5" === 5 || "true");
// 0 || false || "true"

// console.log((undefined && false) || (5 !== "5" && 100));
// undefined || 100

// console.log((("" || false) && (true || "Valid")) || false);
// true && false

// let isToxic = false;
// let isLove = true;
// let marichkaSalary = 1500;
// let manSalary = 1000;
// let isHandsome = false;
// let isHandomeOrRichier = isHandsome || manSalary > marichkaSalary;

// if (!isToxic && isLove && isHandomeOrRichier) {
//   console.log("Виходжу заміж");
// } else {
//   console.log("Тримай гарбуза!");
// }

// if (isToxic) {
//   console.log("Тримай гарбуза!");
// } else if (isLove) {
//   if (manSalary > marichkaSalary) {
//     console.log("Виходжу заміж");
//   } else if (isHandsome) {
//     console.log("Виходжу заміж");
//   } else {
//     console.log("Тримай гарбуза!");
//   }
// } else {
//   console.log("Тримай гарбуза!");
// }