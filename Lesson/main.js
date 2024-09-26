"use strict"

// let obj2 = new Object()

// obj["Key"] = 100
// console.log("obj", obj)

// let myMap = new Map()
// let obj = {
//     crimes: 0,
// }

// if ("crimes" in obj) {
//     console.log("Exists")
// }
// let user1 = {
//     name: "John Snow"
// }

// let user2 = {
//     name: "Theon Greyjoy"
// }

// myMap.set("key", "value")
// myMap.set(100, "number")
// myMap.set(true, "Hello")
// myMap.set(100, "Hello") // shading
// myMap.set(user1, "user 1")
// myMap.set(user2, "user 2")
// myMap.set(NaN, "this is NaN")

// obj["key"] = "value"
// obj[100] = "number"
// obj[true] = "Hello"
// obj[100] = "Hello" // shading
// obj[user1] = "user 1"
// obj[user2] = "user 2" // shades user1 key and its value

// console.log("myMap", myMap)
// console.log("obj", obj)

let myMap = new Map()

myMap
    .set(100, "this is number")
    .set("name", "Bred")
    .set("phone", "093123123123")
// console.log(myMap.get(100))
// console.log(myMap.has(2000))
// console.log(myMap.delete(200))
// console.log(myMap.clear())

// myMap.forEach((v, k, map) => {
//     console.log(v, k, map)
// })

// console.log(myMap.keys())
// console.log(myMap.values())
// console.log(myMap.entries())

// for (const element of myMap) { // same as of myMap.entries()
//     console.log("element:", element)
// }

// console.log(myMap)

// let obj = {
//     name: "Will",
//     country: "USA",
//     phone: "093123123123",
// }

// Object.entries(obj)

// let map = new Map(Object.entries(obj))


// map.set("email", "user@mail.com")

// let obj2 = Object.fromEntries(map.entries())
// console.log("obj2:", obj2)

// console.log("map:", map)

// let calledFunctions = new Map()

// function countFunction(func) {
//     if (!calledFunctions.has(func)) {
//         calledFunctions.set(func, 1)
//     } else {
//         let value = calledFunctions.get(func)
//         calledFunctions.set(func, ++value)
//     }
// }

// function foo1() {
//     countFunction(foo1)

//     console.log("foo1")
// }
// function foo2() {
//     countFunction(foo2)

//     console.log("foo2")
// }
// function foo3() {
//     countFunction(foo3)

//     console.log("foo3")
// }

// foo1()
// foo1()
// foo2()
// foo1()
// foo3()
// foo3()

// console.log(calledFunctions)

//  Set

let newSet = new Set([1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5])
newSet.add(6)
newSet.add(6)
newSet.add(6)

// console.log(newSet.has(2))
// console.log(newSet.delete(6))
// // console.log(newSet.clear())
// console.log(newSet.size)

// console.log(newSet.keys())
// console.log(newSet.values())

// console.log(newSet.entries())

// newSet.forEach((v, k, set) => {
//     console.log("value, key", v, k)
// })

// console.log("newSet:", newSet)

// function uniqValues(array) {
//     return Array.from(new Set(array))
// }

// console.log("uniqValues():", uniqValues([1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5]))

// let a = 3;
// let b = a;

// a = 5;

// console.log(a)
// console.log(b)

// let user1 = {
//     name: "Lionel",
// }

// let user2 = user1

// user2.name = "Cristiano"

// console.log(user1, user2)

// let obj = { // basically a link to part of memory
//     name: "John",
// }
// let obj2 = obj
// obj.name = "Will" // you can chage whats inside the part of memory
// obj = null // you can clear a link, if othing else linked the part of memory linked will be erased (if it is not a const)
// obj = 100 // however, since it constant, the link can not be changed to value or different link
// console.log("obj:", obj)


// weakMap weakSet
// let map = new Map()
// let weakMap = new WeakMap()

// let user1 = {
//     name: "Lionel"
// }

// let user2 = {
//     name: "Cristiano"
// }

// map.set(user1, "user 1")
// weakMap.set(user2, "user 2")

// user1 = null
// user2 = null

// console.log("map:", map) // the link to user1's Object was NOT erase, even thought we erased link to it from user1
// console.log("weakMap:", weakMap) // the link to user2's Object was erased, because of erasing link to it from user2

// let message = "hello"
// console.log("message:", message)
// let array = [1, 2, 3, 4, 5]
// console.log("array:", array)

// let user = {
//     name: "John",
//     age: 30
// }

// for (const value of user) {
//     console.log("value:", value)
// }

// {value: any, done: boolean}

// let obj = {
//     [Symbol.iterator]: function() {
//         let i = this.start;
//         let end = this.end
//         return {
//             next() {
//                 if (i <= end) {
//                     i = false
//                     return {value: i++, done: false}
//                 } else {
//                     return {value: null, done: true}
//                 }
//             }
//         }
//     }
// }

// 1 objIterator = obj[Symbol.iterator]();
// 2 objIterator.next() // (value: 1, done: boolean)

// for (const element of obj) {
//     console.log("element:", element)
// }















// let films = {
//     drama: [
//         {name: "Titanic", year: 1995}, 
//         {name: "Avatar", year: 2010},
//     ],
//     documentary: [
//         {name: "Earth", year: 2005},
//         {name: "Oceans", year: 2015},
//     ],
//     action: [
//         {name: "Star Wars 1", year: 2001},
//         {name: "Transformers", year: 2008},
//     ],
// }

// films[Symbol.iterator] = function() {
//     let filmsNames = [];
//     let i = 0

//     for (const key in this) { // this >>> films object itself // key >>> keys of films object, like drama, documentary, action
//         this[key].forEach((film) => {
//             filmsNames.push(film.name)
//         });
//     }

//     return {
//         next() {
//             if (i < filmsNames.length) {
//                 return {value: filmsNames[i++], done: false}
//             } else {
//                 return {value: null, done: true}
//             }
//         }
//     }
// }

// for (const element of films) {
//     console.log("element:", element)
// }

// let arr = [2, 4, 6, 8, 10, 12]
// let arrIterator = arr[Symbol.iterator]()

// while(true) {
//     let result = arrIterator.next()

//     if (result.done) {
//         break
//     }

//     console.log(result.value)
// }


// Infinite loop??? // Nuh uh, fixed (the problem was setting i to false every time when done becomes false)
// let obj = {
//     [Symbol.iterator]: function() {
//         let i = 1
//         return {
//             next() {
//                 if (i <= 5) {
//                     return {value: i++, done: false}
//                 } else {
//                     return {value: null, done: true}
//                 }
//             }
//         }
//     }
// }

// for (const element of obj) {
//     console.log("element:", element)
// }

// Extension wrap console log // TESTING IT!!!
// let a = 3 // do ctrl + alt + w <<< + >>> w
// console.log('a:', a)