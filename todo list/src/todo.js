import { dom } from './dom.js';

const {
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
    deleteBtn } = dom();

function todo(title, desc, date, priority){
  addTodo.addEventListener("click", function () {
    formContainer.style.display = "flex";
  });

  close.addEventListener("click", function (event) {
    event.preventDefault();
    formContainer.style.display = "none";
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const todoItem = document.createElement("div");
    todoItem.classList.add("todoItem");
    todoItem.classList.add("btns");
    
    todoItem.innerHTML = `
      <p><strong>Title:</strong> ${titleInput.value}</p>
      <p><strong>Description:</strong> ${descInput.value}</p>
      <p><strong>Due Date:</strong> ${dueDateInput.value}</p>
      <p><strong>Priority:</strong> ${prioritySelect.value}</p>
      <button id="done">✔️Done</button>
      <button id="edit">✏️Edit</button>
      <button id="delete">❌Delete</button>
    `;

    todoList.appendChild(todoItem);
    form.reset();
    formContainer.style.display = "none";
  });
}

export {todo};