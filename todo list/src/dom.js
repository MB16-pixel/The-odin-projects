export function dom() {
  const addTodo = document.querySelector(".addTodo");
  const formContainer = document.querySelector(".formContainer");
  const form = document.querySelector(".formContainer form");
  const close = document.getElementById("close");
  const titleInput = document.getElementById("title");
  const descInput = document.getElementById("desc");
  const dueDateInput = document.getElementById("dueDate");
  const prioritySelect = document.getElementById("priority");
  const todoList = document.querySelector(".todoList");
  const btns = document.querySelector(".btns");
  const done = document.getElementById("done");
  const edit = document.getElementById("edit");
  const deleteBtn = document.getElementById("delete");
  const todos = document.querySelector("todos");

  return {
    titleInput,
    descInput,
    dueDateInput,
    prioritySelect,
    addTodo,
    formContainer,
    form, 
    close,
    todoList,
    btns,
    done,
    edit,
    deleteBtn,
    todos
  };
}