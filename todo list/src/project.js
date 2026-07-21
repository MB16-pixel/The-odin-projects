import { dom } from "./dom.js";

const { projectForm, addProject, submitProject, close, submitProjectForm, projectName} = dom();

function project(name){
  addProject.addEventListener("click",function(){
    projectForm.style.display = "flex"
  })
  close.addEventListener("click", function (event) {
    event.preventDefault();
    projectForm.style.display = "none";
  });
  submitProjectForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!submitProjectForm.checkValidity()) {
      form.reportValidity();
      return;
    }

    const projectItem = document.createElement("div");
    projectItem.classList.add("projectItem");

    const content = document.createElement("div");
    content.classList.add("projectContent");

     content.innerHTML = `
      <button></button>
    `;
  })
}

export {project};