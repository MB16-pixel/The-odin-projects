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

    todoItem.innerHTML = `
      <p><strong>Title:</strong> ${titleInput.value}</p>
      <p><strong>Description:</strong> ${descInput.value}</p>
      <p><strong>Due Date:</strong> ${dueDateInput.value}</p>
      <p><strong>Priority:</strong> ${prioritySelect.value}</p>
    `;

    todoList.appendChild(todoItem);
    form.reset();
    formContainer.style.display = "none";
  });

  return {
    title: titleInput.value,
    desc: descInput.value,
    date: dueDateInput.value,
    priority: prioritySelect.value,
  };
}