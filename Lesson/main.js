"use strict";
/* 
Execution Context {
  LexicalEnironment: {
    EnvironmentRecord: {
      type:
      count = 
    }
    outerLink
    this:
  }
  VariableEnvironment: {
    EnvironmentRecord: {
      type:

    }
    outerLink
    this:
  }
}

Execution Context {
  LexicalEnironment: {
    EnvironmentRecord: {
      type:
      count = 4
    }
    outerLink
    this:
  }
  VariableEnvironment: {
    EnvironmentRecord: {
      type:

    }
    outerLink
    this:
  }
}
 */

// function createCount() {
//   let count = 1;
//   return function () {
//     console.log(count++);
//   };
// }

// let counter1 = createCount();
// let counter2 = createCount();

// counter1();
// counter1();
// counter1();

// counter2();
// counter2();
// counter2();

// function foo1() {
//   foo2();
// }
// function foo2() {
//   foo3();
// }
// function foo3() {}

// foo1();

// function func() {
//   console.log("Hello");

//   func();
// }

// func();

// function func(number) {
//   console.log(number);

//   func(number - 1);
// }

// func(5);

// function func(num) {
//   console.log(num);
//   // 1 базис рекурсії
//   if (num === 1) {
//     return;
//   }

//   // 2 рекурсивний виклик
//   func(num - 1);
// }

// func(5);

// function func(number) {
//   console.log(number);

//   if (number === 5) {
//     return;
//   }

//   func(number + 1);
// }

// func(1);

// function sum(number) {
//   console.log(number);

//   if (number === 1) {
//     return 1;
//   }

//   return number + sum(number - 1);
// }

// let result = sum(5);
// console.log("result:", result);

// sum(number) => number + sum(number - 1);

// 5! = 5 * 4* 3* 2 * 1

// function factorial(number) {
//   console.log(number);

//   if (number === 1) {
//     return 1;
//   }

//   return number * factorial(number - 1);
// }

// let result = factorial(5);
// console.log("result:", result);

// func(number) => number * factorial(number - 1);

// func(5) => 5 * 24; // 120
// func(4) => 4 * 6; // 24
// func(3) => 3 * 2; // 6
// func(2) => 2 * 1; // 2
// func(1) => 1;

// func(5) => 5 * 24; // 120
// func(4) => 4 * 6; // 24
// func(3) => 3 * NaN; // 6
// func(2) => 2 * undefuned; // NaN
// func(1) => undefuned;

// function tailFactorial(number, result = 1) {
//   if (number === 0) {
//     return result;
//   }

//   return tailFactorial(number - 1, number * result);
// }

// let result = tailFactorial(5, 1);
// console.log("result:", result);

// tailFactorial(number - 1, number * result);

// func(5, 1) => tailFactorial(4, 5);
// func(4, 5) => tailFactorial(3, 20);
// func(3, 20) => tailFactorial(2, 60);
// func(2, 60) => tailFactorial(1, 120);
// func(1, 120) => tailFactorial(0, 120);
// func(0, 120) => 120; // 120

// let company = {
//   development: [
//     { name: "Lionel Messi", salary: 1000 },
//     { name: "Cristiano Ronaldo", salary: 1500 },
//   ],
//   design: [
//     { name: "John Snow", salary: 800 },
//     { name: "Daineris Targarien", salary: 1000 },
//   ],
//   qa: {
//     manual: [{ name: "Leo Dicaprio", salary: 500 }],
//     automation: {
//       junior: [{ name: "Margo Robbi", salary: 1500 }],
//       senior: [{ name: "Tom Shelbi", salary: 2500 }],
//     },
//   },
// };

// function sumSalary(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((acc, emplpoye) => {
//       return acc + emplpoye.salary;
//     }, 0);
//   } else {
//     let sum = 0;

//     for (const key in department) {
//       sum += sumSalary(department[key]);
//     }

//     return sum;
//   }
// }

// let result = sumSalary(company);
// console.log("result:", result);

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// function calcVolume(c, a, b) {
//   return a + b - c;
// }

// function curry(fn) {
//   return function curried(...args) {
//     return args.length < fn.length
//       ? (...moreArgs) => curried(...args, ...moreArgs)
//       : fn(...args);
//   };
// }

// let calcVolumeCarried = curry(calcVolume);
// let calcVolumeHeight3 = calcVolumeCarried(3);

// console.log(calcVolumeHeight3(2)(2));
// console.log(calcVolumeHeight3(3, 4));
// console.log(calcVolumeHeight3(5, 5));

// let calcVolumeSquare = calcVolumeCarried(3, 3);

// console.log(calcVolumeSquare(3));
// console.log(calcVolumeSquare(4));
// console.log(calcVolumeSquare(5));

// console.log(calcVolumeCarried(2)(2)(3));
// console.log(calcVolumeCarried(3, 4)(3));
// console.log(calcVolumeCarried(5)(5, 3));
// console.log(calcVolumeCarried(5, 5, 3));

// console.log(calcVolume(2, 2, 3));
// console.log(calcVolume(3, 4, 3));
// console.log(calcVolume(5, 5, 3));

// function curry(fn) {
//   return function curried(...args) {
//     return args.length < fn.length
//       ? (...moreArgs) => curried(...args, ...moreArgs)
//       : fn(...args);
//   };
// }

// function showErrorMessage(fn, date, message) {
//   fn(`${date} - ${message}`);
// }

// // showErrorMessage(console.log, new Date().toDateString(), "Error with database");

// let showErrorMessageCarried = curry(showErrorMessage);

// let loggedError = showErrorMessageCarried(console.log);
// let alertError = showErrorMessageCarried(alert);

// loggedError(new Date().toDateString(), "Error with server");
// // alertError(new Date().toDateString(), "Error with server");

// fn1(fn2(fn3(fn4())));

// fn(fn1, fn2, fn3, fn4);

// function func() {
//   console.log("Hello");

//   func();
// }

// func();

// 1, 1, 2, 3, 5, 8, 13,

// function fib(number) {
//   if() {

//   }

//   return fib()
// }

// fib(5) // 5
// fib(7) // 13

// 11211

// 345 => 543
// function calcNumberPalindrome(number) {

//   number + numberReverse // 3456
//   // 3456 + 6543

//   if(196) {
//     return
//   }

//   return {
//     // result: 123321
//     // count: 4
//   }

// }