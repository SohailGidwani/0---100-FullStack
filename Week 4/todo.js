// let todoCount = 0;

// function addTodo(){
//     const title = document.getElementById("title").value;
//     const description = document.getElementById("description").value;
//     const originalDesc = document.getElementById("container").innerHTML;
//     const todoId = 'todo-' + todoCount++; // unique ID for each todo

//     document.getElementById("container").innerHTML = originalDesc + `
//     <div id="${todoId}">
//         <div>${title}</div>
//         <div>${description}</div>
//         <button onclick="markAsDone('${todoId}')">Mark as done</button>
//     </div>
//     `;
// }

// function markAsDone(id){
//     const todoItem = document.getElementById(id);
//     todoItem.style.textDecoration = "line-through";
//     todoItem.style.color = "grey";
// }

// let globalId = 1;

// function markAsDone(todoId) {
//     const parent = document.getElementById(todoId);
//     parent.children[2].innerHTML = "Done!"
// }

// function createChild(title, description, id) {
//     const child = document.createElement("div");
//     const firstGrandParent = document.createElement("div");
//     firstGrandParent.innerHTML = title;
//     const secondGrandParent = document.createElement("div");
//     secondGrandParent.innerHTML = description;
//     const thirdGrandParent = document.createElement("button");
//     thirdGrandParent.innerHTML = "Mark as done";
//     thirdGrandParent.setAttribute("onclick", `markAsDone(${id})`);
//     child.appendChild(firstGrandParent);
//     child.appendChild(secondGrandParent);
//     child.appendChild(thirdGrandParent)
//     child.setAttribute("id", id);
//     return child;
// }
// function addTodo() {
//     const title = document.getElementById("title").value;
//     const description = document.getElementById("description").value;
//     const parent = document.getElementById("todos");

//     parent.appendChild(createChild(title, description, globalId++));
// }

document.addEventListener("DOMContentLoaded", function() {
    // Load todos from local storage
    loadTodos();
});

let todos = [];

function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const todo = {
        id: Date.now(),
        title: title,
        description: description,
        done: false
    };
    todos.push(todo);
    saveTodos();
    renderTodos();
}

function markAsDone(id) {
    todos = todos.map(todo => {
        if(todo.id === id) {
            return {...todo, done: !todo.done};
        }
        return todo;
    });
    saveTodos();
    renderTodos();
}

function renderTodos() {
    const container = document.getElementById("container");
    container.innerHTML = ''; // Clear the container
    todos.forEach(todo => {
        container.innerHTML += `
        <div id="${todo.id}" style="${todo.done ? 'text-decoration: line-through; color: grey;' : ''}">
            <div>${todo.title}</div>
            <div>${todo.description}</div>
            <button onclick="markAsDone(${todo.id})">${todo.done ? 'Undo' : 'Mark as done'}</button>
        </div>
        `;
    });
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    const storedTodos = localStorage.getItem("todos");
    if(storedTodos) {
        todos = JSON.parse(storedTodos);
        renderTodos();
    }
}
