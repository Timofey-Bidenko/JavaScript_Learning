function getPrimeNumbers(array) {
    return array.filter(N => { // N >>> element, just like in .foreach

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
}

function getNotifications(array) {
    return Object.groupBy(array, object => object.source)
}

function group(array, groupBy) {
    let object = {}
    array.forEach(element => {
        // console.log(element[groupBy] in object, object[element[groupBy]])
        // console.log(!(element[groupBy] in object) ? `${element[groupBy]} was added!` : `${element[groupBy]} already there YaY`)
        if (element[groupBy] in object) {
            object[element[groupBy]].push(element)
        } else {
            object[element[groupBy]] = [element]
        }
        // console.log((element[groupBy] in object) ? object[element[groupBy]].length : "Uh oh, lenght 0! (This never happens if code works right)")
    });
    return object
}

/*
let arrayZeroToHundred = []
for (let i = 0; i < 100; i++) {
    arrayZeroToHundred.push(i)
}

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
*/

// console.log(getNotifications(notifArray))

// console.log(group(notifArray, "source"))