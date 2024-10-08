// No changes in code since V0.9, currently V1 (Clarification applied)
// #1
// Вам необхідно використовувати масив нотифікацій з минулих занять. До отриманого під час групування об'єкта notifications, вам необхідно додати ітератор, щоб під час перебору в циклі for of ми отримували кожен елемент із вкладених списків об'єкта notifications таким чином, немов працюємо з "плоским" масивом.

const notifArray = [
    { source: "chrome", text: "New update available", date: "11-09-2024" },
    { source: "telegram", text: "You have a new message", date: "15-09-2024" },
    { source: "instagram", text: "New follower alert", date: "18-09-2024" },
    { source: "facebook", text: "Friend request from John", date: "11-09-2024" },
    { source: "system", text: "Software update failed", date: "14-09-2024" },
    { source: "telegram", text: "Group chat updated", date: "12-09-2024" },
    { source: "instagram", text: "New like on your post", date: "16-09-2024" },
    { source: "system", text: "Battery running low", date: "17-09-2024" },
    { source: "chrome", text: "Clear cache reminder", date: "13-09-2024" },
    { source: "telegram", text: "New voice message", date: "18-09-2024" },
    { source: "whatsapp", text: "New message in family group", date: "11-09-2024" },
    { source: "system", text: "Wi-Fi network connected", date: "12-09-2024" },
    { source: "twitter", text: "New mention from @user123", date: "15-09-2024" },
    { source: "facebook", text: "Event invitation", date: "17-09-2024" },
    { source: "system", text: "Storage running low", date: "14-09-2024" },
    { source: "telegram", text: "File download complete", date: "17-09-2024" },
    { source: "instagram", text: "New story update", date: "23-09-2024" },
    { source: "facebook", text: "Friend suggested", date: "11-09-2024" },
    { source: "spotify", text: "New music release", date: "13-09-2024" },
    { source: "system", text: "New device connected", date: "16-09-2024" },
    { source: "whatsapp", text: "Photo received from friend", date: "15-09-2024" },
    { source: "instagram", text: "Live video notification", date: "14-09-2024" },
    { source: "facebook", text: "Memory from 2 years ago", date: "16-09-2024" },
    { source: "youtube", text: "New video uploaded", date: "19-09-2024" },
    { source: "telegram", text: "Profile picture updated", date: "13-09-2024" },
    { source: "system", text: "Update installation pending", date: "15-09-2024" },
    { source: "instagram", text: "Post saved by user", date: "15-09-2024" },
    { source: "facebook", text: "Your story update", date: "20-09-2024" },
    { source: "whatsapp", text: "Video call missed", date: "12-09-2024" },
    { source: "system", text: "Bluetooth turned on", date: "14-09-2024" },
    { source: "twitter", text: "Someone liked your tweet", date: "22-09-2024" },
    { source: "youtube", text: "Your video got a comment", date: "23-09-2024" },
    { source: "spotify", text: "Your playlist was updated", date: "18-09-2024" },
    { source: "chrome", text: "Security warning detected", date: "12-09-2024" },
    { source: "system", text: "Device overheating warning", date: "19-09-2024" },
    { source: "whatsapp", text: "New voice message", date: "22-09-2024" },
    { source: "instagram", text: "Message request", date: "12-09-2024" },
    { source: "twitter", text: "Trending tweet alert", date: "20-09-2024" },
    { source: "youtube", text: "New live stream started", date: "21-09-2024" },
    { source: "facebook", text: "Group post liked", date: "18-09-2024" },
]

const notifObj = Object.groupBy(notifArray, object => object.source)

notifObj[Symbol.iterator] = function() {
    const flattenedArray = []

    for (const key in this) { // keys of main Object
        for (const kkey in this[key]) { // keys of object Arrays (Arrays with objects inside)
            for (const kkkey in this[key][kkey]) { // keys of objects that are inside arrays
                flattenedArray.push(kkkey, this[key][kkey][kkkey])
            }
        }
    }

    let i = 0
    return {
        next() {
            if (i < flattenedArray.length) {
                return { value: flattenedArray[i++], done: false }
            } else {
                return { value: null, done: true }
            }
        }
    }
}

// for (const element of notifObj) {
//     console.log("element:", element)
// }





// #2
// Вам необхідно реалізувати функцію memoize(fn), яка приймає вхід функцію і додає їй можливість кешування результатів виконання, щоб уникнути повторних обчислень. Це означає, що в разі, коли функція викликається з однаковими параметрами, то результат необхідно брати з кешу. (Тільки примітиви у параметрах та використовуйте Map)
// ✅ >>> Line 93 - 126 <<< function memorize(fn) { ... }

// Встановіть обмеження на розмір кеша у вигляді числа N. Якщо це значення перевищено, то вам необхідно перезаписати перше значення, потім друге і так далі.
// ✅ >>> Line 88 + 118 <<< const cacheLimit = 10 + if (map.size > cacheLimit) { ... }

// Додайте перевірку, щоб прибрати дублікати результатів із кешу.
// ✅ >>> Line 108 <<< if (map.has(key)) { ... } // Не додавав перевірку, бо нема потреби. Кешуватися будуть тільки "нові" значення. "нові" - це ті, які не існують у списку кешу на момент виконання функції.

const MemorizedFunctionMaps = {}

const cacheLimit = 10 // cache limit for each individual function
let lastRewrittenValueNum = 0
const showExecutionTimeInSeconds = false
const usePerformanceForMeasuring = false

function memorize(fn) {
    function closeExecutionTime(start) {
        const end = usePerformanceForMeasuring ? performance.now() : Date.now()
        return showExecutionTimeInSeconds ? `${ ( (end - start) / 1000 ).toPrecision(4) }s` : `${ end - start }ms`
    }

    const map = MemorizedFunctionMaps[fn.name] || new Map() // get map of function (its name), if failed (undefined) > create map for function (its name)
    MemorizedFunctionMaps[fn.name] = map // reassign map, basically needed to save the newly created one, and does not affect anything when reassinging the one that exists

    return function(...args) {
        const start = usePerformanceForMeasuring ? performance.now() : Date.now()

        // console.log(args, map, map.has(args)) // Debug
        const key = args.join(">.<")

        if (map.has(key)) {
            // Return from cache
            return {"Execution Time": closeExecutionTime(start), "Result(s)": map.get(key)}
        } else {
            // calculate result
            const result = fn(...args)

            // Cache result
            map.set(key, result)

            if (map.size > cacheLimit) {
                // ALWAYS Deleting first key and its value // 
                map.delete(map.keys().next().value) // map.delete(map.keys().next().value) >>> First key
            }

            return {"Execution Time": closeExecutionTime(start),"Result(s)": result}
        }
    }
}

function generatePineTree(TreeHeight) {
    let str = ``
    for (let i = 1; i <= TreeHeight; i += 1) {
        let newLine = ""
        for (let space = 1; space <= TreeHeight - i; space += 1) {
            newLine += " "
        }
        for (let star = 1; star <= 1 + (i-1)*2; star += 1) {
            newLine += "*"
        }
        
        str += `
        ${newLine}`
    }
    return str
}

const memorizedGeneratePineTree = memorize(generatePineTree) // preset for testing (returns a function )

/* // Testing // */
const pow = 3

for (let i = 0; i < 20; i++) {
    // console.log(memorizedGeneratePineTree(i%2+10**pow))
    /* // OR // */
    // const result = memorizedGeneratePineTree(i%2+10**pow)
    // console.log(result["Execution Time"], result["Result(s)"])
}