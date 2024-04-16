list = ["Wake up early", "Have breakfast", "Go to work", "Return home", "Sleep early"]
const number = document.querySelector(".count")
number.textContent = list.length
function showTask(event) {
    event.preventDefault();
    const choice = document.querySelector(".task-index").value
    const display = document.querySelector(".task-name")
    if (choice >= list.length || choice < 0) {
        display.textContent = "Not Available"
    }
    else {
        display.textContent = list[choice]
    }
}
const action = document.querySelector(".sub-btn")
action.onclick = showTask
