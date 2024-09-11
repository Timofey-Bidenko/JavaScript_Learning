// let a = 2;
// let b = 3;
// let c = a + b;

// let a = 10;
// let b = "Hello";
// let c = 2 > 4;

// let a = 2;
// let b = a;
// a = 3;

// console.log(a);
// console.log(b);

// String
// let str = "Hello";
// let str2 = 'world';
// let str3 = `
// Hello
// World
// `;

// console.log(str);
// console.log(str2);
// console.log(str3);

// let str = "Hello!";

// console.log(str.length);
// console.log(str[1]);
// console.log(str[0]);

// Number
// let num = 42;
// let pi = 3.14;

// console.log(num);
// console.log(pi);

// console.log(Infinity);
// console.log(-Infinity);
// console.log(NaN);

// console.log(-100 / 0);
// console.log("Hello" / 8);

// console.log(NaN + 2);
// console.log(NaN - 4);

// BigInt

// let bigNumber = 127356412653412346123475327154376437651234635214621534n;
// console.log(bigNumber + 1n);

// Boolean
// console.log(3 > 5);
// console.log(10 < 15);

// Undefined
// let a;
// console.log(a);

// a = 3;
// console.log(a);

// null;
// let a = null;
// console.log(a);

// let user = null;

// Symbol
// let mySymbol1 = Symbol("id");
// let mySymbol2 = Symbol("id");

// console.log(mySymbol1 === mySymbol2);

// Object

// let user = {
//   name: "John", // ksfsieluhfuseifk
//   age: 30,
//   contacts: {
//     phone: 123123123,
//     email: "john@mail.com", // sdjkfbhseifhbuysyuehfbsefjdhg
//   },
// };

// sebfi847ryhwel9i847rtaupw9487tr3a4ut-4a3t78u04

// console.log(user.age);
// console.log(user.name);
// console.log(user.contacts.email);
// console.log(user.contacts.phone);

// Arrays
// let array = [10, null, true, undefined, {}, 123];
// console.log(array);
// console.log(array.length);
// console.log(array[array.length - 1]);
// array[1] = "JavaScript";
// console.log("array:", array);

// function sayHi(name) {
//   console.log(`Hi ${name}`);
// }

// sayHi("John");
// sayHi("Will");

// console.log(typeof a); // "number"
// console.log(typeof b); // "string"
// console.log(typeof c); // "boolean"
// console.log(typeof undefined);
// console.log(typeof NaN);
// console.log(typeof 10n);
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof Symbol());
// console.log(typeof null);
// console.log(typeof sayHi);

// String
// console.log(String(100)); // "100"
// console.log(100); // 100
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"

// Boolean
// False: 0 NaN 0n "" null undefined

// console.log(Boolean(100));
// console.log(Boolean(undefined));
// console.log(Boolean("Hello"));

// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(0n));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

// Number
// console.log(Number("100"));
// console.log(Number("Hello"));

// // parseInt
// console.log(parseInt("100px"));
// console.log(parseInt("$100"));
// console.log(parseInt("100.5$"));

// // parseFloat
// console.log(parseFloat("100.5$"));

// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(100n));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number(Symbol()));

// Математичні оператори

// console.log(1 + 0);
// console.log("100" - 10);
// console.log(parseInt("100px") - 10);
// console.log(false - true);

// // Оператори порівняння
// console.log(null > true); // 0 > 1
// console.log("null" > undefined); // 0 > 0

// Boolean

// Оператори

// Арифметичні
// console.log(10 + 2);
// console.log(10 - 2);
// console.log(10 / 2);
// console.log(10 * 2);
// console.log(2 ** 3);
// console.log(4 ** 2);
// console.log(5 ** 2);

// console.log(7 % 2); // 1
// console.log(8 % 3); // 2
// console.log(9 % 3); // 0

// ++ --
// let num = 10;

// ++num;
// num++;

// console.log(++num + 5);

// console.log(num++); // 10 -> 11
// console.log(++num); // 12
// console.log(--num);
// console.log(--num);
// console.log(--num);
// console.log(--num);
// console.log(--num);

// let a = 4;
// a *= 2; // a = a * 2;
// a += 3;
// a *= 2;

// console.log(a);

// Оператори порівняння
// > < >= <= == != === !==

// console.log(10 >= 12);
// console.log(true == 1);
// console.log("null != false", null != false); // 0 != 0 -> true
// console.log("100 == 100", 100 == "100"); // 0 != 0 -> false

// console.log(true === 1);
// console.log("100 === 100", 100 === "100");
// console.log(null !== false);

// Порівняння null та undefined

// console.log(null == 0);
// console.log(null > 0);
// console.log(0 >= 0);

// console.log(null == null);
// console.log(null == undefined);

// console.log(null === undefined);

// Логічні оператори
// || && !

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log(10 || null);
// console.log("Hello" || NaN);
// console.log(null || NaN);

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(null && 100);
// console.log("World" && NaN);
// console.log(0 && false);
// console.log(12 && "Hello" && false && 100);
// console.log(12 || "Hello" || false || 100);

// console.log((12 && "Hello") || (false && 100)); // "Hello" || false

// let str1 = "Hello ";
// let str2 = "World";

// console.log(str1 + str2);
// console.log("Hello" + "10");
// console.log(false + "Привіт");

// let a = "3";
// let b = "5";

// console.log(true + false); // 1 + 0
// console.log(6 / "3");
// console.log("2" * "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log(null + 1);
// console.log(undefined + 1);