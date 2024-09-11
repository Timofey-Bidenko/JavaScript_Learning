// RCRTIB >>> Run Code Real Time In Browser 
// (Barebones / No GUI / Propmt-Console Only)
while (true) {
    const result = prompt("Try to run your code!")
    if (result === null) {
        break
    } else if (result === "/space") {
        console.log(`
            s
            p
            a
            c
            e
            `)
        continue
    }
    try {
        eval(result)
    } catch (error) {
        console.log(error)
    }
}