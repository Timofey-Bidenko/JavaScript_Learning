const addGroupBtn = document.getElementById("addGroupButton")
const manageGroup = document.getElementById("manageGroup")

addGroupBtn.addEventListener("click", function() {
    console.log("Creating new group");
    manageGroup.classList.remove("none")
})