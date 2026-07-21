import { dom } from "./dom.js";

const { projectForm, addProject, submitProject, close, } = dom();

function project(name){
  addProject.addEventListener("click",function(){
    projectForm.style.display = "flex"
  })
  close.addEventListener("click", function (event) {
    event.preventDefault();
    projectForm.style.display = "none";
  });
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
  })
}

export {project};