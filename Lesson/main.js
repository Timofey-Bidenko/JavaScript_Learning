"use strict"

// function sayHi() {
//     console.log(`Hi, ${this.name}`)
// }

// const user1 = {
//     name: "Fred",
//     sayHi,
// }

// const user2 = {
//     name: "George",
//     sayHi,
// }

// user1.sayHi()
// user2.sayHi()

// 1 >>> Прив'язка за замовчуванням

// function func() {
//     console.log(this) // undefined, no owner object
// }

// func()

// 2 >>> Неявна прив'язка оба об'єкт що володіє (owner object)

// const user1 = {
//     name: "Fred",
//     sayHi() {
//         console.log(`Hi, ${this.name}`)
//     }
// }

// const user2 = {
//     name: "George",
//     sayHi: user1.sayHi,
// }

// user1.sayHi()
// user2.sayHi()

// N1
// let user = {
//     name: "Fred",
//     sayHi() {
//         console.log(`Hi, ${this.name}`)
//     },
// }

// let sayHiFred = user.sayHi

// // let sayHiFred = function() {
// //     console.log(`Hi, ${this.name}`)
// // }

// sayHiFred()



// N2
// let user = {
//     name: "Fred",
//     sayHi() {
//         console.log(`Hi, ${this.name}`)
//     },
// }

// function func(fn) {
//     fn()
// }

// func(user.sayHi)

// 3 >>> Явна прив'язка

// let actor = {
//     firstName: "Leonardo",
//     lastName: "Dicaprio"
// }

// let actress = {
//     firstName: "Margo",
//     lastName: "Robbie"
// }

// function getFullName() {
//     return`${this.firstName} ${this.lastName}`
// }

// function greet(msg, type) {
//     console.log(`${msg} ${type} ${getFullName.call(this)}`)
// }

// getFullName() => this >>> actor
// getFullName.call(actor)
// getFullName() => this >>> actress
// getFullName.call(actress)
// greet.call(actor, "Good Morning", "Mr")
// greet.call(actress, "Good Evening", "Ms")

// greet.apply(actor, ["Good Morning", "Mr"])
// greet.apply(actress, ["Good Evening", "Ms"])

// let greetActorBinded = greet.bind(actor, "Good Morning") // bind arguments (like in call), but these will never be possible to reassign
// let greetActressBinded = greet.bind(actress)

// greetActorBinded("Mr")
// greetActressBinded("Good Evening", "Ms")



// 4 >>> Ключове слово new

// function createActor(fullName, films) {
//     // this = {}
//     this.fullName = fullName
//     this.films = films

//     // return this
// }

// let Mattew = new createActor("Mattew McConahee", ["True Detective", "Interstellar"])
// console.log('Mattew:', Mattew)
// // When calling function by **new**, it automatically creates and returns newly created object, which can be referred to as **this** (when running the function, inside the function). If nothing assigned into object by doing this[key] (this.key works too), will just return an empty object



// 1 >>> 

// function func() {
//     console.log(this)
// }
// func()

// 2 >>>

// let obj = {
//     id: 123,
//     getId() {
//         return this.id
//     },
// }

// obj.getId()

// 3 >>>

// let user = {
//     fullName: "Chak Norris",
// }

// function getFullName() {
//     return this.fullName
// }

// getFullName.call(user)
// getFullName.apply(user)

// let getFullNameBinded = getFullName.bind(user)
// getFullNameBinded()

// 4 >>> new
// function createUser(fullName) {
//     this.fullName = this.fullName
// }

// let newUser = new createUser("Chack Norris")

// Arrow Function

// let group = {
//     course: "Basic JavaScript",
//     students: ["Vasyl", "Dmitro", "Timofey"],
    // getStudentsInfo() { // this wont work, because functions have their own this, and that callback function inside, is a function, so it does LOSE our this
    //     this.students.forEach(function(student, index, originalArray) {
    //         console.log(`Student of group ${this.course} #${index} ~ ${student}`)
    //     })
    // },
    // ways of using default functions, with this:
    // getStudentsInfo() {
    //     const that = this
    //     this.students.forEach(function(student, index, originalArray) {
    //         console.log(`Student of group ${that.course} #${index} ~ ${student}`)
    //     })
    // },
    // getStudentsInfo() {
    //     this.students.forEach(function(student, index, originalArray) {
    //         console.log(`Student of group ${this.course} #${index} ~ ${student}`)
    //     }).bind(this)
    // },









    // getStudentsInfo() { // this works, because arrow functions dont have their own this, that way they are NOT LOSING the previous this
    //     this.students.forEach((student, index, originalArray) => {
    //         console.log(`Student of group ${this.course} #${index} ~ ${student}`)
    //     })
    // },
    // arrowFn: () => {
    //     console.log(this)
    // },
    // usualFn: function () {
    //     console.log(this)
    // }
// }

// group.getStudentsInfo()
// group.arrowFn()
// group.usualFn()

// console.log(this) // Makes it possible to get LOTS of Properties of users window (screen)


// let actor = {
//     firstName: "Leonardo",
//     lastName: "Dicaprio"
// }

// let actress = {
//     firstName: "Margo",
//     lastName: "Robbie"
// }

// function getFullName() {
//     return`${this.firstName} ${this.lastName}`
// }

// function greet(msg, type) {
//     console.log(`${msg} ${type} ${getFullName.call(this)}`)
// }

// function bind(fn, thisContext, ...bindArguments) { // this context and bind arguments that cannot be unbinded
//     return function(...defaultArguments) {
//         return fn.apply(thisContext, bindArguments.concat(defaultArguments))
//     }
// }

// const leoBinded = bind(greet, actor, "Good Morning")
// const margoBinded = bind(greet, actress)

// leoBinded("Mr")
// margoBinded("G'day", "Ms")


// function sum(a, b) {
//     console.log(a + b)
// }

// function sqrt(a) {
//     console.log(a ** 2)
// }

// function decoratorHello(fn) {
//     return function(...args) {
//         console.log("Hello")

//         fn(...args)
//     }
// }

// const sumHello = decoratorHello(sum)
// const sqrtHello = decoratorHello(sqrt)

// sumHello(2, 4)
// sqrtHello(8)

// function bind(fn, thisContext, ...bindArguments) { // this context and bind arguments that cannot be unbinded
//     return function(...defaultArguments) {
//         return fn.apply(thisContext, [...bindArguments, ...defaultArguments])
//     }
// }