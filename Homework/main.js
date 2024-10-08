// Напишіть функцію, яка рекурсивно обчислює n-те число Фібоначчі. Числа Фібоначчі визначаються як послідовність, у якій кожне число дорівнює сумі двох попередніх чисел (наприклад, 0, 1, 1, 2, 3, 5, 8 і так далі). Використовуйте рекурсію для обчислення чисел Фібоначчі.

function fib(n) {
    if (n === 0) {
        return n // n
    } else if (n <= 2) {
        return 1
    } else {
        return fib(n-1) + fib(n-2)
    }
}

// for (let i = 0; i <= 20; i++) {
//     console.log(fib(i))
// }

// Попрацюємо з числовим паліндромом. Числовий паліндром — це натуральне число, яке читається зліва направо і справа наліво однаково. Інакше кажучи, відрізняється симетрією запису (розташування цифр), причому число знаків може бути як парним, так і непарним. Але. Паліндром можна отримати як результат операцій над іншими числами. Візьмемо будь-яке натуральне число і складемо його зі зворотним числом, тобто записаним тими самими цифрами, але у зворотному порядку. Проробимо ту саму дію з сумою, що вийшла, і будемо повторювати її доти, доки не утвориться паліндром. Іноді достатньо зробити всього один крок (наприклад, 312 + 213 = 525), але, як правило, потрібно не менше двох. Скажімо, число 96 породжує паліндром 4884 тільки на четвертому кроці.... Вам потрібно написати функцію, яка повертатиме об'єкт, де буде властивість result і це буде паліндром, і властивість steps — це число викликів до знаходження паліндрома. Для того, щоб перевірити себе використовуйте число 196. Це так зване Lychrel number — число яке немає поліндрому

function calcNumberPalindrome(n, c = 0) {
    if (n === 196) {
        return "No number plaindrome for 196 (Lychrel number)"
    }
    const strN = n.toString()
    const revStrN = strN.split("").reverse().join("")
    if (strN === revStrN) {
        return {
            result: n,
            steps: c,
        }
    } else {
        return calcNumberPalindrome(n + Number(revStrN), c + 1)
    }
}

// console.log(calcNumberPalindrome(312))
// console.log(calcNumberPalindrome(96))
// console.log(calcNumberPalindrome(396))
// console.log(calcNumberPalindrome(196))

// Напишіть функцію, яка приймає масив унікальних елементів і генерує всі можливі перестановки цього масиву. Використовуйте рекурсію для знаходження всіх перестановок. Наприклад, якщо вхідний масив [1, 2, 3], функція має повернути масив, що містить [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2] і [3, 2, 1].

function getEveryPossibleCombo(array, moveBy = 0, result = []) {
    if (moveBy === array.length) {
        return result
    }

    let newArray = []

    for (let i = -moveBy; i < array.length - moveBy; i++) {
        if (i < 0) {
            newArray.push(array[array.length + i])
        } else {
            newArray.push(array[i])
        }
    }

    result.push(newArray, newArray.toReversed())
    return getEveryPossibleCombo(array, moveBy + 1, result)
}

// console.log(getEveryPossibleCombo([1, 2, 3]))

// cycle by moving +1
// [1, 2, 3]
// [3, 1, 2]
// [2, 3, 1]

// cycle by moving +1, but its a reversed version
// [3, 2, 1]
// [1, 3, 2]
// [2, 1, 3]

// cycles by moving +1 work very well to get every combo of an unique elemnts array