const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || /Mobi|Android|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry/i.test(navigator.userAgent)

// Required for modals

const MM = document.getElementById("mainModal")
const SM = document.getElementById("secondaryModal")
const closeSMBtn = document.getElementById("closeSecondaryModal")
const root = document.documentElement

let sModalOpen = false

// modals
function openMainModal() {
    MM.classList.remove("none")
}

openMainModal()

function openSecModal() {
    root.style.setProperty("--secModalClosed", "0")
    sModalOpen = true
    SM.classList.remove("none")
}

function closeSecModal() {
    root.style.setProperty("--secModalClosed", "1")
    SM.classList.add("none")
    sModalOpen = false
}
closeSecModal()



const secondaryOverlay = document.getElementById("secondaryOverlay")
const deletePrompt = document.getElementById("deletePrompt")
const infoPrompt = document.getElementById("infoPrompt")

let currentlyOpenedModal = null

function closeOverlay() {
    secondaryOverlay.classList.add("none")
}
function closeAllPrompts(closePromptsOverlay = false) {
    currentlyOpenedModal = null
    deletePrompt.classList.add("none")
    infoPrompt.classList.add("none")
    if (closePromptsOverlay) {
        closeOverlay()
    } else {
        secondaryOverlay.classList.remove("none")
    }
}
function openDeletePrompt() {
    closeAllPrompts()
    deletePrompt.classList.remove("none")
    currentlyOpenedModal = deletePrompt
}
function openInfoPrompt() {
    closeAllPrompts()
    infoPrompt.classList.remove("none")
    currentlyOpenedModal = infoPrompt
}

secondaryOverlay.addEventListener('click', function (event) {
    if (!currentlyOpenedModal) {
        closeOverlay() 
        return
    }
    const rect = currentlyOpenedModal.getBoundingClientRect() // get the bounding box of the modal

    const mouseX = event.clientX
    const mouseY = event.clientY

    // Check if mouse is inside the element
    const isInside = mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom

    if (!isInside) {
        closeOverlay()
    }
})



let totalNotes = 0

class Note {
    #name = ""

    constructor(name) {
        this.id = ++totalNotes
        this.#name = typeof(name) === "string" && name ? name : `Unnamed${this.id}`
        this.creationDate = new Date().toLocaleString()
        this.lastRedactionDate = this.creationDate
        this.todos = []
    }

    set name(newName) {
        this.#name = typeof(newName) === "string" && newName ? newName : `Unnamed${this.id}`
    }
    get name() {return this.#name}

    #indexExists(i) {
        return i in this.todos && this.todos[i] !== null
    }

    addTodo(content) {
        if (!(typeof(String(content)) === "string" && content)) return false;

        this.todos.push({todo: String(content), completed: false})
        return this.todos.length - 1
    }
    editTodo(todoIndex, newContent) {
        if (!(typeof(String(newContent)) === "string" && newContent)) return;
        if (!this.#indexExists(todoIndex)) return;
        this.todos[todoIndex]({todo: String(newContent), completed: this.todos[todoIndex]["completed"]})
    }
    setTodoStatus(todoIndex, newStatus) {
        if (!this.#indexExists(todoIndex)) return;

        this.todos[todoIndex]["completed"] = newStatus
    }
    removeTodo(todoIndex) {
        if (!this.#indexExists(todoIndex)) return;

        const temp = this.todos
        this.todos = []
        temp.forEach( (td, index) => {
            if (index !== todoIndex) {
                this.todos.push(td)
            }
        })
    }
    getAmountsByStatus() {
        let completed = 0
        this.todos.forEach( (td) => {
            completed += (td["completed"] === true ? 1 : 0)
        })
        return {done: completed, left: this.todos.length - completed}
    }

    getAllInfos() {
        const temp = this.getAmountsByStatus()
        const doneP = temp["done"] > 0 && this.todos.length > 0 ? `(${Math.round( (temp["done"] / this.todos.length) * 10000) / 100}%)` : "(0%)"
        const leftP = temp["left"] > 0 && this.todos.length > 0 ? `(${Math.round( (temp["left"] / this.todos.length) * 10000) / 100}%)` : "(0%)"
        return {
            ["Note Id"]: this.id,
            ["Note Name"]: this.#name,
            ["Creation Date"]: this.creationDate,
            ["Last Edited Date"]: this.lastRedactionDate,
            ["Total To-Do's"]: this.todos.length,
            ["To-Do's Done"]: `${temp["done"]} / ${this.todos.length} ${doneP}`,
            ["To-Do's Left"]: `${temp["left"]} / ${this.todos.length} ${leftP}`,
        }
    }
}

const notes = {}
let lastOpenedId
let todosCreatedInputs = []

const createNote = document.getElementById("createNote")
const noteListChildTemplate = document.getElementById("noteListChildTemplate")
const nameField = document.getElementById("setName")
const todoTemplate = document.getElementById("todoTemplate")
const addToDo = document.getElementById("addToDo")
const secMTitle = document.getElementById("secMTitle")
const infoboxTemplate = document.getElementById("infoboxTemplate")

const genStuff = []
const genInfs = []

function createInstance(cloneFrom, permanent = false, newParent = null, pushTo = genStuff) {
    const instanceNew = cloneFrom.cloneNode(true)
    newParent = newParent === null ? cloneFrom.parentElement :newParent
    newParent.appendChild(instanceNew)
    instanceNew.classList.remove("none")

    if (!permanent) {
        pushTo.push(instanceNew)
    }

    return instanceNew // return cloned instance for further editing/connecting events
}

function saveCurrentNote(deleteIfEmpty = true) {
    if (!(lastOpenedId in notes)) return;

    const n = notes[lastOpenedId].noteClass
    n.todos = []

    for (let i = 0; i < todosCreatedInputs.length; i++) {
        if (i === 0) {
            n.name = todosCreatedInputs[i].value
            continue
        }
        if (todosCreatedInputs[i].classList.contains("DeletedOne")) continue;
        const addSuccess = n.addTodo(todosCreatedInputs[i].value)
        
        if (typeof(addSuccess) === "number") {
            n.setTodoStatus(addSuccess, todosCreatedInputs[i].parentElement.classList.contains("done"))
        }
    }

    n.lastRedactionDate = new Date().toLocaleString()

    sortNotesByParams()

    if (deleteIfEmpty) {
        const forCheck = n.getAmountsByStatus()
        if (forCheck["done"] === 0 && forCheck["left"] === 0) {
            notes[lastOpenedId].noteDOM.remove()
            delete notes[lastOpenedId]
        }
    }
}

function reloadNote(noteToOpen = null) {
    openSecModal() // open the secondary modal where the magic happens
    if (lastOpenedId === noteToOpen) return;
    // clear everything that was generated previously
    saveCurrentNote()
    todosCreatedInputs = []
    genStuff.forEach( (instance) => {
        instance.remove()
    })

    let n
    let noteOverview

    if (noteToOpen === null) { // generate new note
        n = new Note()
        noteOverview = createInstance(noteListChildTemplate, true)
        noteOverview.addEventListener("click", function () {
            reloadNote(n.id)
        })
        notes[n.id] = {noteClass: n, noteDOM: noteOverview}
    } else if (noteToOpen in notes) { // load the existing note
        n = notes[noteToOpen].noteClass
        noteOverview = notes[noteToOpen].noteDOM
    } else return;

    const newNameInput = createInstance(nameField)
    const inp = newNameInput.querySelector("input")
    inp.value = n.name === `Unnamed${n.id}` ? "" : n.name

    function updateText() {
        n.name = inp.value
        secMTitle.innerText = n.name
        noteOverview.querySelector("h4").innerText = n.name
    }
    updateText()

    inp.addEventListener("input", updateText)
    todosCreatedInputs.push(inp)

    function addTodoElement(content = "", isDone = false) {
        
        const newTodo = createInstance(todoTemplate)
        let done = isDone ? 0 : 1
        const input = newTodo.querySelector("input")
        input.value = content
        todosCreatedInputs.push(input)

        const d = newTodo.querySelector("div")
        const del = newTodo.querySelectorAll("div")[1]

        function toggle() {
            done++
            if (done % 2 === 1) {
                d.classList.remove("xIcon")
                d.classList.add("cIcon")
                newTodo.classList.add("done")
            } else {
                d.classList.add("xIcon")
                d.classList.remove("cIcon")
                newTodo.classList.remove("done")
            }
            saveCurrentNote(false)
        }
        toggle()
        
        d.addEventListener("click", toggle)

        del.addEventListener("click", function() {
            input.classList.add("DeletedOne")
            newTodo.remove()
            saveCurrentNote(false)
        })
    }
    
    if (n.todos.length > 0) {
        n.todos.forEach( (tdInfo) => {
            addTodoElement(tdInfo.todo, tdInfo.completed)
        })
    } else {
        addTodoElement()
    }

    const atd = createInstance(addToDo)
    atd.addEventListener("click", function () {
        if (todosCreatedInputs.slice(1).every((input) => (typeof(input.value) === "string" && input.value) || input.classList.contains("DeletedOne"))) {
            addTodoElement()
        }
    })

    lastOpenedId = n.id
}

document.getElementById("deleteNote").addEventListener("click", function() {
    saveCurrentNote() // note will be auto deleted, if empty

    if (lastOpenedId in notes) { // if note still there, this means its not deleted and has some contents, prompt deletion
        openDeletePrompt() 
        return
    }
    
    closeSecModal()
})

document.getElementById("deleteNoteConfirmed").addEventListener("click", function() {
    if (lastOpenedId in notes) {
        notes[lastOpenedId].noteDOM.remove()
        delete notes[lastOpenedId]
    }
    closeSecModal()
    closeOverlay()
})

document.getElementById("noteInfo").addEventListener("click", function() { //load note info
    if (lastOpenedId in notes) {
        genInfs.forEach( (instance) => {
            instance.remove()
        })

        saveCurrentNote(false)
        const n = notes[lastOpenedId].noteClass
        const allInfos = n.getAllInfos()
        for (const key in allInfos) {
            const infBox = createInstance(infoboxTemplate, false, null, genInfs)
            infBox.querySelector("h2").innerText = key
            infBox.querySelector("h3").innerText = allInfos[key]
        }
        openInfoPrompt()
    }
})

document.getElementById("closeInfoPrompt").addEventListener("click", closeOverlay)

createNote.addEventListener("click", () => {
    reloadNote()
})

closeSMBtn.addEventListener("click", function() {
    saveCurrentNote()
    closeSecModal()
})



const mainSearch = document.getElementById("mainSearchInput")

function searchFilter() {
    const searchingFor = mainSearch.value
    if (searchingFor) { // show by given string clue
        for (const key in notes) {
            const value = notes[key]
            if (value.noteClass.name.toLowerCase().indexOf(searchingFor.toLowerCase()) === -1) {
                value.noteDOM.classList.add("none")
            } else {
                value.noteDOM.classList.remove("none")
            }
        }
    } else { // show all, since no string clue given
        for (const key in notes) {
            notes[key].noteDOM.classList.remove("none")
        }
    }
}





const primarySelect = document.getElementById("primarySelect")
const categorySelect = document.getElementById("categorySelect")
const subCategorySelect = document.getElementById("subCategorySelect")

if (isMobile) {
    primarySelect.parentElement.classList.remove("fTitle")
    primarySelect.parentElement.classList.add("fMTitle")
}

function applyCoolBorderRadius(amount = 1) {
    document.documentElement.style.setProperty("--amountOfSelects", amount)
    if (amount === 1) {
        primarySelect.style.setProperty("border-radius", "8px")
    } else if (amount === 2) {
        primarySelect.style.setProperty("border-radius", isMobile ? "8px 8px 0px 0px" : "8px 0px 0px 8px")
        categorySelect.style.setProperty("border-radius", isMobile ? "0px 0px 8px 8px" : "0px 8px 0px 0px")
    } else if (amount === 3) {
        primarySelect.style.setProperty("border-radius", isMobile ? "8px 8px 0px 0px" : "8px 0px 0px 8px")
        categorySelect.style.setProperty("border-radius", "0px")
        subCategorySelect.style.setProperty("border-radius", isMobile ? "0px 0px 8px 8px" : "0px 8px 8px 0px")
    }
}

function primarySelectionChange() {
    const curVal = primarySelect.value

    if (curVal === "comp") {
        primarySelect.classList.add("textShadowCyan")
        subCategorySelect.innerHTML = `
            <option value="percentage">Percentage Done</option>
            <option value="amount">Amount Done</option>
        `
        categorySelect.innerHTML = `
            <option value="highToLow">High to Low</option>
            <option value="lowToHigh">Low to High</option>
        `
        applyCoolBorderRadius(3)
        categorySelect.classList.remove("none")
        subCategorySelect.classList.remove("none")

    } else if (curVal === "date") {
        primarySelect.classList.add("textShadowGreen")
        subCategorySelect.innerHTML = `
            <option value="lastEdited">Last Edited</option>
            <option value="creation">Creation Date</option>
        `
        categorySelect.innerHTML = `
            <option value="newest">Newest to Oldest</option>
            <option value="oldest">Oldest to Newest</option>
        `
        applyCoolBorderRadius(3)
        categorySelect.classList.remove("none")
        subCategorySelect.classList.remove("none")

    } else {
        primarySelect.classList.remove("textShadowCyan", "textShadowGreen")
        categorySelect.classList.add("none")
        subCategorySelect.classList.add("none")
        applyCoolBorderRadius(1)
    }

    sortNotesByParams()
}

function sortNotesByParams() {
    const sortBy = primarySelect.value
    const order = categorySelect.value
    const subOrder = subCategorySelect.value

    if (sortBy === "comp") {
        const sortedNotes = Object.values(notes).sort((a, b) => {
            const aCompletion = subOrder === "percentage" ? a.noteClass.getAmountsByStatus().done / a.noteClass.todos.length || 0 : a.noteClass.getAmountsByStatus().done
            const bCompletion = subOrder === "percentage" ? b.noteClass.getAmountsByStatus().done / b.noteClass.todos.length || 0 : b.noteClass.getAmountsByStatus().done
            return order === "highToLow" ? bCompletion - aCompletion : aCompletion - bCompletion
        })

        sortedNotes.forEach( (note, index) => {
            note.noteDOM.style.order = index
        })
        createNote.style.setProperty("order", `${sortedNotes.length + 99}`)
    } else if (sortBy === "date") {
        const sortedNotes = Object.values(notes).sort((a, b) => {
            const aDateStrings = subOrder === "creation" ? a.noteClass.creationDate.split(", ") : a.noteClass.lastRedactionDate.split(", ")
            const bDateStrings = subOrder === "creation" ? b.noteClass.creationDate.split(", ") : b.noteClass.lastRedactionDate.split(", ")
            
            const aDateYMDHMS = aDateStrings[0].split("/").reverse().join("") + aDateStrings[1].split(":").join("")
            const bDateYMDHMS = bDateStrings[0].split("/").reverse().join("") + bDateStrings[1].split(":").join("")

            return (order === "newest" ? bDateYMDHMS - aDateYMDHMS : aDateYMDHMS - bDateYMDHMS)
        })

        sortedNotes.forEach( (note, index) => {
            note.noteDOM.style.setProperty("order", `${index}`)
        })
        createNote.style.setProperty("order", `${sortedNotes.length + 99}`)
    }
}

applyCoolBorderRadius(1)