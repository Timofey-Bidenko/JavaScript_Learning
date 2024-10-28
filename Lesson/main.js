"use strict"

// 1 ~ Займають час
// 2 ~ Можуть завершитись успішно або з помилкою

// 1 ~ Виробник
// 2 ~ Споживач

// console.log("Loading Data...")

// function getWeather(cb) { // getWeather() = Виробник
//     setTimeout(() => {
//         console.log("Server Working")

//         if (Math.random() > 0.5) { // simulate error
//             throw new Error("Connection Problem")
//         }

//         const weatherData = {
//             description: "Cloudy",
//             icon: "☁️",
//             city: "Kharkiv",
//             temperature: "12",
//         }

//         setTimeout(() => {
//             console.log("Data Sending")
//             cb(weatherData)
//         }, 250);
//     }, 500);
// }

// try {
//     getWeather((weatherData) => { // cb = Споживач
//         console.log(`Weather in ${weatherData.city} today ~ ${weatherData.description} ${weatherData.icon} ${weatherData.temperature}`)
//     })
// } catch (error) {
//     // console.log(error)
// }

// promise is like a pcall
// promise defaults ~ status > pending, result > undefined
// There are two ways it could end, they change its status, therefore the promise status can change only once
// status > fullfilled, result > value //OR// status > rejected, result > error

// let promise = new Promise((resolve, reject) => { // Асинхронний виробник
//     let success = Math.random() > 0.5
//     setTimeout(() => {
//         if (success) {
//             resolve("We Are Home")
//         } else {
//             reject("We Are Lost")
//         }
//     }, 500);
// })
// promise // Споживач
// .then((result) => { // Якщо все добре, спрацьовує .then
//     console.log("Result ~", result)
// })
// .catch((error) => { // Якщо щось не так, спрацьовує .catch
//     console.log("Error ~", error)
// })

// new Promise((resolve) => {
//     setTimeout(() => {
//         resolve()
//     }, 1000);
// }).then(() => {
//     console.log("This code happened after 1 second")
// })


// function delay(fn) {
//     new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, 1000);
//     }).then(() => {
//         fn()
//     })
// }

// function sum(a, b) {
//     console.log(a + b)
// }

// delay(() => {
//     sum(2, 3)
// })

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // reject("We Are Lost")
//         // console.log("We Are Home!")
//         // resolve()
//     }, 500);
// })

// promise
// .then(() => {
//     console.log("Whats Up?")
// })
// .catch((err) => {
//     console.log("Error", err)
// })
// .finally(() => {
//     console.log("Wear Your Hat!")
// })

// new Promise((resolve, reject) => {
//     resolve(1)
// })
// .then((result) => {
//     console.log("Then 1 result", result)
//     return result + 1
// })
// .then((result) => {
//     console.log("Then 2 result", result)
//     return result + 1
// })
// .then((result) => {
//     console.log("Then 3 result", result)
// })

// function makeDish(title, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Your Dish ${title} Is Ready`)
//             resolve()
//         }, time);
//     })
// }

// makeDish("Borsch", 1000)
//     .then(() => {
//         return makeDish("Pasta", 500)
//     })
//     .then(() => {
//         return makeDish("Coffee", 250)
//     })
//     .then(() => {
//         return makeDish("IceCream", 100)
//     })

// function getWeather() {
//     console.log("Loading Data...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Server Working...")

//             if (Math.random() > 0.5) {
//                 reject("No Data Available")
//             }

//             const weatherData = {
//                 description: "Cloudy",
//                 icon: "☁️",
//                 city: "Kharkiv",
//                 temperature: "12",
//             }

//             resolve(weatherData)
//         }, 500);
//     })
// }

// getWeather()
// .then((result) => {
//     return new Promise((resolve, reject) => {
//         console.log("Data Sending From Server...")
//         if (Math.random() > 0.5) {
//             reject("Error Retrieving Data")
//         }
//         setTimeout(() => {
//             resolve(result)
//         }, 500);
//     })
// })
// .then((result) => {
//     console.log(`Weather in ${result.city} today ~ ${result.description} ${result.icon} ${result.temperature}`)
// })
// .catch((error) => { // cathes all erros, from the original promise to infinite promises created by .then's
//     console.log("Error ~", error)
// })

// Promise.api

// function makeDish(title, time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         reject(`Ваша страва ${title} згоріла!`);
//       }
//       resolve(`Ваша страва ${title} готова!`);
//     }, time);
//   });
// }

// let borsh = makeDish("Борщ", 3000);
// let pasta = makeDish("Паста", 2000);
// let coffee = makeDish("Кава", 1000);
// let icecream = makeDish("Морозиво", 500);

// let promises = Promise.all([borsh, pasta, coffee, icecream]);
// let promises = Promise.allSettled([borsh, pasta, coffee, icecream]);
// let promise = Promise.any([borsh, pasta, coffee, icecream]);
// let promise = Promise.race([borsh, pasta, coffee, icecream]);
// Promise.resolve()
// Promise.reject()

// new Promise((resolve) => {
//   resolve();
// })

// promise.then((result) => {
//   console.log("result:", result);
// });

// Event Loop

// console.log("start");

// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("end");

// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout 1");

//   Promise.resolve().then(() => {
//     console.log("promise setTimeout 1");
//   });
//   Promise.resolve().then(() => {
//     console.log("promise setTimeout 2");
//   });
// }, 0);

// setTimeout(() => {
//   console.log("setTimeout 2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("promise 1");
// });

// queueMicrotask(() => {
//   console.log("queue mikrotask");
// });

// Promise.resolve().then(() => {
//   console.log("promise 2");
// });

// console.log("end");

// async await

// async function foo() {
//   return 1;
// }

// let result = foo();
// console.log("result:", result);

// function makeDish(title, time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         reject(`Ваша страва ${title} згоріла!`);
//       }
//       resolve(`Ваша страва ${title} готова!`);
//     }, time);
//   });
// }

// async function foo() {
//   let borshResult = null;
//   let pastaResult = null;
//   try {
//     borshResult = await makeDish("Борщ", 3000);
//     pastaResult = await makeDish("Паста", 2000);
//     console.log(borshResult, pastaResult);
//   } catch (error) {
//     console.log("error:", error);
//   }
// }

// function foo() {
//   let borshResult = null;
//   let pastaResult = null;

//   makeDish("Борщ", 3000)
//     .then((result) => {
//       borshResult = result;
//       return makeDish("Паста", 2000);
//     })
//     .then((result) => {
//       pastaResult = result;

//       console.log(borshResult, pastaResult);
//     })
//     .catch((error) => {
//       console.log("error:", error);
//     });
// }
// foo();

// fetch(url)

// function fetchUsers(url) {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       result.forEach((user) => {
//         console.log(`${user.id} - ${user.name} ${user.email}`);
//       });
//     })
//     .catch((error) => {
//       console.log("error:", error);
//     });
// }

// fetchUsers("https://jsonplaceholder.typicode.com/users");

// async function asyncAwaitFetch(url) {
//   try {
//     let response = await fetch(url);
//     let result = await response.json();

//     result.forEach((user) => {
//       console.log(`${user.id} - ${user.name} ${user.email}`);
//     });
//   } catch (error) {
//     console.log("error:", error);
//   }
// }

// asyncAwaitFetch("https://jsonplaceholder.typicode.com/users");

// async function asyncAwaitFetch(url) {
//   try {
//     let response = await fetch(url);
//     let result = await response.json();
//     let raceResults = result.MRData.RaceTable.Races[0].Results;

//     raceResults.forEach((driver, index) => {
//       console.log(driver.Driver.givenName);
//     });
//   } catch (error) {
//     console.log("error:", error);
//   }
// }

// asyncAwaitFetch("http://ergast.com/api/f1/current/last/results.json");

// concurrentPromises([promise1, promise2, promise3, promise4, promise5], limit) {
//   Promise.api([promise1, promise2]);
//   Promise.api([promise3, promise4]);
//   Promise.api([promise5]);
// }

// foo1(result) {
// return result+ 1
// }
// foo2(result) {
// return result+ 2
// }
// foo3(result) {
// return result+ 3
// }

// sequenceAsync([asyncFunction1, asyncFunctions2, asyncFunctions3]) {
//   result1 =  foo1() // 1
//   result2 = foo2(result1) // 3
//   return foo3(result2) // 6
// };