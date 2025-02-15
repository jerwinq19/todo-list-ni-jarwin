const userInput = document.getElementById("inputs")
const addBtn = document.getElementById("btn")
const taskCont = document.getElementById("task")
const taskList = document.getElementById("taskList")
const deleteAll = document.getElementById('delete-all')


addBtn.addEventListener('click', () => {
    let inputValue = userInput.value.trim()

    if (inputValue === "") {
        return alert("please put a type")
    }


    let todo = document.createElement('li')
    let delteBtn = document.createElement('button')
    let checkBtn = document.createElement('button')
    let textSpan = document.createElement('span')
    let buttonSpan = document.createElement('span')

    textSpan.textContent = inputValue
    delteBtn.textContent = "Delete"
    checkBtn.textContent = "Done"


    buttonSpan.appendChild(checkBtn)
    buttonSpan.appendChild(delteBtn)
    todo.appendChild(textSpan)
    todo.appendChild(buttonSpan)
    taskList.appendChild(todo)

    userInput.value = ""

    delteBtn. addEventListener('click', () => {
        todo.remove()
    })

    checkBtn.addEventListener('click', () => {
        todo.style.backgroundColor = 'green'
        textSpan.style.textDecoration = 'line-through'
    })
})

deleteAll.addEventListener('click', () => {
    taskList.innerHTML = ''
    
})