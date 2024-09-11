// console.log("start");

// alert(123);
// console.log("end");

// let value1 = prompt("Введіть перше значення:"); // "2"
// let value2 = prompt("Введіть друге значення:"); // "3"

// console.log(value1);

// let answer = confirm("Do you enjoy JS?");
// console.log("answer:", answer);

// if(answer) {
//   //
// } else {
//   // kldlskdfj
// }

//

// while

// while(умова) {

// }

// while (true) {
//   console.log("Hello");
// }

// let i = 5;

// while (i >= 0) {
//   console.log(i);

//   i -= 2;
// }

// do while

// do {
// код
// } while(умова)

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (false);

// for

// for(початок циклу; умова; зміна і) {
//   // code
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let i = 0;

// while (i <= 5) {
//   console.log(i);

//   i++;
// }

// let sum = 0; // 1 3 6 10 15

// for (let i = 1; i <= 5; i++) {
//   sum = sum + i; // 10 + 5
// }

// console.log(sum);

// let sum = 0;

// for (let i = 1; i <= 3; i++) {
//   let value = +prompt("Введіть значення:");

//   sum += value;
// }

// console.log(sum);

// 5! = 5*4*3*2*1
// 6! = 6*5*4*3*2*1

// let factorial = +prompt("Enter value:");
// let result = 1; // 5 10 25

// for (let i = 1; i <= factorial; i++) {
//   result *= i;
// }

// console.log(result);

// continue;

// 20
// 30
// 20 22 24 ... 30

// let start = +prompt("Enter start value");
// let end = +prompt("Enter end value");

// for (let i = start; i <= end; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

// break;

// let start = +prompt("Enter start value");
// let end = +prompt("Enter end value");

// for (let i = start; i <= end; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//     break;
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// for in

// let person = {
//   name: "Tony Stark",
//   phone: "+306312345678",
//   money: 10000000,
//   isMillioner: true,
//   isPLayBoy: true,
//   isFillantrop: true,
// };

// for (let key in person) {
//   console.log(key);
//   console.log(person[key]);
// }

// let salaries = {
//   category: "front-end",
//   tomShelby: 1000,
//   walterWhite: 2000,
//   JohnSnow: 1500,
// };

// for (let key in salaries) {
//   if (typeof salaries[key] === "number") {
//     salaries[key] = salaries[key] * 2;
//   }
// }

// console.log(salaries);

// console.log(typeof "hello"); //"string"

// for of

// let arr = [10, 20, 30, 40, 50, 60, 70];
// console.log("arr:", arr);
// let string = "Hello";

// for (const element of salaries) {
//   console.log(element);
// }

// let flatCount = 10;
// let entrance = 3;

// entranceLabel: for (
//   let entranceCount = 1;
//   entranceCount <= entrance;
//   entranceCount++
// ) {
//   for (let flatNumber = 1; flatNumber <= flatCount; flatNumber++) {
//     if (entranceCount === 1 && (flatNumber === 3 || flatNumber === 5)) {
//       continue;
//     }

//     if (entranceCount === 2 && (flatNumber === 2 || flatNumber === 4)) {
//       continue;
//     }

//     if (entranceCount === 3 && (flatNumber === 1 || flatNumber === 2)) {
//       continue;
//     }

//     if (entranceCount === 1 && flatNumber === 6) {
//       continue entranceLabel;
//     }

//     console.log(
//       `Квітанція для квартири №${flatNumber} під'їзду №${entranceCount}`
//     );
//   }
// }