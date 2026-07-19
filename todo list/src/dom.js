export function dom(){
  const addProject = document.querySelector(".addProject");
  const addTodo = document.querySelector(".addTodo");
  const form = document.querySelector(".formContainer");
  const close = document.getElementById("close");
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");
  const date = document.getElementById("date");
  const priority = document.getElementById("priority");
  const submit = document.querySelector("submit");
  const todos = document.querySelector("todos");

  addTodo.addEventListener("click",function(){
    form.style.display = "block";
  })

  close.addEventListener("click",function(){
    form.style.display = "none";
  })

  submit.addEventListener("click",function(){
    const todoList = document.createElement('div');
    todoList.classList.add('todoList');

    todoList.innerHTML=`
      
    `
  })

  return({
    title: title.innerText,
    desc: desc.innerText,
    date: date.innerText,
    priority: priority.value
  })
}