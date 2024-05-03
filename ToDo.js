//Start declaring Variables
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption =  document.querySelector(".filter-todo");


//Add event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent page from refreshing/submitting // Prevent page from refreshing/submitting
  addTodo(); // Call addTodo function
}

// Add event listener to the form for submission
document.querySelector("form").addEventListener("submit", handleFormSubmit);

//Specify/Create Function for adding ToDo
function addTodo(event) {
  //Prevent page from refreshing/submitting
  if (event) {
    event.preventDefault();
  }

  //Create ToDo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Create Trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append to List
  todoList.appendChild(todoDiv);

  //Clear the Value (todo input)
  todoInput.value = "";
}

//Function to Delete the Values
function deleteCheck(event) {
  const item = event.target; //event means event
  //delete Trash button with the click

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // Animation
    todo.classList.add("fall"); 
    todo.addEventListener("transitionend", function(){
      todo.remove();
    })
  }

  //Checkmark Area
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    
    todo.classList.toggle("completed");
  }
}

function filterTodo(e){
  console.log("Filtering todos...");
  const todos = todoList.childNodes;
  todos.forEach(function (todo){
    if (todo.nodeType === 1) { // Ensure todo is an element node
      console.log(todo);
      switch(e.target.value){
        case "all":
          console.log("Displaying all todos...");
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList && todo.classList.contains("completed")) { // Check if todo.classList is defined
            console.log("Displaying completed todos...");
            todo.style.display = "flex";
          } else {
            console.log("Hiding uncompleted todos...");
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (todo.classList && !todo.classList.contains("completed")) { // Check if todo.classList is defined
            console.log("Displaying uncompleted todos...");
            todo.style.display = "flex";
          } else {
            console.log("Hiding completed todos...");
            todo.style.display = "none";
          }
          break;
      }
    }
  });
}
