"use strict";

// Інтерпретується
// Високорівненва
// Веб розробки
// ООП, функціональному, процедурний
// Синхронна, блокуюча, однопоточна

// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   console.log("Click");
// });

// function hardCalc() {
//   let a = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     a += a ** i;
//   }
// }

// console.log("start");
// hardCalc();
// console.log("end");

// function hardCalc(cb) {
//   let a = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     a += a ** i;
//   }
//   cb(a);
// }

// hardCalc((result) => {
//   console.log("Розрахунки завершено", result);
// });

// Таймери
// setTimeout clearTimeout
// setInterval clearInterval

// setTimeout(cb, delay, …args)

// setTimeout(() => {
//   console.log("Hello");
// }, 3000);

// function sayHi(name) {
//   console.log(`Hello, ${name}`);
// }

// // setTimeout(sayHi, 2000, "John");

// let timerId = setTimeout(() => {
//   sayHi("John");
// }, 2000);

// let number = Math.random().toFixed(2) * 100;
// console.log("number:", number);

// if (number > 50) {
//   clearTimeout(timerId);
// }

// setInterval(cb, delay, …args)

// let timerId = setInterval(() => {
//   let date = new Date().toLocaleTimeString();
//   console.log(date);
// }, 1000);

// setTimeout(() => {
//   clearInterval(timerId);
// }, 5000);

// let count = 1;

// let timerId = setInterval(() => {
//   count++;

//   if (count > 3) {
//     clearInterval(timerId);
//   }

//   let date = new Date().toLocaleTimeString();
//   console.log(date);
// }, 1000);

// function rideTaxi(cb) {
//   setTimeout(() => {
//     cb();
//   }, 5000);
// }

// rideTaxi(() => {
//   console.log("Ми вдома");
// });

// function getWether(cb) {
//   console.log("Start laoading..");

//   setTimeout(() => {
//     console.log("End laoading..");
//     let wether = "Сонячно. Температура +11";
//     cb(wether);
//   }, 2000);
// }

// getWether((wether) => {
//   console.log(`Температура сьогодні: ${wether}`);
// });

// let timerId = setTimeout(function recursiveFunc() {
//   let date = new Date().toLocaleTimeString();
//   console.log(date);

//   timerId = setTimeout(recursiveFunc, 1000);
// }, 1000);

// setTimeout(() => {
//   clearTimeout(timerId);
// }, 5000);

// console.log("start");

// setTimeout(() => {
//   console.log("timer");
// }, 1000);

// console.log("end");

// function hardCalc() {
//   let a = 0;
//   for (let i = 0; i < 600000000; i++) {
//     a += a ** i;
//   }
// }

// console.log("start");

// setTimeout(() => {
//   console.log("timer 1");
// }, 1000);

// setTimeout(() => {
//   console.log("timer 2");
// }, 5000);

// hardCalc();

// console.log("end");

// callbackHell

// function makeDish1(name, timeout, cb) {
//   setTimeout(() => {
//     console.log(`Ваша страва ${name} готова`);
//     cb?.();
//   }, timeout);
// }
// function makeDish2(name, timeout, cb) {
//   setTimeout(() => {
//     console.log(`Ваша страва ${name} готова`);
//     cb?.();
//   }, timeout);
// }
// function makeDish3(name, timeout, cb) {
//   setTimeout(() => {
//     console.log(`Ваша страва ${name} готова`);
//     cb?.();
//   }, timeout);
// }
// function makeDish4(name, timeout, cb) {
//   setTimeout(() => {
//     console.log(`Ваша страва ${name} готова`);
//     cb?.();
//   }, timeout);
// }

// makeDish1("Борщ", 3000, () => {
//   makeDish2("Паста", 2000, () => {
//     makeDish3("Кава", 500, () => {
//       makeDish4("Морозиво", 100);
//     });
//   });
// });

// function debaunce(fn, time) {
//   return function () {
//     fn();
//   };
// }
// function sum() {}

// let debouncedSum = debounce(sum, 1000);
// debouncedSum();
// debouncedSum();
// debouncedSum();

// setTimeout(() => {
//   debouncedSum();
// }, 2000);