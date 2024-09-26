function getPrimeNumbers(array) {
    if (!Array.isArray(array)) return "[getPrimeNumbers] >>> Array type argument is expected.";

    // code V2 here. V1 commented below.
    return array.map(Num => parseInt(Num)).filter(N => { // Num/N >>> element, just like in .forEach

        if (isNaN(N) || typeof(N) !== "number") return false; // filter all non-numeric values of given array out!

        if (N === 2 || N === 5) return true; // exceptions along all of the existing prime numbers

        // use of older code >>> https://github.com/Timofey-Bidenko/JavaScript_Learning/blob/%234/Homework/main.js <<<
        // the older code was redisigned a little

        if (N > 1 && N % 2 === 1) {
            const stringifiedNumber = N.toString()
            
            const lastNumberSymbol = Number(stringifiedNumber[stringifiedNumber.length - 1])
            const mightBePrime = lastNumberSymbol !== 5
            if (mightBePrime) {
                for (let i = 2; i <= Math.sqrt(N); i += 1) {
                    if (N % i === 0) return false;
                }
            } else return false;
        } else return false;
 
        return true
    })


    // This code (commented, on the bottom) works right, but runs parseInt() twice (V1 of it in Pro version, just left here so there are no questions why map first and then filter in V2)
    /* 

    return array.filter(Num => { // Num >>> element, just like in .forEach
        const N = parseInt(Num) // try to get full numbers from float number values or numeric strings

        if (isNaN(N) || typeof(N) !== "number") return false; // filter all non-numeric values of given array out!

        if (N === 2 || N === 5) return true; // exceptions along all of the existing prime numbers

        // use of older code >>> https://github.com/Timofey-Bidenko/JavaScript_Learning/blob/%234/Homework/main.js <<<
        // the older code was redisigned a little

        if (N > 1 && N % 2 === 1) {
            const stringifiedNumber = N.toString()
            
            const lastNumberSymbol = Number(stringifiedNumber[stringifiedNumber.length - 1])
            const mightBePrime = lastNumberSymbol !== 5
            if (mightBePrime) {
                for (let i = 2; i <= Math.sqrt(N); i += 1) {
                    if (N % i === 0) return false;
                }
            } else return false;
        } else return false;
 
        return true
    }).map(Num => parseInt(Num)) // Turn all of the filtered floats/numeric strings that were filtered as Prime numbers into integers.
    */
}

function getNotifications(object) {
    if (typeof(object) !== "object" || object === null) return "[getNotifications] >>> Object/Array type argument is expected.";
    let arrayToGroup = []

    // Leave out all invalid Instances inside main object
    for (i in object) {
        if (typeof(object[i]) === "object" && ["source"] in object[i]) arrayToGroup.push(object[i]);
        else console.log(`[getNotifications] >>> Instance at index "${i}" is either not an object type or does not have "source" property in it. It was left out.`);
    }

    // sort every valid Instance inside main object by date
    const sortedByDate = arrayToGroup.sort(function(a, b) {
        if (!("date" in a) || !("date" in b)) return 0; // Dont sort if date not there in a or b
        if (typeof(a.date) !== "string" || typeof(a.date) !== "string") return 0; // Dont sort if date given in wrong format in a or b
        if (a.date.split("-").length !== 3 || b.date.split("-").length !== 3) return 0; // Dont sort if date not full in a or b
        const aDateNum = Number(a.date.split("-").reverse().join(""))
        const bDateNum = Number(b.date.split("-").reverse().join(""))
        // example conversion > "11-09-2024" >>> ["11", "09", "2024"] >>> ["2024", "09", "11"] >>> "20240911" >>> 20240911 (number)
        if (!isFinite(aDateNum) || !isFinite(bDateNum)) return 0; // Dont sort if date not converted to numbers in valid way
        return aDateNum > bDateNum ? 1 : aDateNum === bDateNum ? 0 : -1
    })

    // group every valid Instance + have it sorted by date because of previous sort. Return all that.
    return Object.groupBy(sortedByDate, object => object.source)
}

function group(object, groupBy) {
    if (typeof(object) !== "object" || object === null) return "[group] >>> Argument #1 is expected to be object/array type.";
    if (typeof(groupBy) !== "string" || !Boolean(groupBy)) return "[group] >>> Argument #2 is expected to be string type with length >= 1."

    let newObject = {}

    for (i in object) {
        if (typeof(object[i]) === "object" && groupBy in object[i]) {
            const element = object[i]
            if (element[groupBy] in newObject) {
                newObject[element[groupBy]].push(element)
            } else {
                newObject[element[groupBy]] = [element]
            }
        } else console.log(`[group] >>> Instance at index "${i}" is either not an object type or does not have "${groupBy}" property in it. It was left out.`);
    }

    return newObject
}

/* 
let arrayZeroToHundred = ["str", "2.22", "5.33"]
for (let i = 0; i < 100; i++) {
    arrayZeroToHundred.push(i)
}

console.log(arrayZeroToHundred)

console.log(getPrimeNumbers(arrayZeroToHundred))
*/

/* 
const notifArray = [
    { source: "chrome", text: "New update available", date: "11-09-2024" },
    { source: "telegram", text: "You have a new message", date: "15-09-2024" },
    { source: "instagram", text: "New follower alert", date: "18-09-2024" },
    { source: "facebook", text: "Friend request from John", date: "11-09-2024" },
    { source: "system", text: "Software update failed", date: "14-09-2024" },
    { source: "telegram", text: "Group chat updated", date: "12-09-2024" },
    { source: "instagram", text: "New like on your post", date: "16-09-2024" },
    { text: "Not sourced", date: "18-09-2024" },
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
];

const notifObject = {};
for (i in notifArray) {
    notifObject["#" + i + "index"] = notifArray[i]
}
*/
// console.log(getNotifications(notifArray))
// console.log(getNotifications(notifObject))

// console.log(group(notifArray, "source"))
// console.log(group(notifObject, "source"))