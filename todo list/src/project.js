import { dom } from "./dom.js";
import { todo } from "./todo.js";

const { 
  projectForm, 
  addProject, 
  close, 
  submitProjectForm, 
  projectName, 
  projectList,
  // Select the main left container where todo workspaces will live
  todoList 
} = dom();

function project() {
  // Clear the existing todoList container to make room for our project views
  todoList.innerHTML = '';

  addProject.addEventListener("click", function() {
    projectForm.style.display = "flex";
  });

  close.addEventListener("click", function (event) {
    event.preventDefault();
    projectForm.style.display = "none";
  });

  submitProjectForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!submitProjectForm.checkValidity()) {
      submitProjectForm.reportValidity();
      return;
    }

    const name = projectName.value.trim();
    if (name) {
      createNewProjectWorkspace(name);
      submitProjectForm.reset();
      projectForm.style.display = "none";
    }
  });

  function createNewProjectWorkspace(name) {
    // 1. Create the Sidebar Button
    const projectItem = document.createElement("div");
    projectItem.classList.add("projectItem");
    
    const btn = document.createElement("button");
    btn.textContent = name;
    projectItem.appendChild(btn);
    projectList.appendChild(projectItem);

    // 2. Create a physical dedicated Container for this project's todos
    const projectWorkspace = document.createElement("div");
    projectWorkspace.classList.add("project-workspace");
    projectWorkspace.style.display = "none"; // Hidden by default
    todoList.appendChild(projectWorkspace);

    // 3. Directly link the button and the container in code memory
    btn.addEventListener("click", () => {
      // Hide all existing project workspaces
      document.querySelectorAll(".project-workspace").forEach(ws => ws.style.display = "none");
      document.querySelectorAll(".projectItem button").forEach(b => b.classList.remove("active"));

      // Show this project's specific workspace container
      projectWorkspace.style.display = "block";
      btn.classList.add("active");

      // Pass this specific container over to the todo script to manage
      todo(projectWorkspace);
    });

    // Auto-click the newly created project to focus it immediately
    btn.click();
  }

  // Create your starting default project workspace on bootup
  createNewProjectWorkspace("Default");
}

export { project };
