import { dom } from "./dom.js";

const { projectForm, addProject, submitProject, close, submitProjectForm, projectName, projectList} = dom();

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
      submitProjectForm.reportValidity();
      return;
    }

    const projectItem = document.createElement("div");
    projectItem.classList.add("projectItem");
    projectItem.innerHTML = `<button>${projectName.value}</button>`;

    projectList.appendChild(projectItem);
    projectForm.style.display = "none";
  })
}

export {project};