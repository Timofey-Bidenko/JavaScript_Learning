// randomDelayPrint. Створіть функцію randomDelayPrint, яка прийматиме рядок message як аргумент і виводитиме кожну букву цього рядка з довільною затримкою від 0 до 1 секунди. Використовуйте setTimeout, щоб додати випадкову затримку перед виведенням кожної літери.

function randomDelayPrint(stringToPrint) {
    if(typeof(stringToPrint) !== "string" || !stringToPrint) return;
    let totalDelays = 0
    for (let i = 0; i < stringToPrint.length; i++) {
        const thisDelay = Math.random() * 1000 // * 1000 to convert seconds into milliseconds
        totalDelays += thisDelay
        setTimeout(() => {
            console.log(stringToPrint[i])
        }, totalDelays)
    }
}

// randomDelayPrint("Hello")



// debounce. Створіть функцію debounce, яка приймає функцію зворотного виклику і затримку (в мілісекундах) як аргументи. Функція debounce повинна повертати нову функцію, яка викликає вихідну функцію тільки після того, як минула вказана кількість часу без викликів. Це дасть змогу ігнорувати часті виклики функції та виконувати її лише один раз через зазначену затримку після останнього виклику.

function debounce(cb, delay) {
    let debounceValue = false
    return function() {
        console.log("Trying to execute ~ " + (debounceValue ? "Failed :(   Cooldown is still on, need to wait" : "Success!"))
        if (debounceValue) return; // The cooldown (debounce) did not end yet, dont execute.
        debounceValue = true
        setTimeout(() => {
            debounceValue = false
        }, delay)
        cb()
    }
}

// const expensiveOperation = () => console.log("Виконую складну операцію...");
// const debouncedExpensiveOperation = debounce(expensiveOperation, 1000)
// debouncedExpensiveOperation()
// debouncedExpensiveOperation()
// debouncedExpensiveOperation()

// setTimeout(() => {
//     debouncedExpensiveOperation()
//     debouncedExpensiveOperation()
//     debouncedExpensiveOperation()
// }, 2000);



// intervalRace Створіть функцію intervalRace, яка прийматиме масив функцій та інтервал часу t у мілісекундах. Функція intervalRace має викликати кожну функцію з масиву по черзі через заданий інтервал часу t. Коли всі функції виконано, intervalRace має повернути масив із результатами.

function intervalRace(arrayWithFunctions, t, cb) {
    const results = []
    let i = 0
    setTimeout(function run() {
        if (i >= arrayWithFunctions.length) {
            cb(results)
            return
        }
        results.push(arrayWithFunctions[i]())
        i++
        setTimeout(run, t)
    }, t)
}

// Test functions
function task1() {
    console.log("Task 1 executed");
    return "Result of Task 1";
}

function task2() {
    console.log("Task 2 executed");
    return "Result of Task 2";
}

function task3() {
    console.log("Task 3 executed");
    return "Result of Task 3";
}

function printResult(toPrint) {
    console.log(toPrint);
}

// Test intervalRace
const tasks = [task1, task2, task3]; // Array of functions
const interval = 1000; // Interval of 1 second between function calls

// UNCOMMENT ME TO CHECK THE RESULTS!!! ⤵️⤵️⤵️
// intervalRace(tasks, interval, printResult)