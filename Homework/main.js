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

closeSMBtn.addEventListener("click", closeSecModal)



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
        if (!(typeof(content) === "string" && content)) return;

        this.todos.push({todo: content, completed: false})
        return this.todos.length - 1
    }
    editTodo(todoIndex, newContent) {
        if (!(typeof(content) === "string" && content)) return;
        if (!this.#indexExists(todoIndex)) return;
        this.todos[todoIndex]({todo: newContent, completed: this.todos[todoIndex]["completed"]})
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

    }
}

const notes = {}
let lastOpenedId
let todosCreatedInputs = []

const noteListChildTemplate = document.getElementById("noteListChildTemplate")
const nameField = document.getElementById("setName")
const todoTemplate = document.getElementById("todoTemplate")
const addToDo = document.getElementById("addToDo")
const secMTitle = document.getElementById("secMTitle")

const genStuff = []

function createInstance(cloneFrom, permanent = false, newParent = null) {
    const instanceNew = cloneFrom.cloneNode(true)
    newParent = newParent === null ? cloneFrom.parentElement :newParent
    newParent.appendChild(instanceNew)
    instanceNew.classList.remove("none")

    if (!permanent) {
        genStuff.push(instanceNew)
    }

    return instanceNew // return cloned instance for further editing/connecting events
}

function saveCurrentNote() {

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

    // nameField.classList.remove("none") // show the note name field
    // nameField.value = "" // make sure to clear the older inputs

    if (noteToOpen === null) { // generate new note
        console.log("creating new");
        
        const n = new Note()
        secMTitle.innerText = n.name
        lastOpenedId = n.id

        const noteOverwiev = createInstance(noteListChildTemplate, true)
        noteOverwiev.querySelector("h4").innerText = n.name

        notes[n.id] = {noteClass: n, noteDOM: noteOverwiev}

        noteOverwiev.addEventListener("click", function() {
            reloadNote(n.id)
        })

        const newNameInput = createInstance(nameField)
        const inp = newNameInput.querySelector("input")

        inp.addEventListener("input", function() {
            n.name = inp.value
            secMTitle.innerText = n.name
            noteOverwiev.querySelector("h4").innerText = n.name
        })
        todosCreatedInputs.push(inp)

        function addTodoElement() {
            const newTodo = createInstance(todoTemplate)
            let done = 0
            todosCreatedInputs.push(newTodo.querySelector("input"))
            const d = newTodo.querySelector("div")
            d.addEventListener("click", function() {
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
            })
            // newTodo.querySelector("input")
        }

        addTodoElement()

        const atd = createInstance(addToDo)
        atd.addEventListener("click", function() {
            if (todosCreatedInputs.every( (input) => typeof(input.value) === "string" && input.value)) {
                addTodoElement()
            }
        })

    } else {
        const n = notes[noteToOpen]
        lastOpenedId = n.id
    }

    lastOpenedId = noteToOpen
}

document.getElementById("createNote").addEventListener("click", () => {
    reloadNote()
})