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
    
    const content = document.createElement("div");
    content.classList.add("todoContent");
    content.innerHTML = `
      <p><strong>Title:</strong> ${titleInput.value}</p>
      <p><strong>Description:</strong> ${descInput.value}</p>
      <p><strong>Due Date:</strong> ${dueDateInput.value}</p>
      <p><strong>Priority:</strong> ${prioritySelect.value}</p>
    `;
    
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("todoButtons");
    buttonContainer.innerHTML = `
      <button id="done">✔️Done</button>
      <button id="edit">✏️Edit</button>
      <button id="delete">❌Delete</button>
    `;
    
    todoItem.appendChild(content);
    todoItem.appendChild(buttonContainer);
    todoList.appendChild(todoItem);
    
    // Add event listeners to the buttons
    const doneBtn = buttonContainer.querySelector("#done");
    const editBtn = buttonContainer.querySelector("#edit");
    const deleteBtn = buttonContainer.querySelector("#delete");
    
    doneBtn.addEventListener("click", function() {
      content.style.textDecoration = "line-through";
      doneBtn.style.backgroundColor = "gray"
    });
    doneBtn.addEventListener("dblclick", function() {
      content.style.textDecoration = "none";
      doneBtn.style.backgroundColor = "rgb(48, 246, 48)";
    });
    
    editBtn.addEventListener("click", function() {
      // Add edit functionality here
    });
    
    deleteBtn.addEventListener("click", function() {
      todoItem.remove();
    });
    
    form.reset();
    formContainer.style.display = "none";
  });
}

export {todo};