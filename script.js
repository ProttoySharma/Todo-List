let input = document.querySelector(".field input")
let button = document.querySelector(".field button")
let ul = document.querySelector(".ul-task")



function addTodo(){
    if (input.value == ""){
        alert("Write something in the input field....!")
        saveData()
    }else{
        let li = document.createElement("li")
        li.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`
        ul.appendChild(li)
        saveData()
    }
    input.value = ""
    saveData()
}


input.addEventListener("keydown",function(todo){
    if (todo.key === "Enter") {
        addTodo()
    }
})


ul.addEventListener("click", function(event){
    if (event.target.tagName == "LI"){
        event.target.classList.toggle("completed")
        saveData()
    }
    else if(event.target.tagName == "I"){
        event.target.parentElement.remove()
        saveData()
    }
})



function saveData(){
    localStorage.setItem("Todo", ul.innerHTML)
}



function showTask(){
    ul.innerHTML = localStorage.getItem(Todo)
}


showTask()