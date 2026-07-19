function project(name){
  const todos = [];
  return{
    name,

    addTodo(todoItem){
      todos.push(todoItem);
    },

    getTodo(){
      return todos;
    }
  }
}

export {project};