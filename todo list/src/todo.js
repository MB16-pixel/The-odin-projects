import { dom } from './dom.js';

const {
    titleInput, descInput, dueDateInput, prioritySelect,
    addTodo, formContainer, form, close
} = dom();

let currentActiveWorkspace = null;
let isInitialized = false;

function todo(projectWorkspace) {
  // Update our pointer to track which physical project view is currently open
  currentActiveWorkspace = projectWorkspace;

  // Global form listeners only need to be attached once ever
  if (!isInitialized) {
    addTodo.addEventListener("click", function () {
      form.reset();
      // Remove any leftover edit targets
      form.removeAttribute('data-editing-index');
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

      // Check if we are editing an existing item inside the active workspace
      const editingIndex = form.getAttribute('data-editing-index');

      if (editingIndex !== null) {
        // Find that specific todo item inside our current active workspace div
        const todoItem = currentActiveWorkspace.children[editingIndex];
        updateTodoDOM(todoItem);
      } else {
        // Create a completely brand new todo element block
        const newTodo = createTodoElement();
        // Append it strictly inside the active project container layout
        currentActiveWorkspace.appendChild(newTodo);
      }

      form.reset();
      formContainer.style.display = "none";
      
      // Refresh list indices tracking numbers
      reindexWorkspace(currentActiveWorkspace);
    });

    isInitialized = true;
  }
}

// Generates the raw physical task card element block
function createTodoElement() {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todoItem");

  todoItem.innerHTML = `
    <div class="todoContent">
      <p><strong>Title:</strong> <span class="t-val">${titleInput.value}</span></p>
      <p><strong>Description:</strong> <span class="d-val">${descInput.value}</span></p>
      <p><strong>Due Date:</strong> <span class="date-val">${dueDateInput.value}</span></p>
      <p><strong>Priority:</strong> <span class="p-val">${prioritySelect.value}</span></p>
    </div>
    <div class="todoButtons">
      <button class="done">✔️Done</button>
      <button class="edit">✏️Edit</button>
      <button class="delete">❌Delete</button>
    </div>
  `;
  const content = todoItem.querySelector(".todoContent");
  // Attach localized action commands directly to this card instance
  todoItem.querySelector(".done").addEventListener("click", () => {
    
    content.style.textDecoration = "line-through";
    todoItem.querySelector(".done").style.backgroundColor = "gray";
  });

  todoItem.querySelector(".done").addEventListener("dblclick",function(){
     content.style.textDecoration = "none";
    todoItem.querySelector(".done").style.backgroundColor = "rgb(48, 246, 48)";
  })

  todoItem.querySelector(".edit").addEventListener("click", () => {
    // Populate form inputs directly from the textual elements inside this specific card
    titleInput.value = todoItem.querySelector(".t-val").textContent;
    descInput.value = todoItem.querySelector(".d-val").textContent;
    dueDateInput.value = todoItem.querySelector(".date-val").textContent;
    prioritySelect.value = todoItem.querySelector(".p-val").textContent;

    // Track this specific card's position inside its parent container for editing
    const index = Array.from(todoItem.parentNode.children).indexOf(todoItem);
    form.setAttribute('data-editing-index', index);
    
    formContainer.style.display = "flex";
  });

  todoItem.querySelector(".delete").addEventListener("click", () => {
    const parent = todoItem.parentNode;
    todoItem.remove();
    reindexWorkspace(parent);
  });

  return todoItem;
}

// Updates text nodes inside an existing card when editing finishes
function updateTodoDOM(todoItem) {
  todoItem.querySelector(".t-val").textContent = titleInput.value;
  todoItem.querySelector(".d-val").textContent = descInput.value;
  todoItem.querySelector(".date-val").textContent = dueDateInput.value;
  todoItem.querySelector(".p-val").textContent = prioritySelect.value;
}

// Keeps sequential internal indexing structured correctly for edit tracking updates
function reindexWorkspace(workspace) {
  if (form.getAttribute('data-editing-index')) {
     form.removeAttribute('data-editing-index');
  }
}

export { todo };
