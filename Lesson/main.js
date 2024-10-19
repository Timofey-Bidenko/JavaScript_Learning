"use strict";

// Create
// Read
// Update
// Delete

// Додавати
// Змінювати
// Видаляти

// 1 - Object.preventExtensions(obj) - не можна додавати
// Object.isExtensible(obj) // true/false

// let user = {
//   name: "Mike Taison",
//   age: 58,
// };

// Object.preventExtensions(user);

// if (Object.isExtensible(user)) {
//   user.email = "mike@mail.com";
// } else {
//   user.age = 60;
//   delete user.name;
// }

// console.log("user:", user);

// 2 - Object.seal() - не можна ні додавати, ні видаляти
// Object.isSealed()

// let user = {
//   name: "Mike Taison",
//   age: 58,
// };

// Object.seal(user);

// if (Object.isSealed(user)) {
//   user.age = 60;
// } else {
//   user.email = "mike@mail.com";
//   delete user.name;
// }

// console.log("user:", user);

// 3 - Object.freeze - не можна додавати, змінювати, видаляти
// Object.isFrozen(user)

// let user = {
//   name: "Mike Taison",
//   age: 58,
// };

// // Object.freeze(user);

// if (Object.isFrozen(user)) {
//   console.log("Не можна змінювати об'єкт");
// } else {
//   user.age = 60;
//   user.email = "mike@mail.com";
//   delete user.name;
// }

// console.log("user:", user);

// Дескриптори
// Object.getOwnPropertyDescriptor(obj, "prop")
// Object.defineProperty(obj, "prop", descriptor)

/* 
value: "Mike Taison"
writable: true - забороняє змінювати
enumerable: true - скриває у циклі for in
configurable: true - забороняє змінювати дескриптор
*/

// let user = {
//   name: "Mike Taison",
//   age: 58,
// };

// Object.defineProperty(user, "name", {
//   writable: true,
//   configurable: false,
// });

// Object.defineProperty(user, "name", {
//   writable: false,
// });

// user.name = "Alexandr Usik";

// let descriptorName = Object.getOwnPropertyDescriptor(user, "name");
// console.log("descriptorName:", descriptorName);
/* 
value: "Mike Taison"
writable: true
enumerable: true
configurable: true
*/

// Object.defineProperty(user, "phone", {
//   value: "+38012123123123",
//   writable: true,
// });

// // user.name = "Mike";

// for (const key in user) {
//   console.log(user[key]);
// }

// console.log("user:", user);

// function Actor(name, films) {
//   this.name = name;
//   this.films = films;
// }

// Actor.prototype = {
//   getFilms() {
//     return this.films.join(", ");
//   },
// };

// Object.defineProperty(Actor.prototype, "getFilms", {
//   enumerable: false,
// });

// let actor = new Actor("Mettew McConahee", ["Interstellar", "Gentalmen"]);
// console.log("actor:", actor);

// for (const key in actor) {
//   console.log("actor[key]:", actor[key]);
// }

// let user = {
//   name: "Mike Taison",
//   age: 58,
// };

// let descriptorName = Object.getOwnPropertyDescriptor(user, "name");
// console.log("descriptorName:", descriptorName);

// Object.preventExtensions(user) - забороняє додавати
// Object.seal(obj) - Object.preventExtensions, configurable: false
// Object.freeze() - Object.preventExtensions, configurable: false, writable: false

// Object.defineProperties
// Object.defineProperties(user, {
//   phone: {
//     value: "123123123",
//     writable: true,
//   },
//   country: {
//     value: "USA",
//     enumerable: true,
//   },
// });

// let descriptorName = Object.getOwnPropertyDescriptors(user, "name");
// console.log("descriptorName:", descriptorName);

// Перетворення об'єктів на примітив

// function toPrimitiveFn(hint) {
//   // "string"
//   // "number"
//   // "default" - бінарний +, нестроге порівняння ==

//   if (hint === "string") {
//     return this.model;
//   }

//   if (hint === "number") {
//     return this.price;
//   }

//   if (hint === "default") {
//     return this.price;
//   }
// }

// let car1 = {
//   model: "Mersedes",
//   price: 60000,
//   // toString() {
//   //   return this.model;
//   // },
//   // valueOf() {
//   //   return this.price;
//   // },
//   [Symbol.toPrimitive]: toPrimitiveFn,
// };

// let car2 = {
//   model: "Porsche",
//   price: 70000,
//   // toString() {
//   //   return this.model;
//   // },
//   // valueOf() {
//   //   return this.price;
//   // },
//   [Symbol.toPrimitive]: toPrimitiveFn,
// };

// // console.log(Boolean(user), Boolean(user2));
// console.log(Number(car1), Number(car2));
// console.log(String(car1), String(car2));

// console.log(
//   `Ви купили автівки ${car1} та ${car2}. Загальна сума: ${car1 - car2}`
// );

// Посилальний тип даних

// let a = 5;
// let b = a;
// a = 3;

// console.log(a);
// console.log(b);

/* 
x0djvn: {
  name: "Lionel",
};
*/

// let obj1 = {
//   name: "Lionel",
// };
// let obj2 = obj1;
// obj1 = null;
// obj2 = null;

// console.log(obj1);
// console.log(obj2);

// function getMarried(man, woman) {
//   woman.husbend = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman,
//   };
// }

// let family = getMarried({ name: "John" }, { name: "Jess" });
// family = null;

// console.log("father:", family.father);
// console.log("mother:", family.mother);

// let user = {
//   name: "John",
//   _age: 30,
//   get age() {
//     return this._age;
//   },
//   set age(newAge) {
//     if (newAge > 0) {
//       this._age = newAge;
//     }
//   },
// };

// user.age = -50;
// console.log("user:", user.age);

// Копіювання об'єктів

let actor = {
  name: "Mattew McConahee",
  age: 40,
  phone: undefined,
  films: ["Interstellar", "Gentalmen"],
  series: new Set(["True detective"]),
  // sayHi() {
  //   console.log(`Hi! My name is ${this.name}`);
  // },
  get country() {
    return "USA";
  },
  set country(newCountry) {
    this.country = newCountry;
  },
};

// let actorCopy = {};

// 1 Shallow copy
// for (const key in actor) {
//   actorCopy[key] = actor[key];
// }
// let actorCopy = { ...actor };

/* 
 {
  "name": "Mike Taison",
   "age": 58,
};
 */

// 2 JSON.stringify
// let actorJson = JSON.stringify(actor);
// let actorCopy = JSON.parse(actorJson);

// 3 structuredClone(obj)

// let actorCopy = structuredClone(actor);

// actor.age = 50;
// actor.films.push("Sahara");
// actor.series.add("Sahara");

// console.log("actor:", actor);
// console.log("actorCopy:", actorCopy);

/* 
1 Shallow copy
- Не копіює об'єкти, массиви
- Map, Set,
- Аксессори

2 JSON.stringify
- Map, Set,
- Аксессори
- властивості з undefined
- Функції

3 structuredClone(obj)
- Функції
- Аксессори
*/