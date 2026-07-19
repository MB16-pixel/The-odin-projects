export function dom(){
  const addProject = document.querySelector(".addProject");
  const addTodo = document.querySelector(".addTodo");
  const form = document.querySelector(".formContainer");
  const close = document.getElementById("close");
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");
  const date = document.getElementById("date");
  const priority = document.getElementById("priority");


  addTodo.addEventListener("click",function(){
    form.style.display = "block";
  })

  close.addEventListener("click",function(){
    form.style.display = "none";
  })

  return({
    title: title.innerText,
    desc: desc.innerText,
    date: date.innerText,
    priority: priority.value
  })
}