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
  const todos = document.querySelector("todos");
  const projectForm = document.querySelector(".projectForm");
  const addProject = document.querySelector(".addProject");
  const submitProject = document.querySelector(".submitProject");
  const submitProjectForm = document.querySelector(".submitProject form");
  const projectName = document.querySelector(".projectName");

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
    todos,
    projectForm,
    addProject,
    submitProject,
    submitProjectForm,
    projectName
  };
}